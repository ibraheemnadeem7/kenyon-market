import { ArrowRight, Lamp } from "lucide-react";

import { DarkPanel, LightPanel, PanelPair, Row } from "./panel-shell";

const fields = [
  ["Title", "IKEA desk lamp"],
  ["Category", "Decor"],
  ["Condition", "Like new"],
  ["Price", "$15"],
];

export function SnapPanels() {
  return (
    <PanelPair>
      <DarkPanel eyebrow="01 · Photo to listing" title="Snap it. We write it.">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex size-24 shrink-0 items-center justify-center rounded-xl bg-card-yellow text-foreground">
            <Lamp className="size-9" strokeWidth={1.5} />
          </div>
          <ArrowRight className="hidden size-5 shrink-0 text-white/40 sm:block" />
          <div className="grid flex-1 gap-2">
            {fields.map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-3 rounded-lg border border-white/10 px-3 py-2"
              >
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/40">
                    {label}
                  </p>
                  <p className="truncate text-sm">{value}</p>
                </div>
                <span className="shrink-0 rounded-full bg-tag-purple px-2 py-0.5 text-[11px] font-medium text-foreground">
                  AI filled
                </span>
              </div>
            ))}
          </div>
        </div>
      </DarkPanel>

      <LightPanel eyebrow="02 · You confirm" title="Nothing goes live without you.">
        <Row>
          <span className="text-subtle-foreground">Title</span>
          <span className="font-medium">IKEA desk lamp</span>
        </Row>
        <Row>
          <span className="text-subtle-foreground">Price</span>
          <span>
            <span className="mr-2 text-subtle-foreground line-through">$15</span>
            <span className="font-medium">$12</span>
          </span>
        </Row>
        <p className="px-1 pt-1 text-xs text-subtle-foreground">You changed the price.</p>
        <div className="flex h-10 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
          Publish
        </div>
      </LightPanel>
    </PanelPair>
  );
}
