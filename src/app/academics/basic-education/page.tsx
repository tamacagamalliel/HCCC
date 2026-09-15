import { PageHero, AdminNote } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Basic Education",
  description:
    "Basic Education at Holy Cross College of Carigara — Junior High and Senior High pathways.",
  path: "/academics/basic-education",
});

export default function BasicEducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Basic Education"
        description="Junior High School (Grades 7–10) and Senior High School (Grades 11–12 — Academic & TVL) as published on the official enrollment portal."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/academics/junior-high" variant="secondary">
            Junior High
          </Button>
          <Button href="/academics/senior-high" variant="light">
            Senior High
          </Button>
        </div>
      </PageHero>
      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <p className="prose-hccc">
            Public enrollment information currently lists Junior High and Senior High under Basic
            Education. An elementary / grade school listing was not confirmed from the same
            public sources at build time.
          </p>
          <AdminNote>
            Confirm whether elementary/grade school is offered and publish details here if
            applicable.
          </AdminNote>
        </div>
      </section>
    </>
  );
}
