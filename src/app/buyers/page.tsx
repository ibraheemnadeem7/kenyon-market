import { buyFaqs, buyPrompt, buySteps } from "@/components/landing-purple/buyer-content";
import { BuyerHero } from "@/components/landing-purple/buyer-hero";
import { FloatingNavbar } from "@/components/landing-purple/floating-navbar";
import { FreebiesShowcase } from "@/components/landing-purple/freebies-showcase";
import { PurpleFaq } from "@/components/landing-purple/purple-faq";
import { PurpleFooter } from "@/components/landing-purple/purple-footer";
import { SimpleSteps } from "@/components/landing-purple/simple-steps";
import { StickyPrompt } from "@/components/landing-purple/sticky-prompt";

export const metadata = {
  title: "Buy stuff and freebies · Kenyon Market",
  description: "Cheap and free stuff from Kenyon students moving out.",
};

// Buyer landing page (purple theme, docs/theme-spec.md).
export default function BuyersPage() {
  return (
    <div className="bg-white text-ink">
      <FloatingNavbar />
      <main>
        <BuyerHero />
        <SimpleSteps
          eyebrow="From scrolling to carrying it home"
          title="Buying is simple"
          steps={buySteps}
          cta="Browse deals"
          ctaHref="/login"
        />
        <FreebiesShowcase />
        <PurpleFaq faqs={buyFaqs} />
      </main>
      <PurpleFooter />
      <StickyPrompt config={buyPrompt} />
    </div>
  );
}
