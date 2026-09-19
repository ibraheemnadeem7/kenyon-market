import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <div className="flex flex-col items-start gap-6">
      <h2 className="max-w-2xl text-[32px] leading-[1.1] tracking-[-0.02em] sm:text-[44px]">
        Moving out soon? List your first item in under a minute.
      </h2>
      <Button size="lg" asChild>
        <Link href="/login">Get started</Link>
      </Button>
    </div>
  );
}
