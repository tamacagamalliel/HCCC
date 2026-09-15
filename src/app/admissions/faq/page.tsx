import { PageHero } from "@/components/ui/Section";
import { FaqExplorer } from "@/components/faq/FaqExplorer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admissions FAQ",
  description:
    "Frequently asked questions about admissions, enrollment, programs, and contact information at HCCC.",
  path: "/admissions/faq",
});

export default function AdmissionsFaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers for families and future Holy Crossians"
        description="Search or filter common questions. Answers are based on publicly published HCCC information."
      />
      <section className="section-pad">
        <div className="container-page">
          <FaqExplorer />
        </div>
      </section>
    </>
  );
}
