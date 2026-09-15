import { PageHero } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { whyHccc, siteConfig } from "@/content/site";
import { admissionSteps } from "@/content/admissions";

export const metadata = buildMetadata({
  title: "Admissions",
  description:
    "Learn why families choose HCCC, how to apply, and where to complete online enrollment.",
  path: "/admissions",
});

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Your journey starts here."
        description="Explore programs, prepare your documents, and complete enrollment through the official HCCC online portal."
      >
        <div className="flex flex-wrap gap-3">
          <Button href={siteConfig.enrollment.url} external variant="secondary">
            Proceed to Online Enrollment
          </Button>
          <Button href="/inquire" variant="light">
            Ask Admissions
          </Button>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-wide">
          <h2 className="font-display text-3xl text-ink md:text-4xl">Why Choose HCCC</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {whyHccc.map((item) => (
              <Reveal key={item.title}>
                <article className="h-full rounded-2xl border border-border bg-surface p-6">
                  <h3 className="font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-2">
        <div className="container-wide">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Process Preview</p>
              <h2 className="font-display mt-2 text-3xl text-ink">From inquiry to enrollment</h2>
            </div>
            <Button href="/admissions/process" variant="outline">
              Full Process
            </Button>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {admissionSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <p className="font-display text-3xl text-forest-100">{step.step}</p>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/admissions/requirements">Requirements</Button>
            <Button href="/admissions/faq" variant="outline">
              FAQ
            </Button>
            <Button href={siteConfig.enrollment.url} external variant="secondary">
              Start Enrollment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
