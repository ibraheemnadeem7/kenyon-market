import Link from "next/link";

import { Logo } from "./logo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "#how-it-works", label: "How it works" },
      { href: "#freebies", label: "Freebies" },
      { href: "#faq", label: "FAQ" },
      { href: "/login", label: "Get started" },
    ],
  },
  {
    title: "Project",
    links: [
      { href: "#faq", label: "The research" },
      { href: "#faq", label: "What we log" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/consent", label: "Consent" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-60 text-[15px] leading-relaxed text-muted-foreground">
            A move-out market for Kenyon students. Built for IPHS 484.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-[15px] font-medium">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[15px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-2 border-t border-border px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
        <p>© 2026 Kenyon Market</p>
        <a href="mailto:nadeem2@kenyon.edu" className="hover:text-foreground">
          nadeem2@kenyon.edu
        </a>
      </div>
    </footer>
  );
}
