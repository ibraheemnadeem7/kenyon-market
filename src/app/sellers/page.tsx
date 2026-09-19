import { FloatingNavbar } from "@/components/landing-purple/floating-navbar";
import { PurpleFaq } from "@/components/landing-purple/purple-faq";
import { PurpleFooter } from "@/components/landing-purple/purple-footer";
import { PurpleHero } from "@/components/landing-purple/purple-hero";
import { SimpleSteps } from "@/components/landing-purple/simple-steps";
import { SmartPricing } from "@/components/landing-purple/smart-pricing";
import { StickyPrompt } from "@/components/landing-purple/sticky-prompt";
import { ThreeWays } from "@/components/landing-purple/three-ways";

export const metadata = {
  title: "Sell your stuff · Kenyon Market",
  description: "A move-out marketplace for Kenyon students.",
};

// Seller landing page (purple theme, docs/theme-spec-purple.md).
export default function SellersPage() {
  return (
    <div className="bg-white text-ink">
      <FloatingNavbar />
      <main>
        <PurpleHero />
        <SimpleSteps />
        <SmartPricing />
        <ThreeWays />
        <PurpleFaq />
      </main>
      <PurpleFooter />
      <StickyPrompt />
    </div>
  );
}
