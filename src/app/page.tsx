import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main className="flex flex-1 items-center justify-center py-32">
        <h1 className="text-4xl">Kenyon Market</h1>
      </main>
      <SiteFooter />
    </>
  );
}
