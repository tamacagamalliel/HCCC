import { PageHero, AdminNote } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Senior High School",
  description:
    "Senior High School (Grades 11 & 12) Academic and TVL tracks at Holy Cross College of Carigara.",
  path: "/academics/senior-high",
});

export default function SeniorHighPage() {
  return (
    <>
      <PageHero
        eyebrow="Basic Education"
        title="Senior High School"
        description="Grades 11 & 12 — Academic and TVL tracks that help learners prepare for college, work, and lifelong learning."
      >
        <div className="flex flex-wrap gap-3">
          <Button href={siteConfig.enrollment.url} external variant="secondary">
            Proceed to Online Enrollment
          </Button>
          <Button href="/admissions" variant="light">
            Admissions Overview
          </Button>
        </div>
      </PageHero>
      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-display text-2xl text-ink">Academic Track</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Offered as part of HCCC Senior High School pathways. Specific strands will be
                listed here once confirmed by the school for public publication.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-display text-2xl text-ink">TVL Track</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Technical-Vocational-Livelihood pathways are offered at HCCC Senior High.
                Administrator: publish strand names and descriptions when verified.
              </p>
            </article>
          </div>
          <AdminNote>
            Do not invent SHS strand names. Replace placeholders with the official strand list
            from the Registrar / SHS office.
          </AdminNote>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/academics/college">Explore College</Button>
            <Button href="/inquire" variant="outline">
              Ask about SHS
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
