import { PageHero } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Accessibility",
  description:
    "Accessibility commitment for the Holy Cross College of Carigara public website.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Accessibility"
        description="We aim to make this website usable for visitors with diverse abilities and devices."
      />
      <section className="section-pad">
        <div className="container-page prose-hccc max-w-3xl space-y-4">
          <p>
            This website is built with semantic HTML, keyboard-accessible navigation, visible
            focus states, and support for reduced-motion preferences.
          </p>
          <p>
            If you encounter an accessibility barrier, please contact the school through the
            inquiry form or published contact channels so we can improve the experience.
          </p>
        </div>
      </section>
    </>
  );
}
