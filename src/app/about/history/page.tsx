import { PageHero, AdminNote } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { historyIntro, historyMilestones } from "@/content/campus";
import { Button } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "History",
  description:
    "Explore the heritage of Holy Cross College of Carigara — from Holy Cross Academy in 1945 to today’s diocesan college community.",
  path: "/about/history",
});

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Heritage"
        title={historyIntro.title}
        description={historyIntro.lead}
      >
        <Button href="/about" variant="secondary">
          Back to About
        </Button>
      </PageHero>
      <section className="section-pad">
        <div className="container-page">
          <p className="mb-8 max-w-2xl text-sm text-muted">
            Timeline summarized from the school’s published historical narrative on{" "}
            <a
              href="https://rcapschools.org/hccc/about/history/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest-800 underline"
            >
              RCAPS / HCCC
            </a>
            . Fuller archival detail can be expanded by school administrators.
          </p>
          <ol className="relative space-y-8 border-l border-border-strong pl-8">
            {historyMilestones.map((item) => (
              <Reveal key={`${item.year}-${item.title}`}>
                <li className="relative">
                  <span className="absolute -left-[2.4rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-forest-700 bg-surface text-[10px] font-bold text-forest-800">
                    ◆
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-700">
                    {item.year}
                  </p>
                  <h2 className="font-display mt-2 text-2xl text-ink">{item.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
          <AdminNote>
            Confirm any additional milestones, named buildings, or anniversary narratives the
            school wants featured publicly.
          </AdminNote>
        </div>
      </section>
    </>
  );
}
