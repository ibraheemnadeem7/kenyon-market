import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { FramedSection } from "@/components/landing/framed-section";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works/how-it-works";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";

export const metadata = { title: "Kenyon Market (classic)" };

// The first design (black and off-white). Kept for comparison.
export default function ClassicHome() {
  return (
    <>
      <SiteNavbar />
      <main className="flex-1">
        <Hero />

        <div className="mt-24" />

        <FramedSection id="how-it-works">
          <p className="text-[15px] text-muted-foreground">How it works.</p>
          <h2 className="mt-3 max-w-3xl text-[32px] leading-[1.1] tracking-[-0.02em] sm:text-[44px]">
            Four steps. No haggling. Nothing in the dumpster.
          </h2>
          <div className="mt-12">
            <HowItWorks />
          </div>
        </FramedSection>

        <FramedSection>
          <Faq />
        </FramedSection>

        <FramedSection>
          <FinalCta />
        </FramedSection>
      </main>
      <SiteFooter />
    </>
  );
}
