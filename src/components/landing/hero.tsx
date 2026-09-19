import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FeedPreview } from "./feed-preview";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pt-16 sm:px-6 sm:pt-24">
      <Badge variant="outline" className="px-3.5 py-1.5 text-sm font-normal">
        Only for <span className="font-medium">@kenyon.edu</span>
      </Badge>

      <h1 className="mt-6 max-w-4xl text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[64px]">
        List it in a minute. Watch it sell itself.
      </h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <p className="max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          Snap a photo and Kenyon Market writes the listing. The price drops on a
          schedule you pick, and anything left turns free before move-out. No
          haggling, no dumpster runs.
        </p>
        <div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/login">Get started</Link>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>
          <p className="mt-3 text-sm text-subtle-foreground">
            Kenyon email only. Free, always.
          </p>
        </div>
      </div>

      <FeedPreview />
    </section>
  );
}
