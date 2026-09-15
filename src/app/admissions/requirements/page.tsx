import { PageHero, AdminNote } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { requirementGroups } from "@/content/admissions";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Admission Requirements",
  description:
    "Document requirements for applying to Holy Cross College of Carigara through the official enrollment portal.",
  path: "/admissions/requirements",
});

export default function RequirementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Requirements"
        title="Documents to prepare before you apply"
        description="Based on publicly published HCCC enrollment information. Always confirm the latest checklist in the official portal."
      >
        <Button href={siteConfig.enrollment.url} external variant="secondary">
          Open Enrollment Portal
        </Button>
      </PageHero>
      <section className="section-pad">
        <div className="container-wide">
          <div className="grid gap-4 lg:grid-cols-2">
            {requirementGroups.map((group) => (
              <Reveal key={group.id}>
                <article className="h-full rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]">
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-700">
                    {group.category.replace("-", " ")}
                  </p>
                  <h2 className="font-display mt-2 text-2xl text-ink">{group.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{group.description}</p>
                  <ul className="mt-5 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg bg-forest-50 px-3 py-2 text-sm text-ink-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {group.note ? (
                    <p className="mt-4 text-xs leading-relaxed text-muted">{group.note}</p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
          <AdminNote>
            Publish separate verified checklists for elementary (if offered), transferees, and
            returning students when available from Admissions.
          </AdminNote>
        </div>
      </section>
    </>
  );
}
