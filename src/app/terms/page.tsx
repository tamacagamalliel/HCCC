import { PageHero } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Website Policy",
  description: "Terms and website use policy for Holy Cross College of Carigara.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Website Policy"
        description="Guidelines for using the official public website of HCCC."
      />
      <section className="section-pad">
        <div className="container-page prose-hccc max-w-3xl space-y-4">
          <p>
            Content on this website is provided for general public information about{" "}
            {siteConfig.legalName}. Program details, schedules, and requirements may be updated;
            always verify enrollment actions on the official portal.
          </p>
          <p>
            External links (including the enrollment portal and Facebook page) are provided for
            convenience. HCCC is not responsible for the content of third-party websites beyond
            its control.
          </p>
          <p>
            Unauthorized scraping, spam submissions, or attempts to disrupt website services are
            prohibited.
          </p>
        </div>
      </section>
    </>
  );
}
