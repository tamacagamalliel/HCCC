import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { getCollegePrograms, getProgramBySlug, programs } from "@/content/programs";
import { siteConfig } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return buildMetadata({
    title: program.name,
    description: program.overview,
    path: `/academics/programs/${program.slug}`,
  });
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const related = getCollegePrograms().filter((p) =>
    program.relatedSlugs.includes(p.slug),
  );

  return (
    <>
      <PageHero
        eyebrow={`${program.levelLabel} · ${program.shortName}`}
        title={program.name}
        description={program.overview}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/inquire" variant="secondary">
            Inquire about this program
          </Button>
          <Button href={siteConfig.enrollment.url} external variant="light">
            Proceed to Online Enrollment
          </Button>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-3xl text-ink">Program Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{program.overview}</p>
            </div>
            <div>
              <h2 className="font-display text-3xl text-ink">What Students Learn</h2>
              <ul className="mt-4 space-y-3">
                {program.whatYouLearn.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl text-ink">Career Direction</h2>
              <ul className="mt-4 space-y-3">
                {program.careerDirection.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-soft">
                    <span className="text-gold-600">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl text-ink">Program Highlights</h2>
              <ul className="mt-4 space-y-3">
                {program.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl bg-forest-50 px-4 py-3 text-sm text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]">
              <h2 className="font-display text-xl text-ink">Admission Information</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Prepare your documents and apply through the official enrollment portal. Typical
                requirements include Report Card (Form 138), Good Moral Certificate, and PSA
                Birth Certificate.
              </p>
              <div className="mt-5 grid gap-2">
                <Button href="/admissions/process">Admission Process</Button>
                <Button href="/admissions/requirements" variant="outline">
                  Requirements
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-display text-xl text-ink">Related Programs</h2>
              <ul className="mt-4 space-y-2">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/academics/programs/${item.slug}`}
                      className="text-sm font-medium text-forest-800 no-underline hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
