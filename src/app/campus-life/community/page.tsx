import { PageHero } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Community & Outreach",
  description:
    "Community engagement and service at Holy Cross College of Carigara in Carigara, Leyte.",
  path: "/campus-life/community",
});

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus Life"
        title="Community & Outreach"
        description="HCCC’s mission calls Holy Crossians to become compassionate stewards who serve Carigara and beyond."
      />
      <section className="section-pad">
        <div className="container-page max-w-3xl prose-hccc">
          <p>
            As a diocesan educational community, Holy Cross College of Carigara is connected to
            the life of Carigara, Leyte. Formation for service is part of the school’s identity —
            preparing learners not only to succeed, but to contribute.
          </p>
          <p>
            Outreach initiatives, parish partnerships, and community programs can be featured
            here as the school shares verified updates and photography.
          </p>
        </div>
      </section>
    </>
  );
}
