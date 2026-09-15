import { PageHero, AdminNote } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { leadershipPlaceholders } from "@/content/campus";

export const metadata = buildMetadata({
  title: "School Leadership",
  description:
    "Leadership of Holy Cross College of Carigara. Official current names and photos to be confirmed by the school.",
  path: "/about/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Stewards of the HCCC community"
        description="School leaders guide academic life, formation, and service under the Palo Archdiocese."
      />
      <section className="section-pad">
        <div className="container-wide">
          <AdminNote>
            The RCAPS School Officials page does not currently present a complete public roster
            with photos in a scrapeable form. Confirm current names and approved portraits before
            replacing placeholders. Historical note: in 2016, Archbishop John Du appointed Fr.
            Ric Marpa to head and oversee HCC governance.
          </AdminNote>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipPlaceholders.map((person) => (
              <Reveal key={person.role}>
                <article className="overflow-hidden rounded-2xl border border-border bg-surface">
                  <div className="aspect-[4/5] tone-slate flex items-end p-4">
                    <span className="rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-ink">
                      Photo pending
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-forest-700">
                      {person.role}
                    </p>
                    <h2 className="font-display mt-2 text-xl text-ink">{person.name}</h2>
                    <p className="mt-2 text-xs text-muted">{person.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-dashed border-border-strong bg-forest-50/50 p-6">
            <h2 className="font-display text-2xl text-ink">Faculty & Staff Directory</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              A public faculty/staff directory is not published on this website yet. The
              architecture is ready for future profiles when the school chooses to add them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
