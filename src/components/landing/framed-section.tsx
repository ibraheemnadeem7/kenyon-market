import { cn } from "@/lib/utils";

// The "blueprint" frame: thin side rails with a small dot where they meet
// the divider above each section.
export function FramedSection({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative border-t border-border">
      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <div className="pointer-events-none absolute inset-y-0 left-4 hidden border-l border-border sm:left-6 md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-4 hidden border-r border-border sm:right-6 md:block" />
        <span className="absolute -top-[3px] left-[13px] hidden size-[5px] rounded-full bg-border sm:left-[21px] md:block" />
        <span className="absolute -top-[3px] right-[13px] hidden size-[5px] rounded-full bg-border sm:right-[21px] md:block" />
        <div className={cn("py-20 md:px-6 md:py-28", className)}>{children}</div>
      </div>
    </section>
  );
}
