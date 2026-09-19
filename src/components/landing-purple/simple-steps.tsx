import { Camera, ChevronRight, Gift, Sparkles, TrendingDown, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

export type Step = { Icon: LucideIcon; title: string; body: string };

export const sellSteps: Step[] = [
  { Icon: Camera, title: "Snap a photo", body: "Take a picture of the thing in your room. That is the whole form." },
  { Icon: Sparkles, title: "AI writes the listing", body: "Title, category, condition and a fair price, ready for you to check." },
  { Icon: TrendingDown, title: "Price drops nightly", body: "Pick a curve once. The price steps down on its own until it sells." },
  { Icon: Gift, title: "Leftovers go free", body: "Anything unsold moves to Freebies before move-out. Nothing wasted." },
];

export function SimpleSteps({
  eyebrow = "From photo to picked up",
  title = "Kenyon Market is simple",
  steps = sellSteps,
  cta = "Start selling today",
  ctaHref = "/login",
}: {
  eyebrow?: string;
  title?: string;
  steps?: Step[];
  cta?: string;
  ctaHref?: string;
}) {
  return (
    <section id="how" className="mx-auto max-w-[1200px] scroll-mt-28 px-4 py-24 text-center sm:py-32">
      <p className="text-[15px] text-ink-muted">{eyebrow}</p>
      <h2 className="mt-3 font-display text-[34px] font-semibold tracking-[-0.03em] text-ink sm:text-[48px]">
        {title}
      </h2>

      <div className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-stretch lg:gap-0">
        {steps.map(({ Icon, title, body }, i) => (
          <Fragment key={title}>
            {i > 0 && (
              <ChevronRight className="mx-auto hidden size-5 shrink-0 self-center text-ink lg:mx-3 lg:block" />
            )}
            <div className="flex-1 rounded-[28px] bg-lilac p-7 text-left">
              <p className="text-xs text-ink-muted">{String(i + 1).padStart(2, "0")}</p>
              <Icon className="mt-6 size-8 text-plum-soft" strokeWidth={1.6} />
              <h3 className="mt-6 font-display text-[19px] font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
            </div>
          </Fragment>
        ))}
      </div>

      <Link
        href={ctaHref}
        className="mt-14 inline-flex h-12 items-center rounded-full bg-plum px-7 font-display text-[16px] font-medium text-white transition-colors hover:bg-plum-hover"
      >
        {cta}
      </Link>
    </section>
  );
}
