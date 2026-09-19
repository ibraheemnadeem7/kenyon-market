# Theme Spec: Kenyon Market (purple)

**Status:** the design for the whole app (decided 2026-09-19). The earlier black and off-white design is retired and lives in `theme-spec-classic.md` and at `/classic`.
**Reference:** the layout of nas.com (screen recording shared in chat on Sep 19, 12:52; too large to keep in the Theme folder), recolored to purple and white. Style only: none of its name, logo, wording or photos.
**Live pages:** `/` (sell-or-buy home), `/sellers`, `/buyers`.
**Code:** reusable pieces in `src/components/landing-purple/`, tokens at the bottom of `src/app/globals.css`.
**How to use this file:** paste it into your AI coding tool with a UI task and say "follow docs/theme-spec.md".

---

## 1. The feel

Soft, friendly and bright. White pages with a faint lavender glow at the top and bottom. Big bold geometric headlines with one italic serif phrase for warmth. A floating white pill navbar. Every main action is a purple pill. Cards are big, very rounded and tinted lilac. Things you can click come alive: they lift, and the big panels flip from light to dark purple.

**Five rules:**

1. White and lavender everywhere. Purple (`plum`) is only for actions, icons and one accent word.
2. Headlines are bold Poppins with **one** italic serif phrase ("Sell your stuff from *a single photo*"), or a dark half plus a faded gray half ("Prices drop **without you lifting a finger.**").
3. Very round shapes: pills for buttons, inputs and tags; 24 to 28px corners for cards; 36 to 40px for big panels.
4. Soft, purple-tinted shadows. Never hard gray shadows.
5. Light at rest, dark on interaction: big clickable panels are lilac until hovered, focused or tapped, then turn deep purple with white text.

---

## 2. Colors

| Token | Hex | Use |
|---|---|---|
| `plum` | `#6D28D9` | Primary buttons, active states, "Market" in the logo |
| `plum-hover` | `#5B21B6` | Button hover |
| `plum-soft` | `#8B5CF6` | Icons, sparkle icons, small labels |
| `lilac` | `#F4EEFF` | Card and panel backgrounds |
| `lilac-strong` | `#E7DCFF` | Thin rings around lilac panels, dashed borders |
| `mist` | `#FAF8FF` | Rows inside white cards |
| `ink` | `#16121F` | Headlines, main text |
| `ink-muted` | `#6E6780` | Body text |
| `ink-faint` | `#A29BB3` | Gray half of split headlines, placeholders, struck-out old prices |
| `tag-purple` | `#DEAEFF` | "Free" tags |
| Gray pill | `#EFEDF3` | Secondary button (Login) |
| Icon tile tints | `#EBE3FF`, `#EFE7FF`, `#F3ECFF`, `#F6F0FF` | Photo/icon area of item cards; rotate them so a grid isn't flat |

**Gradients:**

| Name | Value | Where |
|---|---|---|
| Hero glow | `radial-gradient(120% 80% at 50% 0%, #ECE2FF 0%, #F7F2FF 45%, #FFFFFF 80%)` | Top of every landing page |
| Deep purple | `linear-gradient(160deg, #7C3AED 0%, #6D28D9 45%, #4C1D95 100%)` | Active/hovered door panels |
| Showcase | `linear-gradient(135deg, #EFE6FF, #F8F4FF, #ECE3FF)` | Big panels that frame a mock screen |
| Footer | white fading to `#B99AF5` | Behind the white footer card |

**Shadows:**

| Name | Value |
|---|---|
| Navbar | `0 8px 30px rgba(40,20,80,0.08)` |
| Card | `0 20px 40px rgba(40,20,80,0.12)` |
| Mock window | `0 20px 50px rgba(40,20,80,0.12)` |
| Hovered door | `0 30px 60px rgba(76,29,149,0.30)` |

---

## 3. Typography

- **Headlines and UI:** Poppins 400, 500, 600 (`font-display`), self-hosted with `@fontsource/poppins`.
- **Accent phrase:** Instrument Serif italic (`font-serif`), self-hosted with `@fontsource/instrument-serif`. At most one phrase per headline, set 1.08 to 1.1 times larger than the words around it.
- **Body:** Inter.

| Style | Size | Weight | Tracking |
|---|---|---|---|
| Hero | 64px (40px on phones) | Poppins 600 | -0.03em |
| Section title | 48px (34px on phones) | Poppins 600 | -0.03em |
| Panel title | 44px (34px on phones) | Poppins 600 | -0.03em |
| Card title | 19px | Poppins 600 | normal |
| Eyebrow | 15px gray plain text, or 18px purple with an icon (✦ Smart pricing) | 400 | normal |
| Body | 16 to 17px | Inter 400, `ink-muted` | normal |
| Small print | 12 to 13px | Inter 400 | normal |

---

## 4. Interaction

- **Door panels (home page):** lilac with a thin `lilac-strong` ring at rest. On hover, keyboard focus or click they lift 4px, the deep purple gradient fades in over 300ms, text turns white (body at 78%), and the purple button turns white with purple text. On click they stay dark about 280ms, then navigate. On touch screens only the tap turns them dark. Cmd/ctrl-click still opens a new tab.
- **Cards and buttons:** lift 2 to 4px on hover and gain the card shadow. Little cards inside a panel tilt a few degrees more on hover.
- **Prompt bar:** placeholder text types itself out ("I want to sell my mini fridge", "I'm looking for a desk lamp") with a blinking caret.
- **Sticky prompt:** a small prompt bar floats at the bottom of landing pages after the hero scrolls away and hides near the footer.
- **Reduced motion:** no typing, no fades, instant navigation.

