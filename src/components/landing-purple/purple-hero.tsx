import { PromptBar } from "./prompt-bar";
import { ProductFan } from "./product-fan";

export function PurpleHero() {
  return (
    <section id="top" className="relative -mt-24 overflow-hidden bg-[radial-gradient(120%_80%_at_50%_0%,#ece2ff_0%,#f7f2ff_45%,#ffffff_80%)] pt-40 sm:pt-44">
      <div className="mx-auto max-w-[1100px] px-4 text-center">
        <h1 className="font-display text-[40px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[64px]">
          Sell your stuff from{" "}
          <span className="font-serif text-[1.08em] font-normal italic tracking-normal">
            a single photo
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-muted">
          Kenyon Market writes your listing, drops the price for you, and gives away
          what&apos;s left before move-out. All in a minute.
        </p>
        <div className="mt-8 flex justify-center">
          <PromptBar />
        </div>
        <p className="mt-6 text-sm text-ink-muted">
          Only for <span className="font-semibold text-ink">@kenyon.edu</span> students
        </p>
      </div>
      <ProductFan />
    </section>
  );
}
