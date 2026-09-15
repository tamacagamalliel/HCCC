import { PageHero, AdminNote } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { facilities } from "@/content/campus";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Campus & Facilities",
  description:
    "Learn about the campus of Holy Cross College of Carigara in Ponong, Carigara, Leyte.",
  path: "/about/campus",
});

export default function CampusPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus"
        title="A place of learning in the heart of Carigara"
        description={`${siteConfig.location.full}`}
      >
        <Button href="/campus-life/gallery" variant="secondary">
          View Gallery
        </Button>
      </PageHero>
      <section className="section-pad">
        <div className="container-wide">
          <AdminNote>
            Add named facilities, labs, library details, chapel information, and campus
            photography. Entries below are intentionally conservative to avoid inventing
            amenities.
          </AdminNote>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {facilities.map((facility) => (
              <Reveal key={facility.id}>
                <article className="h-full rounded-2xl border border-border bg-surface p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-700">
                    {facility.category}
                  </p>
                  <h2 className="font-display mt-2 text-2xl text-ink">{facility.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {facility.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