---

## 5. Components

### Built (landing pages)

| Component | Description | File |
|---|---|---|
| Logo | Purple rounded square with a white falling staircase, then "Kenyon" in ink and "Market" in plum | `purple-logo.tsx` |
| Floating navbar | White pill, max 800px, 16px from the top, sticky. Logo, Sell / Buy / Freebies, gray "Login" pill, purple "Get started" pill | `floating-navbar.tsx` |
| Door panel | The light-to-dark clickable panel (section 4) | `door-panel.tsx`, used by `home-split.tsx` |
| Prompt bar | White pill: gray icon circle, typing text, purple CTA pill. Takes a config (prefix, ideas, button text, link) | `prompt-bar.tsx` |
| Sticky prompt | Compact prompt bar with a round arrow button, fixed at the bottom | `sticky-prompt.tsx` |
| Product fan | Listing cards tilted in 3D around a phone | `product-fan.tsx` |
| Deal cards | Grid of listing cards with a % off ring in the corner and a struck-out old price | `deal-cards.tsx` |
| Step cards | 4 lilac cards (number, purple icon, title, text) with chevrons between. Takes steps as a setting | `simple-steps.tsx` |
| Showcase panel | 40px-corner gradient panel holding a white mock window | `smart-pricing.tsx`, `freebies-showcase.tsx` |
| Three ways | Three columns of "verb what you **word**" over lilac cards | `three-ways.tsx` |
| FAQ | Lilac rounded rows that open with a purple "+" | `purple-faq.tsx` |
| Footer | White card with 40px top corners on the purple gradient | `purple-footer.tsx` |

### To build (app pages, Phase 2 onward)

Use these rules when the Build Plan reaches each step:

| Component | How it should look |
|---|---|
| App navbar | Same floating pill as the landing navbar. Tabs: Browse, Freebies, Sell, My listings, Saved, Messages. The active tab gets a lilac pill behind it. Right side: bell with a small plum dot, then a round avatar |
| Login card | Centered white card, 28px corners, card shadow, logo, "Sign in with your *Kenyon account*", one full-width purple "Continue with Google" pill |
| Item card | White card, 24px corners, card shadow. Top: icon/photo area in a lilac tint, % off ring in the top right. Bottom: title (Poppins 500), dorm and time left (gray), price in Poppins 600 with the old price struck through in `ink-faint`, and small "Pass" (gray pill) and "Claim" (purple pill) buttons. Free items: price reads "Free" in plum plus a `tag-purple` "Free" tag. Categories are told apart by a small icon, not by color |
| Price ring | 44px ring, plum stroke on a faint plum track, "-45%" or "Free" in the middle in plum |
| Filter bar | Prompt-bar style search pill across the top. Filter chips below as white pills with a thin ring; an active chip is a plum pill with white text and an "x" |
| Detail side panel | White sheet from the right, 28px left corners, photo carousel with 20px corners, price chart as a plum step line with a soft plum fill, sticky bottom bar with a purple "Claim" pill |
| Sell flow | Centered white card on the hero glow. Photo drop zone: lilac, dashed `lilac-strong` border, 28px corners, camera icon. AI-filled fields show a small plum sparkle and a `tag-purple` "AI filled" chip |
| Curve picker | 3 lilac cards with a tiny curve drawing; the selected one flips to deep purple with white text (same rule as the door panels) |
| Tables and tabs | Tabs as pills; the active one is plum. Table rows sit in `mist` with 12px corners and no hard borders. Status pills: Active (lilac, plum text), Sold (plum, white), Free (`tag-purple`), Expired (gray) |
| Notifications | White rows with a plum dot for unread |
| Empty states | Big lilac circle with a plum icon, one line of text, one purple pill button |
| Loading | Skeleton blocks in `#F1EDF8` with a slow shimmer |
| Toasts | White pill, card shadow, plum icon |

---

## 6. Layout

- Page width: max 1200px, 16px side padding on phones, 24px on larger screens.
- Section spacing: 96 to 128px on landing pages, 24 to 32px inside the app.
- Heroes pull up under the floating navbar (`-mt-24`, then 144 to 176px top padding) so the glow runs behind it.
- Everything stacks to one column below 1024px. Door panels stack on phones.

---

## 7. Tailwind tokens (already in `globals.css`)

```css
@theme {
  --font-display: "Poppins", system-ui, sans-serif;
  --font-serif: "Instrument Serif", Georgia, serif;
  --color-plum: #6d28d9;
  --color-plum-hover: #5b21b6;
  --color-plum-soft: #8b5cf6;
  --color-lilac: #f4eeff;
  --color-lilac-strong: #e7dcff;
  --color-mist: #faf8ff;
  --color-ink: #16121f;
  --color-ink-muted: #6e6780;
  --color-ink-faint: #a29bb3;
}
```

The door hover rules are the `.door` block at the bottom of `globals.css`.

---

## 8. Do and don't

**Do**

- Keep lots of white, and one italic serif phrase per headline.
- Keep purple for things you can click.
- Use light at rest and dark on interaction for big choices.

**Don't**

- Use real-looking photos of people or invented testimonials. There are no real users yet.
- Stack purple on purple, or use more than one gradient in a section.
- Use hard gray shadows, or black buttons (black was the old theme).
