import { PageHero, AdminNote } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Junior High School",
  description:
    "Junior High School (Grades 7–10) at Holy Cross College of Carigara.",
  path: "/academics/junior-high",
});

export default function JuniorHighPage() {
  return (
    <>
      <PageHero
        eyebrow="Basic Education"
        title="Junior High School"
        description="Grades 7 through 10 — a formative stage for academic foundations, values formation, and readiness for Senior High School."
      >
        <div className="flex flex-wrap gap-3">
          <Button href={siteConfig.enrollment.url} external variant="secondary">
            Proceed to Online Enrollment
          </Button>
          <Button href="/admissions/requirements" variant="light">
            View Requirements
          </Button>
        </div>
      </PageHero>
      <section className="section-pad">
        <div className="container-page max-w-3xl prose-hccc">
          <p>
            Junior High School at HCCC is listed as open for enrollment through the official
            SchoolAide portal. Families can create an account, submit requirements, and track
            application status online.
          </p>
          <p>
            This public website provides orientation and guidance. Academic records and
            enrollment transactions are handled in the school’s existing enrollment systems.
          </p>
          <AdminNote>
            Add curriculum highlights, subject offerings, and JHS-specific activities when
            officially approved for publication.
          </AdminNote>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/academics/senior-high">Explore Senior High</Button>
            <Button href="/inquire" variant="outline">
              Ask about JHS
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
