import { PageHero } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";
import { buildMetadata } from "@/lib/seo";
import { coreValues, goals, identityPillars, mission, vision } from "@/content/site";
import { sealMeaning } from "@/content/campus";

export const metadata = buildMetadata({
  title: "Mission, Vision & Values",
  description:
    "Official vision, mission, goals, and core values of Holy Cross College of Carigara — Integrity, Passion, Persistence, and Right Action.",
  path: "/about/mission-vision-values",
});

export default function MissionVisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission · Vision · Values"
        title="What guides every Holy Crossian"
        description="Official institutional statements published for Holy Cross College of Carigara."
      />
      <section className="section-pad">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[1.5rem] bg-forest-900 p-8 text-white">
              <p className="eyebrow text-yellow">Vision</p>
              <p className="font-display mt-5 text-2xl leading-snug sm:text-3xl">{vision}</p>
            </article>
          </Reveal>
          <Reveal>
            <article className="h-full rounded-[1.5rem] border border-border bg-surface p-8">
              <p className="eyebrow">Mission</p>
              <p className="font-display mt-5 text-2xl leading-snug text-ink sm:text-3xl">
                {mission}
              </p>
            </article>
          </Reveal>
        </div>

        <div className="container-wide mt-10 grid gap-4 md:grid-cols-2">
          {identityPillars.map((pillar) => (
            <Reveal key={pillar.title}>
              <article className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="font-display text-2xl text-ink">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="container-wide mt-12">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-3xl text-ink">Core Values</h2>
              <p className="mt-3 max-w-2xl text-muted">
                Drawn from the published meaning of the HCCC seal — the four rays of the cross
                linked to Integrity, Passion, Persistence, and Right Action.
              </p>
            </div>
            <Logo size={72} className="h-[72px] w-[72px]" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {coreValues.map((value, i) => (
              <Reveal key={value.title}>
                <article className="h-full rounded-2xl border border-border bg-surface p-6">
                  <p className="font-display text-3xl text-forest-100">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-xl text-ink">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            {sealMeaning.chiRho} {sealMeaning.cross}
          </p>
        </div>

        <div className="container-wide mt-12">
          <h2 className="font-display text-3xl text-ink">Goals</h2>
          <ul className="mt-6 space-y-3">
            {goals.map((goal, i) => (
              <li
                key={goal}
                className="flex gap-4 rounded-xl border border-border bg-surface px-4 py-4"
              >
                <span className="font-display text-xl text-forest-700">0{i + 1}</span>
                <span className="text-sm leading-relaxed text-ink-soft">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
