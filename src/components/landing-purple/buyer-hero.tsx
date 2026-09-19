import { buyPrompt } from "./buyer-content";
import { DealCards } from "./deal-cards";
import { PromptBar } from "./prompt-bar";

export function BuyerHero() {
  return (
    <section className="relative -mt-24 overflow-hidden bg-[radial-gradient(120%_80%_at_50%_0%,#ece2ff_0%,#f7f2ff_45%,#ffffff_80%)] pt-40 sm:pt-44">
      <div className="mx-auto max-w-[1100px] px-4 text-center">
        <h1 className="font-display text-[40px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[64px]">
          Furnish your room for{" "}
          <span className="font-serif text-[1.08em] font-normal italic tracking-normal">almost nothing</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-muted">
          Everything here is from Kenyon students moving out. Prices drop every night, and
          whatever doesn&apos;t sell turns free.
        </p>
        <div className="mt-8 flex justify-center">
          <PromptBar config={buyPrompt} />
        </div>
        <p className="mt-6 text-sm text-ink-muted">
          New drops every night at <span className="font-semibold text-ink">3 am</span>
        </p>
      </div>
      <DealCards />
    </section>
  );
}
