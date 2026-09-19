import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/instrument-serif/400-italic.css";

import { FloatingNavbar } from "@/components/landing-purple/floating-navbar";
import { PurpleFaq } from "@/components/landing-purple/purple-faq";
import { PurpleFooter } from "@/components/landing-purple/purple-footer";
import { PurpleHero } from "@/components/landing-purple/purple-hero";
import { SimpleSteps } from "@/components/landing-purple/simple-steps";
import { SmartPricing } from "@/components/landing-purple/smart-pricing";
import { StickyPrompt } from "@/components/landing-purple/sticky-prompt";
import { ThreeWays } from "@/components/landing-purple/three-ways";

export const metadata = {
  title: "Kenyon Market (purple)",
  description: "A move-out marketplace for Kenyon students.",
};

// Second design, based on docs/theme-spec-purple.md. The original stays at "/".
export default function PurpleHome() {
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
