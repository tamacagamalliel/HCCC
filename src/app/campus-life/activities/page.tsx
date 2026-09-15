import { PageHero, AdminNote } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Student Activities",
  description: "Student activities at Holy Cross College of Carigara.",
  path: "/campus-life/activities",
});

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus Life"
        title="Student Activities"
        description="Opportunities beyond the classroom that nurture talent, leadership, and belonging."
      />
      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <p className="prose-hccc">
            HCCC encourages students to grow through activities that complement academic life
            and values formation. Specific annual activities and student-led initiatives will be
            featured here as the school publishes official listings and photography.
          </p>
          <AdminNote>
            Publish verified activity calendars, intramurals, cultural programs, and formation
            events with approved media.
          </AdminNote>
        </div>
      </section>
    </>
  );
}
