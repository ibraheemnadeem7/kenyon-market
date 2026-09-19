import { DarkPanel, LightPanel, PanelPair, Row } from "./panel-shell";

// Same math as docs/mvp.md section 4.2, for a picture only.
const p0 = 40;
const floor = 10;
const curves = {
  hold: (t: number) => (t < 0.75 ? p0 : p0 - ((p0 - floor) * (t - 0.75)) / 0.25),
  steady: (t: number) => p0 - (p0 - floor) * t,
  fast: (t: number) => floor + (p0 - floor) * Math.exp(-3 * t),
};

const W = 300;
const H = 120;
const toPoints = (f: (t: number) => number) =>
  Array.from({ length: 41 }, (_, i) => {
    const t = i / 40;
    const x = t * W;
    const y = 8 + (1 - (f(t) - floor + 2) / (p0 - floor + 4)) * (H - 16);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

const legend = [
  { key: "hold", label: "Hold firm", chosen: false },
  { key: "steady", label: "Steady", chosen: true },
  { key: "fast", label: "Fast", chosen: false },
] as const;

export function PricePanels() {
  return (
    <PanelPair>
      <DarkPanel eyebrow="01 · Pick a curve" title="Three ways to drop.">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-32 w-full" preserveAspectRatio="none">
          {legend.map((c) => (
            <polyline
              key={c.key}
              points={toPoints(curves[c.key])}
              fill="none"
              stroke={c.chosen ? "#ffffff" : "rgba(255,255,255,0.25)"}
              strokeWidth={c.chosen ? 2.5 : 1.5}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
        <div className="mt-2 flex justify-between text-[11px] text-white/40">
          <span>Day 1 · $40</span>
          <span>Move-out · $10</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {legend.map((c) => (
            <span
              key={c.key}
              className={
                c.chosen
                  ? "rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground"
                  : "rounded-full border border-white/15 px-3 py-1 text-xs text-white/60"
              }
            >
              {c.label}
            </span>
          ))}
        </div>
      </DarkPanel>

      <LightPanel eyebrow="02 · Your settings" title="Set it once.">
        <Row>
          <span className="text-subtle-foreground">Start price</span>
          <span className="font-medium">$40</span>
        </Row>
        <Row>
          <span className="text-subtle-foreground">Floor</span>
          <span className="font-medium">$10</span>
        </Row>
        <Row>
          <span className="text-subtle-foreground">Ends</span>
          <span className="font-medium">Sep 30</span>
        </Row>
        <Row>
          <span className="text-subtle-foreground">Curve</span>
          <span className="rounded-full bg-brand-dark px-2.5 py-0.5 text-xs text-white">
            Steady
          </span>
        </Row>
      </LightPanel>
    </PanelPair>
  );
}
