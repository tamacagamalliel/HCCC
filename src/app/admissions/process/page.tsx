import { PageHero } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { admissionSteps } from "@/content/admissions";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Admission Process",
  description:
    "Step-by-step admission and enrollment guidance for Holy Cross College of Carigara.",
  path: "/admissions/process",
});

export default function AdmissionProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Admission Process"
        title="Six clear steps to become a Holy Crossian"
        description="This website explains the journey. Applications and document uploads happen on the official enrollment portal."
      >
        <Button href={siteConfig.enrollment.url} external variant="secondary">
          Proceed to Online Enrollment
        </Button>
      </PageHero>
      <section className="section-pad">
        <div className="container-page">
          <ol className="space-y-4">
            {admissionSteps.map((step) => (
              <li
                key={step.step}
                className="grid gap-4 rounded-2xl border border-border bg-surface p-6 md:grid-cols-[5rem_1fr]"
              >
                <span className="font-display text-4xl text-forest-700">{step.step}</span>
                <div>
                  <h2 className="font-display text-2xl text-ink">{step.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 rounded-2xl bg-forest-900 p-8 text-white">
            <h2 className="font-display text-3xl">Ready to become a Holy Crossian?</h2>
            <p className="mt-3 max-w-2xl text-white/75">
              Continue to the school’s official enrollment system to create your account and
              submit your application.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={siteConfig.enrollment.url} external variant="secondary">
                Start Enrollment
              </Button>
              <Button href="/inquire" variant="light">
                Ask Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
