import Link from "next/link";
import { PageHero } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { campusLifeSections } from "@/content/campus";

export const metadata = buildMetadata({
  title: "Campus Life",
  description:
    "Discover student life, formation, organizations, and community at Holy Cross College of Carigara.",
  path: "/campus-life",
});

const links = [
  { href: "/campus-life/activities", label: "Activities" },
  { href: "/campus-life/organizations", label: "Organizations" },
  { href: "/campus-life/community", label: "Community" },
  { href: "/campus-life/gallery", label: "Gallery" },
];

export default function CampusLifePage() {
  return (
    <>
      <PageHero
        eyebrow="Campus Life"
        title="Belong, grow, and serve as a Holy Crossian"
        description="Campus life at HCCC is shaped by learning, faith formation, friendship, and service to the Carigara community."
      />
      <section className="section-pad">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-ink no-underline hover:border-forest-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {campusLifeSections.map((section) => (
              <Reveal key={section.title}>
                <article className="h-full rounded-2xl border border-border bg-surface p-6">
                  <h2 className="font-display text-2xl text-ink">{section.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{section.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
