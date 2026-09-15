import Link from "next/link";
import { PageHero } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { getCollegePrograms } from "@/content/programs";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "College",
  description:
    "College degree programs at Holy Cross College of Carigara including Education, Business, Physical Education, and Computer Science.",
  path: "/academics/college",
});

export default function CollegePage() {
  const programs = getCollegePrograms();

  return (
    <>
      <PageHero
        eyebrow="College"
        title="Undergraduate programs for future professionals"
        description="Education, business, physical education, and computing programs formed within a Catholic diocesan community."
      >
        <Button href={siteConfig.enrollment.url} external variant="secondary">
          College Enrollment Portal
        </Button>
        <Button href={siteConfig.social.facebookCollege} external variant="light">
          College Department Facebook
        </Button>
      </PageHero>
      <section className="section-pad">
        <div className="container-wide grid gap-4 md:grid-cols-2">
          {programs.map((program) => (
            <Reveal key={program.slug}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gold-700">
                  {program.shortName}
                </p>
                <h2 className="font-display mt-2 text-2xl text-ink">{program.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {program.overview}
                </p>
                <Link
                  href={`/academics/programs/${program.slug}`}
                  className="mt-5 text-sm font-semibold text-forest-800 no-underline hover:underline"
                >
                  View program details →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
