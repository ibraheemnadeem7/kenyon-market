# Theme Spec: Kenyon Marketplace

**Reference:** the look of tsenta.com, from the screen recording in this folder. Use the style only. Do not copy their name, logo or text.
**How to use this file:** paste it into your AI coding tool at the start of a UI task and say "follow Theme Spec.md". Everything below works as Tailwind + shadcn/ui instructions.

---

## 1. The feel in one paragraph

Clean, calm and confident. The page is an off-white canvas with black text and black pill buttons. Most of the page is plain. Color shows up in only one place: the soft pastel item cards, which make the feed look friendly and easy to scan. Headlines are big and regular weight, not bold. Everything is rounded. Borders are thin and light, and shadows are barely there. It should look like a tool that runs itself, not like a busy classifieds site.

**Three rules that define the style:**

1. Black and off-white for everything except the item cards.
2. Buttons are always pills (fully rounded). The main action is black, the secondary action is white with a thin border.
3. Pastel colors belong to item cards only. Never use pastels for buttons, text or page backgrounds.

---

## 2. Colors

### Base

| Token | Hex | Use |
|---|---|---|
| `background` | `#FDFBFC` | Page background on marketing pages (very slightly warm white) |
| `surface` | `#FFFFFF` | App pages, cards, panels, the navbar in the app |
| `surface-muted` | `#F5F1EE` | Inset areas inside a card, search bars, "exclude" fields |
| `border` | `#E8E4E1` | All borders and dividers, 1px |
| `foreground` | `#0A0A0A` | Headlines, primary buttons, main text |
| `muted-foreground` | `#56545A` | Paragraphs, subtitles |
| `subtle-foreground` | `#8A8790` | Timestamps, labels, placeholder text |
| `inverse` | `#000000` | Dark feature panels (black cards with white text) |
| `inverse-muted` | `#131313` | Boxes inside a dark panel |

### Accents (use sparingly)

| Token | Hex | Use |
|---|---|---|
| `brand-dark` | `#1B2F26` | Very dark green. Active filter chips, the small credits/badge pill in the navbar, a secondary dark button |
| `success` | `#117D49` | Green "+" icons, "Sold" and "Ready" status dots |
| `accent-line` | `#D2574B` | Muted coral red. Only for step indicators (the thin line and outlined pills in a "how it works" row) |
| `tag-purple` | `#DEAEFF` | Small highlight tags such as "Free" or "New" |

### Item card pastels

Rotate these across item cards in the feed. Pick by category so the same category always gets the same color.

| Token | Hex | Suggested category |
|---|---|---|
| `card-yellow` | `#FEF4C1` | Kitchen |
| `card-blue` | `#DFF2FF` | Electronics |
| `card-purple` | `#E9E3FF` | Decor |
| `card-green` | `#CFFFE3` | Freebies / free items |
| `card-peach` | `#FBEAD0` | Furniture |
| `card-sky` | `#E3F1FB` | Clothing |
| `card-rose` | `#FDE2E2` | Other |

Dark mode is out of scope for v1. Build light only.

---

## 3. Typography

- **Font:** Inter (Google Fonts, or `next/font/google`). One font for everything.
- **Headlines are regular weight (400), not bold.** This is the biggest part of the look. Keep tight letter spacing.
- Card titles and UI labels are medium weight (500).
- Small uppercase labels with wide letter spacing mark sections inside panels, like `01 · THE PIPELINE`.

| Style | Size / line height | Weight | Tracking | Example |
|---|---|---|---|---|
| Hero | 64px / 1.05 (40px on mobile) | 400 | -0.02em | "Sell it before you leave." |
| Section title | 44px / 1.1 | 400 | -0.02em | "Four steps. No haggling." |
| Panel title | 24px / 1.25 | 400 | -0.01em | "Price drops, on its own." |
| Card title | 20px / 1.3 | 500 | normal | "IKEA desk lamp" |
| Body | 17px / 1.6 | 400 | normal | Paragraphs, in `muted-foreground` |
| UI text | 14px / 1.4 | 500 | normal | Buttons, nav links, filters |
| Caption | 12 to 13px | 400 | normal | "4 hours ago", "Old Kenyon" |
| Eyebrow | 12px | 600 | 0.08em, uppercase | `02 · FREEBIES` |

---

