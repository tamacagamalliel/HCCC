import { Button } from "@/components/ui/Button";
import { PageHero, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";
import { buildMetadata } from "@/lib/seo";
import { mission, vision, goals, siteConfig, coreValues } from "@/content/site";
import { whoWeAre, sealMeaning } from "@/content/campus";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "About HCCC",
  description:
    "Learn about Holy Cross College of Carigara — a diocesan educational community in Carigara, Leyte owned by the Palo Archdiocese and guided by Franciscan values.",
  path: "/about",
});

const links = [
  { href: "/about/history", label: "History" },
  { href: "/about/mission-vision-values", label: "Mission, Vision & Values" },
  { href: "/about/leadership", label: "School Leadership" },
  { href: "/about/campus", label: "Campus & Facilities" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About HCCC"
        title="An educational community rooted in faith and service"
        description="Holy Cross College of Carigara, Incorporated is a diocesan learning community in Carigara, Leyte — forming Holy Crossians since 1945."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/admissions" variant="secondary">
            Explore Admissions
          </Button>
          <Button href="/contact" variant="light">
            Contact HCCC
          </Button>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Are"
              title="Holy Cross College of Carigara"
              description="Located at Rebolledo St., Ponong, Carigara, Leyte, HCCC serves students and families through Junior High, Senior High, and College pathways."
            />
            <div className="prose-hccc mt-6 max-w-2xl space-y-4">
              <p>{whoWeAre.ownership}</p>
              <p>{whoWeAre.franciscanService}</p>
              <p>{whoWeAre.access}</p>
              <p>
                As a government-recognized and PEAC-certified institution, HCCCI works to make
                quality private education accessible, including through pathways such as the ESC
                subsidy.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold text-forest-800">Explore About</p>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-ink no-underline transition-all duration-300 hover:bg-forest-50"
                    >
                      {link.label}
                      <span aria-hidden>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-forest-50 p-4 text-sm text-ink-soft">
                <p className="font-semibold text-ink">Visit us</p>
                <p className="mt-1">{siteConfig.location.full}</p>
                <p className="mt-2">{siteConfig.contact.officeHours}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-surface-2">
        <div className="container-wide grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="flex justify-center">
              <Logo size={180} className="h-[180px] w-[180px] drop-shadow-md" />
            </div>
          </Reveal>
          <Reveal>
            <p className="eyebrow">Patron & Seal</p>
            <h2 className="font-display mt-2 text-3xl text-ink">{sealMeaning.title}</h2>
            <div className="prose-hccc mt-4 space-y-3">
              <p>{sealMeaning.chiRho}</p>
              <p>{sealMeaning.cross}</p>
              <p>{sealMeaning.rays}</p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-border bg-surface px-4 py-3"
                >
                  <p className="text-sm font-semibold text-forest-800">{value.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-border bg-surface p-7">
              <p className="eyebrow">Vision</p>
              <p className="font-display mt-4 text-2xl leading-snug text-ink">{vision}</p>
            </article>
          </Reveal>
          <Reveal>
            <article className="h-full rounded-2xl border border-border bg-surface p-7">
              <p className="eyebrow">Mission</p>
              <p className="font-display mt-4 text-2xl leading-snug text-ink">{mission}</p>
            </article>
          </Reveal>
        </div>
        <div className="container-wide mt-6">
          <Reveal>
            <article className="rounded-2xl border border-border bg-surface p-7">
              <p className="eyebrow">Institutional Goals</p>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {goals.map((goal) => (
                  <li
                    key={goal}
                    className="rounded-xl border border-border bg-forest-50/60 px-4 py-3 text-sm leading-relaxed text-ink-soft"
                  >
                    {goal}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
