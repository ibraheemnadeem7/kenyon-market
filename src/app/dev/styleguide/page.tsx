import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata = { title: "Style guide · Kenyon Market" };

const baseColors = [
  ["background", "bg-background"],
  ["surface", "bg-surface"],
  ["surface-muted", "bg-surface-muted"],
  ["border", "bg-border"],
  ["foreground", "bg-foreground"],
  ["muted-foreground", "bg-muted-foreground"],
  ["subtle-foreground", "bg-subtle-foreground"],
  ["inverse-muted", "bg-inverse-muted"],
  ["brand-dark", "bg-brand-dark"],
  ["success", "bg-success"],
  ["accent-line", "bg-accent-line"],
  ["tag-purple", "bg-tag-purple"],
] as const;

const pastels = [
  ["card-yellow", "bg-card-yellow", "Kitchen"],
  ["card-blue", "bg-card-blue", "Electronics"],
  ["card-purple", "bg-card-purple", "Decor"],
  ["card-green", "bg-card-green", "Freebies"],
  ["card-peach", "bg-card-peach", "Furniture"],
  ["card-sky", "bg-card-sky", "Clothing"],
  ["card-rose", "bg-card-rose", "Other"],
] as const;

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-12">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.08em] text-subtle-foreground">
        {title}
      </p>
      {children}
    </section>
  );
}

export default function StyleguidePage() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6">
      <h1 className="text-[44px] leading-[1.1] tracking-[-0.02em]">
        Style guide
      </h1>
      <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
        Every token and component from docs/theme-spec.md in one place. If
        something here looks off, fix the token, not the page.
      </p>

      <Section title="01 · Base colors">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {baseColors.map(([name, cls]) => (
            <div key={name}>
              <div className={`h-16 rounded-xl border border-border ${cls}`} />
              <p className="mt-2 text-[13px] text-muted-foreground">{name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="02 · Item card pastels">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {pastels.map(([name, cls, cat]) => (
            <div key={name} className={`rounded-2xl p-4 ${cls}`}>
              <p className="text-sm font-medium">{cat}</p>
              <p className="mt-6 text-xs text-muted-foreground">{name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="03 · Typography">
        <div className="space-y-6">
          <p className="text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[64px]">
            Hero: Sell it before you leave.
          </p>
          <p className="text-[44px] leading-[1.1] tracking-[-0.02em]">
            Section: Four steps. No haggling.
          </p>
          <p className="text-2xl leading-tight tracking-[-0.01em]">
            Panel: Price drops, on its own.
          </p>
          <p className="text-xl font-medium">Card title: IKEA desk lamp</p>
          <p className="max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            Body: Snap a photo and we fill in the listing. The price drops on a
            schedule you pick, then the item turns free before move-out.
          </p>
          <p className="text-sm font-medium">UI text: Browse · Sell · Saved</p>
          <p className="text-[13px] text-subtle-foreground">
            Caption: Old Kenyon · 4 hours ago
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-subtle-foreground">
            Eyebrow: 02 · Freebies
          </p>
        </div>
      </Section>

      <Section title="04 · Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button size="sm" variant="secondary">
            Pass
          </Button>
          <Button size="sm">Claim</Button>
          <Button size="lg">Get started</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section title="05 · Badges and tags">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline">Only for @kenyon.edu</Badge>
          <Badge variant="muted">Like new</Badge>
          <Badge variant="purple">Free</Badge>
          <Badge variant="dark">3 active</Badge>
          <Badge variant="success">● Sold</Badge>
          <Badge>Active</Badge>
        </div>
      </Section>

      <Section title="06 · Inputs">
        <div className="grid max-w-md gap-2">
          <Label htmlFor="sg-title">Title</Label>
          <Input id="sg-title" placeholder="IKEA desk lamp" />
        </div>
      </Section>

      <Section title="07 · Loading">
        <div className="grid max-w-md gap-3">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-24" />
        </div>
      </Section>
    </main>
  );
}
