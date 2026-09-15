import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { academicLevels, getCollegePrograms } from "@/content/programs";

export const metadata = buildMetadata({
  title: "Academics",
  description:
    "Explore Junior High, Senior High, and College programs at Holy Cross College of Carigara.",
  path: "/academics",
});

export default function AcademicsPage() {
  const college = getCollegePrograms();

  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Programs that form minds and character"
        description="From Junior High to College, HCCC offers pathways that prepare learners for higher education, careers, and lifelong service."
      >
        <Button href="/admissions" variant="secondary">
          Admission Information
        </Button>
      </PageHero>

      <section className="section-pad">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Levels of Learning"
            title="Basic Education and College"
            description="Enrollment for Junior High, Senior High, and College is supported through the school’s official online portals."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {academicLevels.map((level) => (
              <Reveal key={level.slug}>
                <Link
                  href={level.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 no-underline shadow-[var(--shadow-soft)] transition hover:border-forest-700"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-forest-700">
                    {level.status}
                  </span>
                  <h2 className="font-display mt-3 text-3xl text-ink">{level.title}</h2>
                  <p className="mt-1 text-sm text-gold-700">{level.subtitle}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {level.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-forest-800">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-2">
        <div className="container-wide">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="College"
              title="Degree programs currently offered"
              description="Program list sourced from the official HCCC online enrollment portal."
            />
            <Button href="/academics/college" variant="outline">
              College Overview
            </Button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {college.map((program) => (
              <Reveal key={program.slug}>
                <Link
                  href={`/academics/programs/${program.slug}`}
                  className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 no-underline transition hover:border-forest-700 hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700">
                    {program.shortName} · {program.levelLabel}
                  </span>
                  <h3 className="mt-3 text-base font-semibold leading-snug text-ink">
                    {program.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {program.overview}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-forest-800">Learn More →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
