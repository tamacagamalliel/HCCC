import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-3",
            light ? "text-yellow" : "text-gold-700",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/90" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-950 text-white">
      <div className="absolute inset-0 hero-grid opacity-40" aria-hidden />
      <div
        className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-forest-500/20 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative section-pad pt-[calc(var(--header-height)+1.75rem)] md:pt-[calc(var(--header-height)+2.5rem)]">
        {eyebrow ? <p className="eyebrow mb-3 text-yellow sm:mb-4">{eyebrow}</p> : null}
        <h1 className="font-display max-w-4xl text-[2rem] leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function AdminNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 rounded-md border border-dashed border-gold-500/50 bg-gold-100/60 px-3 py-2 text-sm text-gold-700">
      <span className="font-semibold">Administrator note: </span>
      {children}
    </p>
  );
}
