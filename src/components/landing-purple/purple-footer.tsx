import Link from "next/link";

import { PurpleLogo } from "./purple-logo";

const cols = [
  { title: "Product", links: [["How it works", "#how"], ["Smart pricing", "#pricing"], ["Get started", "/login"]] },
  { title: "Project", links: [["IPHS 484", "#"], ["What we log", "#"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Consent", "/consent"]] },
];

export function PurpleFooter() {
  return (
    <footer className="bg-[linear-gradient(180deg,#ffffff_0%,#e9ddff_40%,#b99af5_100%)] px-4 pt-32">
      <div className="mx-auto max-w-[1200px] rounded-t-[40px] bg-white px-8 pb-10 pt-12 sm:px-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <PurpleLogo />
            <p className="mt-3 text-[15px] text-ink-muted">Move out lighter.</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-plum-soft">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-[15px] text-ink hover:text-plum">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-sm text-ink-muted">© 2026 Kenyon Market</p>
      </div>
    </footer>
  );
}