## 4. Shape, spacing and depth

- **Radius:** buttons, chips, badges and tags are fully round (`rounded-full`). Cards and panels are 16px (`rounded-2xl`). Inputs and inner boxes are 12px (`rounded-xl`).
- **Borders:** 1px `border` color on every card and outlined button. Use borders to separate things, not shadows.
- **Shadows:** almost none. Cards get a hover shadow only: `shadow-[0_4px_16px_rgba(0,0,0,0.06)]`.
- **Container:** max width 1200px, centered, 24px side padding (16px on mobile).
- **Section spacing:** 96 to 128px between marketing sections. 24 to 32px between blocks in the app.
- **Framed sections:** on the landing page, sections sit inside a box with thin 1px vertical lines on the left and right edges, and a small dot where they meet the horizontal divider. This gives it the "blueprint" feel. It's optional, so skip it if you're short on time.

---

## 5. Components

### Navbar (landing page)
- Height 56px, background `background`, 1px bottom border that shows once you scroll, sticky.
- Left: small black logo mark plus the wordmark "Kenyon Market" in 18px medium.
- Center: plain text links in 15px `foreground` (How it works, Freebies, FAQ).
- Right: "Log in" as an outlined pill, "Sign up" as a black pill.

### Navbar (in the app)
- White background. Logo on the left, then tabs: Browse, Freebies, Sell, My listings, Saved, Messages.
- The active tab gets a light gray pill behind it (`surface-muted`). Inactive tabs are plain text.
- Right side: bell icon with a small red dot for unread notifications, then Settings, then a small `brand-dark` pill with white text for a status like "3 active".

### Buttons
| Variant | Style |
|---|---|
| Primary | Black background, white text, `rounded-full`, `h-10 px-5`, 14px medium. Hover: `#262626`. |
| Secondary | White background, 1px `border`, black text, same shape. Hover: `surface-muted`. |
| Large CTA | Primary, but `h-14 px-8`, 18px text. |
| Small | `h-8 px-4`, 13px. Used on cards ("Pass" as secondary, "Claim" as primary). |

Under the main CTA, add a caption in `subtle-foreground`, for example "Kenyon email only. Free, always."

### Badge above the hero
A white pill with a 1px border, 14px text: "Only for @kenyon.edu". It's the same idea as their "Backed by Y Combinator" badge.

### Filter bar
- Search bar: full width, `surface` with a 1px border, `rounded-xl`, a search icon inside on the left, and the search terms shown as removable gray chips.
- Filter chips below it in one row: plain text with a small chevron (Category, Condition, Price, Dorm, Ends soon).
- An active filter becomes a `brand-dark` pill with white text and an "x".
- "Clear" link on the far right.

### Item card (the signature component)
This replaces their job card. Grid of 4 columns on desktop, 2 on tablet, 1 on mobile, 20px gap.

```
┌──────────────────────────────────┐  ← pastel background, rounded-2xl
│ Old Kenyon            ( 45% )    │  ← location + ring showing % of original price
│ 2 days left           (  off  )  │
│                                  │
│ IKEA desk lamp                   │  ← 22px regular, foreground
│ [Like new] [Lighting]            │  ← small gray pill tags
│                                  │
│ $12  → $8 on Sep 24              │  ← current price and next drop
│ ─────────────────────────────────│
│  ◻ Save         │   ▤ Details    │  ← split footer, same pastel
├──────────────────────────────────┤
│ (photo) @handle      Pass  Claim │  ← white strip: small round photo thumb,
└──────────────────────────────────┘     seller handle, two small pill buttons
```

- The top area is pastel (`card-*`). The bottom strip is white with a 1px top border.
- **The ring:** a 44px circle with a thin black progress stroke on a light track, and the number in the middle. Use it for "price drop so far" or "time left". It's their "80% match" ring, reused.
- Hover: lift 2px and show the soft shadow.
- In the Freebies tab, every card uses `card-green` and shows a "Free" tag in `tag-purple`.

### "Add your own" card
The first card in the "My listings" grid. `card-green` background, a big 36px title "List an item", a small caption "Snap a photo, we fill in the rest", and a round white "+" button with a green icon in the top right.

