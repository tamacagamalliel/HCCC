import { PageHero } from "@/components/ui/Section";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Inquire Now",
  description:
    "Send a public inquiry to Holy Cross College of Carigara about admissions, programs, and enrollment.",
  path: "/inquire",
});

export default function InquirePage() {
  return (
    <>
      <PageHero
        eyebrow="Inquire"
        title="We’re here to help you take the next step"
        description="Ask about admissions, programs, requirements, or enrollment. For applications and document uploads, use the official enrollment portal."
      />
      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl text-ink">Before you write</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>Office hours: {siteConfig.contact.officeHours}</li>
              <li>Phone: {siteConfig.contact.phone}</li>
              <li>Mobile: {siteConfig.contact.mobile}</li>
              <li>Email: {siteConfig.contact.email}</li>
            </ul>
            <a
              href={siteConfig.enrollment.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-forest-800 underline"
            >
              Prefer to enroll now? Open the enrollment portal →
            </a>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
