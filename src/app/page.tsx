import { FloatingNavbar } from "@/components/landing-purple/floating-navbar";
import { HomeSplit } from "@/components/landing-purple/home-split";
import { PurpleFooter } from "@/components/landing-purple/purple-footer";

// Main page: choose to sell or to buy. Purple theme (docs/theme-spec-purple.md).
export default function Home() {
  return (
    <div className="bg-white text-ink">
      <FloatingNavbar />
      <main>
        <HomeSplit />
      </main>
      <PurpleFooter />
    </div>
  );
}
