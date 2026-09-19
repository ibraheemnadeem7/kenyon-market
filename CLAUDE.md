@AGENTS.md

# Kenyon Market: rules for AI coding tools

Read `docs/mvp.md` (scope) and `docs/theme-spec.md` (look) before any UI or database work. The step-by-step build plan lives outside this repo in `IPHS 484/The Plan/Build Plan.md`.

## Rules

1. Prices are never calculated in the browser for anything that gets saved. The database is the only source of truth for `current_price`.
2. Every database change is a new file in `supabase/migrations/` (`0007_short_name.sql`). Never edit an old migration.
3. Follow `docs/theme-spec.md` for all UI: white and lavender, purple pill buttons, Poppins headlines with one italic serif phrase, lilac rounded cards. Reuse components from `src/components/landing-purple/`. (`docs/theme-spec-classic.md` is the retired black theme, kept at /classic.)
4. One component per file, kebab-case file names (`item-card.tsx`).
5. Secrets live in `.env.local` only. Nothing without the `NEXT_PUBLIC_` prefix may be imported into client components.
6. Keep changes small: one build-plan step per commit, message format `step N: what changed`.
7. Record any decision that changes scope or design in `docs/decisions.md`.
