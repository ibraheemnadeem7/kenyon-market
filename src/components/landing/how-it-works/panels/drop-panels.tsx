import { Bell } from "lucide-react";

import { DarkPanel, LightPanel, PanelPair, Row } from "./panel-shell";

const history = [55, 50, 45, 40, 34];
const log = [
  ["3:00 am", "Mini fridge", "$40 → $34"],
  ["3:00 am", "Desk lamp", "$12 → $10"],
  ["3:00 am", "Rug, 5x7", "$20 → $16"],
];
const drops = [
  ["Mini fridge", "drops to $28 tomorrow"],
  ["Rice cooker", "turns free Thu"],
  ["Bean bag", "drops to $15 Fri"],
];

export function DropPanels() {
  const W = 300;
  const H = 90;
  const max = 60;
  const min = 30;
  const step = W / history.length;
  const y = (v: number) => 6 + (1 - (v - min) / (max - min)) * (H - 12);
  const d = history
    .map((v, i) => `${i === 0 ? "M" : "L"}${i * step},${y(v)} H${(i + 1) * step}`)
    .join(" ");

  return (
    <PanelPair>
      <DarkPanel eyebrow="01 · Every night" title="Prices fall while you sleep.">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-20 w-full" preserveAspectRatio="none">
          <path d={d} fill="none" stroke="#ffffff" strokeWidth={2.5} vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="mt-4 space-y-1.5">
          {log.map(([time, item, change]) => (
            <div key={item} className="flex items-center gap-3 text-sm">
              <span className="w-16 shrink-0 font-mono text-xs text-white/40">{time}</span>
              <span className="flex-1 truncate">{item}</span>
              <span className="text-white/70">{change}</span>
            </div>
          ))}
        </div>
      </DarkPanel>

      <LightPanel eyebrow="02 · Coming up" title="Drops this week.">
        {drops.map(([title, when]) => (
          <Row key={title} className="flex-col items-start gap-0">
            <span className="font-medium">{title}</span>
            <span className="text-xs text-subtle-foreground">{when}</span>
          </Row>
        ))}
        <p className="flex items-center gap-2 px-1 pt-1 text-xs text-muted-foreground">
          <Bell className="size-3.5" /> Saved by 4 people. They get an alert.
        </p>
      </LightPanel>
    </PanelPair>
  );
}
