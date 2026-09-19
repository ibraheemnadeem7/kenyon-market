# IPHS 484 Project: MVP Definition and Tech Stack

**Author:** Muhammad Ibraheem Nadeem
**Date:** September 6, 2026
**Status:** Draft v1
**Scope:** Solo project, one semester, desktop-first web app

---

## 1. One-sentence pitch

A Kenyon-only marketplace where a student photographs an item, gets an auto-generated listing with a price that decays on a schedule and converts to free before move-out, while every listing, view, and sale is logged as a dataset for a time-to-sale model.

## 2. The problem, stated narrowly

Seniors moving out have no time and no incentive to price things carefully. The result is that usable goods go in the dumpster while other students buy the same goods new. Existing channels (all-student email, Facebook groups, GroupMe) fail for three reasons:

1. Listing something takes more effort than throwing it away.
2. Nothing forces a price down as the deadline approaches, so items sit unsold at day-one prices.
3. Notifications are all-or-nothing, so people opt out entirely and the market loses its audience.

## 3. Research contribution

The app is the instrument, not the result. The contribution is the dataset and the model built on it:

- **Primary question:** how does a listing's price decay schedule affect time to sale, controlling for category, condition, start price, and days remaining until move-out?
- **Method:** survival analysis on time-to-sale (Kaplan-Meier by decay curve, then a Cox proportional hazards model with the decay parameters as covariates). Right-censoring handles items that never sell, which is exactly the case a naive regression gets wrong.
- **Why it is novel:** no public dataset links per-listing price trajectories to outcomes on a closed campus market. You generate it.

Everything in the MVP scope below exists either to make the market work or to make this dataset exist.

---

## 4. MVP scope

Four features. Nothing else ships in v1.

### 4.1 Photo-to-listing

**User flow**

1. Seller clicks "New listing" and uploads one to four photos (drag-and-drop on desktop, camera roll on mobile browser).
2. Images go to object storage. The app sends them to a vision model with a structured-output schema.
3. Model returns: `title`, `category` (from a fixed enum), `condition` (new / like new / good / worn), `suggested_start_price`, `short_description`.
4. Seller lands on a pre-filled form and edits anything. Nothing is published until the seller confirms.
5. On confirm the listing goes live and the raw model output is stored alongside the human-corrected version.

**Why store both:** the delta between model suggestion and seller correction is a second small dataset (how far off is the model, and in which categories). Cheap to capture, useful in the writeup.

**Acceptance criteria**

- A listing can be created in under 60 seconds from upload to publish.
- Model output is never published without a confirm click.
- Failed model calls fall back to a blank manual form, never a blocked flow.

### 4.2 Decaying price with auto-freebie transition

**User flow**

1. On publish the seller sets: start price, end date, and a curve from three presets (aggressive, moderate, hold firm), plus an optional price floor.
2. A scheduled job runs once nightly and recomputes the current price for every active listing.
3. Each recompute writes a row to a price history table. The listing page shows the current price plus "drops to $X on [date]".
4. When the price hits the floor (or zero) or the end date passes, the listing auto-moves to the Freebies tab.

**Curve definitions (pick these now so the model is interpretable later)**

Let `t` be fraction of the listing window elapsed, `p0` the start price, `f` the floor.

- Hold firm: `p(t) = p0` until `t = 0.75`, then linear to `f`
- Moderate: linear, `p(t) = p0 - (p0 - f) * t`
- Aggressive: exponential, `p(t) = f + (p0 - f) * exp(-3t)`

Three curves is deliberate. It gives you a categorical treatment variable with clean interpretation instead of a continuous parameter you cannot power a test on.

**Acceptance criteria**

- Price is recomputed by a server job, never by the browser, so every user sees the same number.
- Every price change is a durable row, not an overwrite.
- Transition to free is automatic and reversible by the seller for 24 hours.

### 4.3 Opt-in notifications only

Hard rule: no mass emails, ever. Default is in-app only.

**Ships in v1**

- In-app notification center.
- Saved searches: a user saves a query (category plus optional keyword) and gets notified when a matching listing appears.
- Three independent toggles: price-drop alerts on watched items, free-item alerts, saved-search matches.
- Optional daily digest email, off by default, one email maximum per day.

**Acceptance criteria**

- A brand new account receives zero emails until it explicitly turns one on.
- Every email has a working one-click unsubscribe.

### 4.4 Event logging layer

This is the part that must not be cut, because it is the thesis.

Log every one of these as an append-only row with a timestamp and an anonymized user id:

| Event | Fields captured |
|---|---|
| `listing_created` | category, condition, start price, curve, end date, model suggestion vs final |
| `listing_viewed` | listing id, viewer id, current price at view time |
| `price_changed` | listing id, old price, new price, scheduled vs manual |
| `item_saved` | listing id, viewer id |
| `message_sent` | listing id, thread id (content not logged) |
| `listing_claimed` | listing id, price at claim |
| `listing_sold` | listing id, final price, hours since creation |
| `listing_expired` | listing id, final price, never sold |
| `transitioned_to_free` | listing id, price at transition |

**Acceptance criteria**

- Logging is a database write inside the same transaction as the action, so no event is silently dropped.
- A single admin export produces one CSV per event table for offline analysis.

---

## 5. Explicitly out of scope for v1

Name these in the proposal as stretch goals so nobody thinks you forgot them.

| Cut | Reason |
|---|---|
| Mount Vernon / non-student access | Introduces verification, liability, and safety design unrelated to the research question. Deliver as a written phase-two design with a safety plan instead. |
| Auto-donate pipeline | Requires a real partner. Email the Office of Green Initiatives before committing to it anywhere. |
| Payment processing | Weeks of work plus a compliance burden. Venmo or cash handoff, app tracks status only. |
| Textbook ISBN scan and course tagging | Genuinely good, but a separate vertical with its own data model. |
| Map / building view | Nice discovery feature, zero bearing on the pricing question. |
| Batch room-dump listing | Depends on segmentation quality. Demo it, do not ship it. |
| Ratings and reputation | Meaningless at low transaction volume in one semester. |

---

## 6. Tech stack

You are directing the build rather than hand-writing it, so the selection criterion is: which stack do AI coding tools produce correct, working code for most reliably. That points at the mainstream TypeScript stack, because it has the largest volume of public training material and the tightest feedback loop (type errors caught before runtime).

### 6.1 Recommended stack

| Layer | Choice | Why this one |
|---|---|---|
| Framework | **Next.js 15 (App Router) + TypeScript** | Highest-density training data of any web framework, so generated code works on the first pass more often. TypeScript matters more than usual here: the type checker catches AI mistakes you would otherwise find at runtime. |
| UI | **Tailwind CSS + shadcn/ui** | shadcn components are copied into your repo as plain source, so an AI tool can read and edit them directly instead of guessing at a library's API. |
| Database + auth + storage | **Supabase** (hosted Postgres) | One service covers Postgres, authentication, image storage, and row-level security. Real SQL, so your event tables are directly queryable and exportable. Generous free tier. |
| Auth policy | Supabase Auth, email OTP restricted to `@kenyon.edu` | Avoids building SSO. Domain restriction is a few lines in a database policy. Ask Kenyon LBIS about Google Workspace SSO only if you want it later. |
| Vision model | **Claude API** (or GPT-4o) with structured output / tool schema | Forcing a JSON schema means the model returns a typed object, not prose you have to parse. Budget roughly a cent per listing. |
| Scheduled price job | **Supabase `pg_cron`** or a Vercel Cron route | Runs the nightly decay recompute. `pg_cron` keeps the logic in SQL next to the data, which is fewer moving parts. |
| Email | **Resend** | Simple API, good deliverability, free tier covers a campus pilot. Only used for opt-in digests. |
| Hosting | **Vercel** | Zero-config for Next.js, free tier, preview deploy per branch. |
| Admin charts | **Recharts** | React-native charting, well represented in training data. |
| Analysis | **Python: pandas, lifelines, matplotlib** in a notebook | Export the event tables and do the survival analysis where you are already fluent. `lifelines` gives you Kaplan-Meier and Cox PH directly. |
| Version control | **GitHub**, one repo, small commits | Non-negotiable when AI tools are writing the code. Commit before every prompted change so you can revert cleanly. |

### 6.2 Where Python still belongs

You do not need a Python service in the app. Keep Python for the layer where it earns its place:

- Offline analysis of exported event data (survival models, decay curve comparison, figures for the paper and poster).
- A simulation script that generates synthetic listings and buyer arrivals, so you can sanity-check the decay mechanism before real users touch it. This also gives you something to show at the first intermediate presentation before you have real data.

Splitting the app itself across two languages would double the surface area you have to debug for no research benefit.

### 6.3 Data model sketch

Nine tables. Give this section to your coding tool as the schema spec.

