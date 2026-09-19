# Theme Spec (Purple): Kenyon Market

**Reference:** the layout of nas.com (screen recording `Theme/Screen Recording 2026-09-19 at 12.52.33.mov`), recolored to purple and white. Style only: none of its name, logo, wording or photos.
**Live version:** `/` (sell-or-buy chooser), `/sellers` and `/buyers`. The original black and off-white design is kept at `/classic`.
**Code:** `src/components/landing-purple/`, tokens at the bottom of `src/app/globals.css`.

---

## 1. The feel

Soft, friendly and bright. White pages washed with a faint lavender glow at the top and the bottom. Big bold geometric headlines with one italic serif phrase for warmth. A floating white pill navbar. Every main action is a purple pill. Cards are big, very rounded and tinted lilac. It should feel like a consumer app, not a tool.

**Rules that define it:**

1. White and lavender everywhere; purple (`plum`) only for actions, icons and one accent word.
2. Headlines mix a bold sans with an italic serif phrase ("Sell your stuff from *a single photo*"), or a dark half with a faded gray half ("Prices drop **without you lifting a finger.**").
3. Very round shapes: pills for buttons and inputs, 28px corners for cards, 40px for big showcase panels.
4. Shadows are soft and purple-tinted, never gray and hard.

---

## 2. Colors

| Token | Hex | Use |
|---|---|---|
| `plum` | `#6D28D9` | Primary buttons, links on hover, the "Market" in the logo |
| `plum-hover` | `#5B21B6` | Button hover |
| `plum-soft` | `#8B5CF6` | Icons, small eyebrow labels |
| `lilac` | `#F4EEFF` | Card backgrounds (steps, FAQ, three-ways) |
| `lilac-strong` | `#E7DCFF` | Dashed borders, rings on tinted things |
| `mist` | `#FAF8FF` | Rows inside white cards |
| `ink` | `#16121F` | Headlines and main text |
| `ink-muted` | `#6E6780` | Body text |
| `ink-faint` | `#A29BB3` | The gray half of split headlines, placeholder text |
| Gray pill | `#EFEDF3` | Secondary button (Login) |

**Background washes:**

- Hero: `radial-gradient(120% 80% at 50% 0%, #ECE2FF 0%, #F7F2FF 45%, #FFFFFF 80%)`
- Showcase panel: `linear-gradient(135deg, #EFE6FF, #F8F4FF, #ECE3FF)`
- Footer: white fading down to `#B99AF5`, with a white rounded card sitting on it

**Shadows:** `0 8px 30px rgba(40,20,80,0.08)` for the navbar, `0 20px 50px rgba(40,20,80,0.12)` for mock windows.

---

## 3. Typography

- **Display and UI:** Poppins (400, 500, 600), self-hosted with `@fontsource/poppins`.
- **Accent:** Instrument Serif italic, self-hosted with `@fontsource/instrument-serif`. One phrase per headline at most.
- **Body:** Inter, same as the original theme.

| Style | Size | Weight | Tracking |
|---|---|---|---|
| Hero | 64px (40px on phones) | Poppins 600, serif phrase 400 italic at 1.08em | -0.03em |
| Section title | 48px (34px on phones) | Poppins 600 | -0.03em |
| Card title | 19px | Poppins 600 | normal |
| Eyebrow | 15px plain gray, or 18px purple with a sparkle icon | 400 | normal |
| Body | 16 to 17px | Inter 400, `ink-muted` | normal |

---

## 4. Components

| Component | Description | File |
|---|---|---|
| Floating navbar | White pill, 800px max, 16px from the top, sticky. Logo, 2 links, gray "Login" pill, purple "Get started" pill. | `floating-navbar.tsx` |
| Prompt bar | White pill input with a camera circle on the left and a purple "Start now →" pill on the right. The text types out ideas ("I want to sell my mini fridge"). Links to sign up. | `prompt-bar.tsx` |
| Sticky prompt | A smaller prompt bar with a round purple arrow button that floats at the bottom of the screen after the hero scrolls away. | `sticky-prompt.tsx` |
| Product fan | Listing cards tilted in 3D on both sides of a phone showing the AI-filled listing. | `product-fan.tsx` |
| Step cards | 4 lilac cards, 28px corners: number, purple icon, bold title, gray text, with chevrons between them. | `simple-steps.tsx` |
| Showcase panel | 40px-corner lavender gradient panel holding a white mock browser window. | `smart-pricing.tsx` |
| Three ways | 3 columns: "sell what you **outgrew**", "give away what you **won't pack**", "grab what you **need**", each over a lilac card. | `three-ways.tsx` |
| FAQ | Lilac rounded rows that open with a purple "+". | `purple-faq.tsx` |
| Footer | White card with 40px top corners on a purple gradient. | `purple-footer.tsx` |

---

## 5. Pages

**`/` Home:** floating navbar, "What are you here to *do today?*", two big panels side by side (left: lilac "Sell your stuff from *a single photo*" → `/sellers`; right: deep purple gradient "Buy stuff and grab *free stuff*" → `/buyers`), footer. On phones the panels stack.

**`/buyers`:** hero "Furnish your room for *almost nothing*" with a search-style prompt bar ("I'm looking for...") and a grid of deal cards with % off rings; "Buying is simple" 4 steps; "Freebies" showcase; buyer FAQ; footer; sticky prompt.

**`/sellers`** (order below):

1. Floating navbar
2. Hero: headline, subtitle, prompt bar, "Only for @kenyon.edu students", product fan
3. "Kenyon Market is simple": 4 step cards and a "Start selling today" button
4. "✦ Smart pricing": split headline, body text, showcase panel with the price chart
5. Three ways
6. Questions
7. Footer, with the sticky prompt floating above the page

---

## 6. Do and don't

**Do:** keep lots of white, use one italic serif phrase per headline, and keep purple for things you can click.
**Don't:** use real photos or testimonials of real-looking people (we don't have real users yet), stack purple on purple, or use hard gray shadows.
