import { DarkPanel, LightPanel, PanelPair } from "./panel-shell";

const stats = [
  { label: "Listed", value: 47 },
  { label: "Sold", value: 31 },
  { label: "Free", value: 12 },
  { label: "Dumpster", value: 0 },
];

const freebies = [
  ["Rice cooker", "Caples"],
  ["Shower caddy", "Mather"],
];

export function FreePanels() {
  return (
    <PanelPair>
      <DarkPanel eyebrow="01 · Before move-out" title="Whatever's left goes free.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-white/10 px-3 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/40">
                {s.label}
              </p>
              <p
                className={
                  s.label === "Dumpster" ? "mt-1 text-3xl text-card-green" : "mt-1 text-3xl"
                }
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-white/50">
          Unsold items moved to Freebies at 3:00 am on Sep 30.
        </p>
      </DarkPanel>

      <LightPanel eyebrow="02 · Freebies" title="Someone on campus gets it.">
        {freebies.map(([title, dorm]) => (
          <div
            key={title}
            className="flex items-center justify-between rounded-lg bg-card-green px-4 py-2.5 text-sm"
          >
            <div>
              <p className="font-medium">{title}</p>
              <p className="text-xs text-muted-foreground">
                {dorm} · <span className="rounded-full bg-tag-purple px-1.5">Free</span>
              </p>
            </div>
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Claim
            </span>
          </div>
        ))}
        <p className="px-1 pt-1 text-xs text-subtle-foreground">
          Sellers can undo for 24 hours.
        </p>
      </LightPanel>
    </PanelPair>
  );
}