```
profiles          id, kenyon_email_hash, display_handle, created_at
listings          id, seller_id, title, description, category, condition,
                  start_price, floor_price, curve, end_date, status,
                  current_price, created_at, sold_at
listing_images    id, listing_id, storage_path, position
listing_ai_meta   listing_id, model_title, model_category, model_condition,
                  model_price, model_version, accepted_without_edit
price_history     id, listing_id, price, changed_at, reason
saved_searches    id, user_id, category, keyword, active
notifications     id, user_id, type, listing_id, read_at, created_at
threads/messages  id, listing_id, buyer_id, seller_id, body, sent_at
events            id, user_id_hash, event_type, listing_id, payload_json, ts
```

`events` is the analysis table. The others are the app. Keep that separation clear so an export is one query.

### 6.4 A note on your desktop-first choice

Desktop-first is the right call for build speed, but photo-to-listing is the feature people will use standing in a dorm room. With Tailwind, making the listing-creation page and the browse feed work on a phone browser costs you a handful of responsive classes, not a second codebase. Recommendation: build desktop-first, but keep those two pages usable on mobile. No native app, no app store.

---

## 7. Build order

Thirteen weeks, working backward from a demo plus a poster.

| Weeks | Milestone | Definition of done |
|---|---|---|
| 1 | Setup | Repo, Vercel deploy, Supabase project, auth working with Kenyon email restriction, one page that says who is logged in |
| 2 | Schema and CRUD | All nine tables created, a listing can be manually created, edited, and viewed |
| 3 | Image upload and feed | Multi-image upload to storage, browse feed with category filter, listing detail page |
| 4 | Photo-to-listing | Vision call with structured output, pre-filled form, both model and final values stored |
| 5 | Pricing engine | Curves implemented in SQL, nightly job running, price history rows accumulating, countdown displayed |
| 6 | Freebie transition | Auto-transition on floor or date, separate free tab, 24-hour seller reversal |
| 7 | Buffer and mid-semester presentation | Working demo end to end, plus simulation results on synthetic data |
| 8 | Messaging | Per-listing threads with masked identities, claim and hold timer |
| 9 | Notifications | In-app center, saved searches, three toggles, opt-in digest |
| 10 | Event logging audit | Verify every event in section 4.4 fires, build the admin export |
| 11 | Pilot | Recruit 20 to 40 users, seed listings, monitor daily |
| 12 | Analysis | Export data, Kaplan-Meier by curve, Cox model, figures |
| 13 | Writeup and poster | Paper draft, poster, final demo |

Weeks 1 through 6 are the ones that must not slip. If week 7 arrives and pricing is not working, cut messaging (week 8) and use email handoff instead.

---

## 8. Risks

| Risk | Likelihood | Mitigation |
|---|---|---|
| **Not enough users to get statistical power** | High | This is the real risk. A semester pilot may yield 100 to 200 listings. Plan the analysis as descriptive plus a well-specified model on a small sample, and be explicit about power in the writeup. The simulation gives you a second, larger synthetic result to compare against. |
| **Vision model output is unreliable for cluttered dorm photos** | Medium | Always human-confirmed, never auto-published. Measure the correction rate and report it as a finding rather than a failure. |
| **Curve assignment is self-selected, not randomized** | High | Sellers who pick "aggressive" differ from those who pick "hold firm", so the naive comparison is confounded. Either randomize the default curve shown at listing creation (a real A/B test, and the cleaner design), or control for category and start price and be explicit about the limitation. **Decide this before week 5.** |
| **IRB / human subjects review** | Medium | You are collecting behavioral data from students. Check with your advisor in week 1, not week 10. Anonymized event logging with informed consent at signup is likely sufficient, but the timing matters. |
| **Scope creep back toward the full feature list** | High | The section 5 cut list is the defense. Anything not in section 4 goes in the proposal as a stretch goal and nowhere else. |
| **Move-out timing does not align with the semester** | High | Real move-out is in May, not December. The fall pilot has to simulate a deadline (set an artificial "end of pilot" date) or target end-of-semester dorm turnover. Address this explicitly in the proposal. |

---

## 9. Open questions for your advisor

1. Does the pilot need IRB review, and on what timeline?
2. Is randomizing the default decay curve acceptable, or does that raise consent issues?
3. Is a fall-semester artificial deadline a defensible substitute for real move-out pressure?
4. Is the survival analysis the contribution, or is the built artifact itself sufficient for this course?

## 10. This week

- [ ] Email the Office of Green Initiatives about the donation partner, even though it is cut from v1. A "we explored it" line in the proposal is worth the email.
- [ ] Ask your advisor about IRB.
- [ ] Create the GitHub repo and get a deployed hello-world on Vercel. Do this before writing the proposal so the stack is proven, not assumed.
- [ ] Decide randomized vs self-selected curve assignment.
