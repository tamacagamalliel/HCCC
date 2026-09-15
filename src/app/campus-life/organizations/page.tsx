import { PageHero, AdminNote } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Organizations & Clubs",
  description: "Student organizations and clubs at Holy Cross College of Carigara.",
  path: "/campus-life/organizations",
});

export default function OrganizationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus Life"
        title="Organizations & Clubs"
        description="Spaces where Holy Crossians lead, collaborate, and serve."
      />
      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <p className="prose-hccc">
            Student organizations help learners develop leadership and community. A public
            directory of recognized clubs will appear here once provided by the school — names
            will not be invented for this website.
          </p>
          <AdminNote>
            Add the official roster of student organizations, advisers, and membership guidance.
          </AdminNote>
        </div>
      </section>
    </>
  );
}
