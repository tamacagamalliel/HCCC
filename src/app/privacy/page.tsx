import { PageHero } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for the Holy Cross College of Carigara public website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Privacy Policy"
        description="How this public website handles information you choose to share."
      />
      <section className="section-pad">
        <div className="container-page prose-hccc max-w-3xl space-y-4">
          <p>
            This website is the public-facing information site of {siteConfig.legalName}. It is
            not a student information system, LMS, or enrollment portal.
          </p>
          <p>
            When you submit the inquiry form, we collect the details you provide (such as name,
            email, mobile number, and message) so the appropriate school office can respond.
          </p>
          <p>
            We do not sell personal information. Inquiry data should be accessed only by
            authorized school personnel and retained only as needed to respond and for legitimate
            school administration purposes.
          </p>
          <p>
            For questions about this policy, contact {siteConfig.contact.email} or call{" "}
            {siteConfig.contact.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
