import { cn } from "@/lib/utils";

export function PanelPair({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">{children}</div>;
}

export function DarkPanel({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-inverse p-6 text-white sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50">
        {eyebrow}
      </p>
      <h3 className="mt-3 max-w-md text-[24px] leading-tight tracking-[-0.01em]">
        {title}
      </h3>
      <div className="mt-6 rounded-xl bg-inverse-muted p-4">{children}</div>
    </div>
  );
}

export function LightPanel({
  eyebrow,
  title,
  children,
  insetClassName,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  insetClassName?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-subtle-foreground">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-[24px] leading-tight tracking-[-0.01em]">{title}</h3>
      <div className={cn("mt-6 space-y-2 rounded-xl bg-surface-muted p-3", insetClassName)}>
        {children}
      </div>
    </div>
  );
}

export function Row({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