### Detail side panel
Clicking a card opens a panel that slides in from the right (shadcn `Sheet`), 420px wide, white, with the page behind it dimmed slightly.
- Top: title in 24px regular, seller and dorm underneath in `subtle-foreground`, and a close "x".
- Middle: photo carousel, then the price history as a small line chart (Recharts, black line, no gridlines), then the description.
- Bottom, sticky: "View seller" text link on the left, then a save icon and a black "Claim" pill on the right.

### Stepper ("How it works")
A row of 4 outlined pills joined by thin `accent-line` lines: `01 Snap`, `02 Price`, `03 Drop`, `04 Free`. The current step is filled black with white text. The step numbers sit in the pill in a smaller gray font.

### Feature panels
Two side-by-side cards under the stepper:
- Left, wide: a **black** panel (`inverse`), with an eyebrow `01 · THE PRICE CURVE`, a 28px white title, and a dark inner box (`inverse-muted`) showing a mini dashboard (for example Listed 47 / Viewed 23 / Claimed 8 / Free 4).
- Right, narrow: a **white** panel with a 1px border, an eyebrow, a title, and an inset `surface-muted` box holding small white rows (for example "Mini fridge · drops to $15 tomorrow").

### Table (My listings)
- Filter tabs above it as small pills with counts: All 13, Active 10, Claimed 2, Free 1, Expired 0. The active one is black.
- Table header in 12px uppercase `subtle-foreground`. Rows 64px tall, only a thin divider between rows.
- Status shown as a dot plus text inside a light pill: green for Sold, black for Active, purple for Free, gray for Expired.

### Loading state
Skeleton cards the same shape as the real cards: very light gray blocks (`#F2F2F2`) with a slow shimmer. No spinners.

### Floating help button
Black circle, 48px, bottom right, with a chat icon. Optional. Could open an FAQ.

### Footer
Logo and a one-line tagline on the left ("A move-out market for Kenyon students."). Then 3 or 4 link columns with 15px medium headings and `muted-foreground` links. A thin divider, then "© 2026" on the left and a contact email on the right.

---

## 6. Page map for your app

| Page | What it uses |
|---|---|
| Landing | Hero (badge, big headline, subtitle, black + outlined CTAs), a screenshot of the feed in a bordered frame, stepper, feature panels, final CTA, footer |
| Browse | App navbar, filter bar, item card grid, detail side panel |
| Freebies | Same as Browse, but all cards green with "Free" tags |
| Sell (photo to listing) | Centered white card, max 640px. A drag-and-drop zone with a dashed border and `rounded-2xl`, then a pre-filled form in the same style. Put a small purple "AI filled" tag next to fields the model wrote. |
| My listings | "List an item" card, then the status tabs and table |
| Notifications | Right-side panel list. Each row: icon, one line of text, time. Unread rows have a small dot. |

---

## 7. Tailwind setup to paste

```ts
// tailwind.config.ts (theme.extend)
colors: {
  background: "#FDFBFC",
  surface: "#FFFFFF",
  "surface-muted": "#F5F1EE",
  border: "#E8E4E1",
  foreground: "#0A0A0A",
  "muted-foreground": "#56545A",
  "subtle-foreground": "#8A8790",
  inverse: "#000000",
  "inverse-muted": "#131313",
  "brand-dark": "#1B2F26",
  success: "#117D49",
  "accent-line": "#D2574B",
  "tag-purple": "#DEAEFF",
  card: {
    yellow: "#FEF4C1",
    blue: "#DFF2FF",
    purple: "#E9E3FF",
    green: "#CFFFE3",
    peach: "#FBEAD0",
    sky: "#E3F1FB",
    rose: "#FDE2E2",
  },
},
fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
borderRadius: { xl: "12px", "2xl": "16px" },
```

For shadcn/ui, set `--radius: 0.75rem` and map `--primary` to black, `--primary-foreground` to white, `--background` to `#FDFBFC`, `--border` to `#E8E4E1`. Then change the default `Button` variant to `rounded-full`.

---

## 8. Do and don't

**Do**
- Leave lots of white space. When a section feels empty, it's usually right.
- Keep headlines short and plain, in two sentences if needed: "List it in a minute. Watch it sell itself."
- Use one pastel per card and keep the text on it black.

**Don't**
- Use bold headlines, gradients or colorful buttons.
- Put a shadow on everything.
- Use more than one accent color on a single component.
- Copy the reference site's logo, name, wording or company logos.
