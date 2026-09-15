import { PageHero } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Data Privacy",
  description:
    "Data privacy information for visitors of the Holy Cross College of Carigara website.",
  path: "/data-privacy",
});

export default function DataPrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Data Privacy"
        description="Our commitment to responsible handling of personal data shared through this website."
      />
      <section className="section-pad">
        <div className="container-page prose-hccc max-w-3xl space-y-4">
          <p>
            {siteConfig.legalName} respects the privacy of students, parents, alumni, and website
            visitors in accordance with applicable Philippine data privacy principles.
          </p>
          <p>
            Personal data submitted through the public inquiry form is used to respond to your
            request and to route your message to the appropriate office. Please avoid sending
            sensitive academic records through the inquiry form; use the official enrollment
            portal for application documents.
          </p>
          <p>
            Administrator note: publish the school’s official Data Privacy Notice / DPO contact
            details here when available.
          </p>
          <p>
            Contact: {siteConfig.contact.email} · {siteConfig.contact.phone}
          </p>
        </div>
      </section>
    </>
  );
}
