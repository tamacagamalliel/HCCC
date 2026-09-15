import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  ClipboardPen,
  Compass,
  Files,
  GraduationCap,
  MapPin,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { ProgramBrowser } from "@/components/home/ProgramBrowser";
import { siteConfig, coreValues, mission } from "@/content/site";
import { whoWeAre, historyMilestones, galleryItems, historyIntro } from "@/content/campus";
import { NewsCoverImage } from "@/components/news/NewsCoverImage";
import { newsArticles } from "@/content/news";
import { getUpcomingEvents } from "@/content/events";
import { cn } from "@/lib/utils";

const marqueeItems = [
  "ADMISSIONS OPEN",
  "ENROLLMENT INFORMATION",
  "HCCC NEWS",
  "UPCOMING EVENTS",
  "DISCOVER HCCC",
  "INTEGRITY",
  "PASSION",
  "PERSISTENCE",
  "RIGHT ACTION",
  "CARIGARA · LEYTE",
];

const lookingFor = [
  {
    title: "I'm a Prospective Student",
    description: "Explore programs and pathways",
    href: "/academics",
    icon: GraduationCap,
  },
  {
    title: "I'm a Parent",
    description: "Admissions & requirements",
    href: "/admissions",
    icon: Users,
  },
  {
    title: "I want to Learn About HCCC",
    description: "Our story and identity",
    href: "/about",
    icon: BookOpen,
  },
  {
    title: "I want to See What's Happening",
    description: "News and events",
    href: "/news",
    icon: CalendarDays,
  },
  {
    title: "I want to Visit",
    description: "Contact and location",
    href: "/contact",
    icon: MapPin,
  },
];

const journeySteps: {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  external?: boolean;
}[] = [
  {
    step: "01",
    title: "Explore",
    description: "Review Junior High, Senior High, and College pathways that fit your goals.",
    icon: Compass,
    href: "/academics",
  },
  {
    step: "02",
    title: "Prepare",
    description:
      "Gather Form 138, Good Moral Certificate, PSA Birth Certificate, and other required documents.",
    icon: Files,
    href: "/admissions/requirements",
  },
  {
    step: "03",
    title: "Apply",
    description:
      "Create your portal account and complete the online admission form with clear document uploads.",
    icon: ClipboardPen,
    href: siteConfig.enrollment.url,
    external: true,
  },
  {
    step: "04",
    title: "Enroll",
    description:
      "Track your application, follow Admissions guidance, and complete enrollment through the official portal.",
    icon: BadgeCheck,
    href: siteConfig.enrollment.url,
    external: true,
  },
];

function formatEventParts(isoDate: string) {
  const d = new Date(`${isoDate}T12:00:00`);
  return {
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    day: d.toLocaleString("en-US", { day: "2-digit" }),
  };
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-forest-950 text-white">
      <Image
        src="/images/background.jpg"
        alt="Holy Cross College of Carigara campus building"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%] scale-105 animate-float motion-reduce:animate-none"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-forest-950/90 via-forest-950/72 to-forest-950/92 md:bg-gradient-to-r md:from-forest-950/94 md:via-forest-950/78 md:to-forest-950/45"
        aria-hidden
      />
      <div className="absolute inset-0 hero-grid opacity-15" aria-hidden />
      <div className="grain absolute inset-0" aria-hidden />

      <div className="container-wide relative flex min-h-[min(92vh,900px)] flex-col justify-center pb-16 pt-[calc(var(--header-height)+1.75rem)] sm:pb-20 md:pt-[calc(var(--header-height)+2.75rem)]">
        <div className="max-w-3xl">
          <div className="animate-fade-up mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <Logo
              size={72}
              priority
              className="h-14 w-14 shrink-0 drop-shadow-lg sm:h-[4.5rem] sm:w-[4.5rem]"
            />
            <div className="min-w-0">
              <p className="font-display text-lg leading-tight text-white sm:text-xl">
                {siteConfig.name}
              </p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow sm:text-xs">
                Carigara · Leyte · Philippines
              </p>
            </div>
          </div>

          <p className="animate-fade-up font-display text-base italic text-yellow sm:text-lg">
            {siteConfig.greeting}
          </p>

          <h1 className="font-display animate-fade-up-delay-1 mt-3 max-w-3xl text-[2.35rem] leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.35rem]">
            {siteConfig.heroHeadline}
          </h1>

          <p className="animate-fade-up-delay-2 mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg">
            {siteConfig.tagline} A diocesan educational community in Ponong, Carigara — guided by
            Franciscan values and rooted in Catholic traditions.
          </p>

          <div className="animate-fade-up-delay-2 mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button href="/admissions" size="lg" variant="secondary" className="w-full sm:w-auto">
              Explore Admissions
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/academics" size="lg" variant="light" className="w-full sm:w-auto">
              Explore Programs
            </Button>
          </div>

          <p className="mt-5 text-xs text-white/75 sm:text-sm">
            Public information website · Enrollment via{" "}
            <a
              href={siteConfig.enrollment.url}
              className="font-semibold text-yellow underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              official portal
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export function AccentMarquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <section
      className="border-y border-white/10 bg-forest-950 py-3.5 text-white"
      aria-label="HCCC highlights"
    >
      <div className="marquee">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span key={`${item}-${i}`} className="inline-flex items-center gap-3 px-1">
              <span className="font-display text-sm tracking-[0.22em] text-yellow sm:text-base">
                {item}
              </span>
              <span className="text-white/25" aria-hidden>
                •
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LookingForSection() {
  return (
    <section className="section-pad bg-background">
      <div className="container-wide">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-gold-700">Quick access</p>
            <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
              What can we help you find?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Choose the path that matches where you are — then continue into programs, admissions,
              or campus life.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {lookingFor.map((item) => (
            <Reveal key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 no-underline transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-forest-600 hover:shadow-[var(--shadow-soft)]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-forest-100 text-forest-800 transition group-hover:bg-forest-800 group-hover:text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="mt-4 text-sm font-semibold leading-snug text-ink">{item.title}</span>
                <span className="mt-2 inline-flex items-center gap-1 text-sm text-forest-700">
                  {item.description}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DiscoverHccc() {
  return (
    <section className="section-pad bg-surface-2">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/gallery/campus-02.jpg"
              alt="Holy Cross College of Carigara campus courtyard"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="img-zoom object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow">
              Holy Cross College of Carigara
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="eyebrow text-gold-700">Discover HCCC</p>
          <h2 className="font-display mt-3 text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
            More than a school. A community.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{mission}</p>
          <p className="prose-hccc mt-4 max-w-xl">{whoWeAre.ownership}</p>
          <p className="prose-hccc mt-3 max-w-xl">{whoWeAre.franciscanService}</p>
          <div className="mt-8">
            <Button href="/about">
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ValuesEditorial() {
  return (
    <section className="section-pad bg-forest-950 text-white">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow text-yellow">Mission & values</p>
          <h2 className="font-display mt-3 max-w-3xl text-3xl leading-tight sm:text-4xl md:text-5xl">
            A learning community rooted in purpose
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Holistic transformation, community-based ethical learning, and Catholic tradition —
            lived through the seal values of Integrity, Passion, Persistence, and Right Action.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4 sm:gap-x-4">
          {coreValues.map((value, index) => (
            <div key={value.title} className="flex items-center gap-3 sm:gap-4">
              <div>
                <p className="font-display text-2xl text-yellow sm:text-3xl">{value.title}</p>
                <p className="mt-1 max-w-[16rem] text-sm leading-relaxed text-white/70">
                  {value.description}
                </p>
              </div>
              {index < coreValues.length - 1 ? (
                <span className="hidden text-white/30 sm:inline" aria-hidden>
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdmissionsJourney() {
  return (
    <section className="section-pad relative overflow-hidden bg-surface-2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(63,56,122,0.12),transparent_70%)]"
      />
      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.25fr] lg:items-center lg:gap-14">
          <Reveal>
            <p className="eyebrow text-gold-700">Admissions</p>
            <h2 className="font-display mt-3 text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
              Ready to begin?
              <span className="mt-2 block text-forest-700">Your HCCC journey starts here.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
              This website is your digital front door. When you are ready to apply, continue through
              the school’s official online enrollment system.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/admissions" size="lg" variant="primary">
                Explore Admissions
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={siteConfig.enrollment.url} external size="lg" variant="outline">
                Start Enrollment
              </Button>
            </div>
          </Reveal>

          <Reveal>
            <ol className="journey-path">
              {journeySteps.map((item, index) => {
                const Icon = item.icon;
                const linkProps = item.external
                  ? { target: "_blank" as const, rel: "noopener noreferrer" }
                  : {};

                return (
                  <li key={item.step} className="journey-step">
                    <div className="journey-rail" aria-hidden="true">
                      <span className="journey-node">
                        <Icon className="h-4 w-4" strokeWidth={2.25} />
                      </span>
                      {index < journeySteps.length - 1 ? <span className="journey-line" /> : null}
                    </div>
                    <Link
                      href={item.href}
                      {...linkProps}
                      className="journey-card group no-underline"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-700">
                          Step {item.step}
                        </p>
                        <ArrowRight className="h-3.5 w-3.5 text-forest-600 opacity-0 transition duration-500 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </div>
                      <h3 className="mt-2 font-display text-xl text-ink transition-colors duration-500 group-hover:text-forest-700">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CampusCollage() {
  const shots = galleryItems.filter((g) => g.imageSrc).slice(0, 4);

  return (
    <section className="section-pad bg-surface-2">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow text-gold-700">Campus life</p>
            <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
              Life and learning in Carigara
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              Spaces for formation, friendship, and community — rooted in place and purpose.
            </p>
          </Reveal>
          <Button href="/campus-life/gallery" variant="outline">
            View Gallery
          </Button>
        </div>

        <div className="campus-collage mt-10">
          {shots.map((shot) => (
            <Reveal key={shot.id} className="h-full min-h-[220px]">
              <Link
                href="/campus-life"
                className="group relative block h-full min-h-[220px] overflow-hidden rounded-[1.25rem] no-underline"
              >
                <Image
                  src={shot.imageSrc!}
                  alt={shot.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="img-zoom object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-forest-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-yellow">
                    {shot.category}
                  </p>
                  <p className="mt-1 font-display text-xl text-white">{shot.title}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HeritageTimeline() {
  const loop = [...historyMilestones, ...historyMilestones];

  return (
    <section className="section-pad bg-background">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow text-gold-700">Heritage</p>
            <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">{historyIntro.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
              {historyIntro.lead}
            </p>
          </Reveal>
          <Button href="/about/history" variant="outline">
            Full History
          </Button>
        </div>
      </div>

      <div className="heritage-marquee mt-10" aria-label="HCCC heritage timeline">
        <div className="heritage-marquee-track">
          {loop.map((item, index) => (
            <article
              key={`${item.year}-${index}`}
              className="heritage-card rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)]"
            >
              <p className="font-display text-2xl text-forest-700">{item.year}</p>
              <h3 className="mt-2 font-display text-lg leading-snug text-ink">{item.title}</h3>
              <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsEventsPreview() {
  const featured = newsArticles[0];
  const latest = newsArticles.slice(1, 4);
  const upcoming = getUpcomingEvents(new Date("2026-03-01")).slice(0, 3);

  return (
    <section className="section-pad bg-forest-950 text-white">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow text-yellow">News & events</p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">What&apos;s happening at HCCC</h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            <Button href="/news" variant="secondary">
              All News
            </Button>
            <Button href="/events" variant="light">
              All Events
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.9fr]">
          <Reveal>
            <Link
              href={`/news/${featured.slug}`}
              className="group relative block overflow-hidden rounded-[1.5rem] no-underline"
            >
              <div className="relative aspect-[16/11] sm:aspect-[16/10]">
                <NewsCoverImage
                  src={featured.imageSrc}
                  alt={featured.imageAlt}
                  tone={featured.imageTone}
                  className="h-full w-full"
                  priority={featured.featured}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-yellow">
                  Featured · {featured.category}
                </p>
                <h3 className="font-display mt-2 max-w-2xl text-2xl leading-tight sm:text-3xl md:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                  {featured.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-yellow">
                  Read story
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl text-white">Latest updates</h3>
              <ul className="mt-4 space-y-3">
                {latest.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/news/${article.slug}`}
                      className="group block rounded-xl border border-white/10 bg-white/5 p-4 no-underline transition hover:bg-white/10"
                    >
                      <p className="text-xs text-yellow">
                        {article.category} · {article.displayDate}
                      </p>
                      <p className="mt-1 font-display text-lg leading-snug text-white">
                        {article.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl text-white">Upcoming dates</h3>
              <ul className="mt-4 space-y-3">
                {upcoming.map((event) => {
                  const parts = formatEventParts(event.date);
                  return (
                    <li key={event.slug}>
                      <Link
                        href={`/events/${event.slug}`}
                        className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4 no-underline transition hover:bg-white/10"
                      >
                        <div className="flex h-[4.25rem] w-[4.25rem] shrink-0 flex-col items-center justify-center rounded-xl bg-yellow text-forest-950">
                          <span className="text-[10px] font-bold uppercase tracking-wider">
                            {parts.month}
                          </span>
                          <span className="font-display text-2xl leading-none">{parts.day}</span>
                        </div>
                        <div className="min-w-0">
                          <p className="font-display text-lg leading-snug text-white">{event.title}</p>
                          <p className="mt-1 text-sm text-white/70">
                            {event.location}
                            {event.time ? ` · ${event.time}` : ""}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      <Image
        src="/images/background.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-900/95 to-forest-950/80" />
      <div className="container-wide relative section-pad">
        <Reveal>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Logo size={64} className="h-14 w-14 drop-shadow-md" />
              <p className="eyebrow mt-6 text-yellow">Next step</p>
              <h2 className="font-display mt-3 text-3xl leading-tight sm:text-4xl md:text-5xl">
                Your journey starts here.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                Explore admissions guidance on this site, then proceed to the official enrollment
                portal when you are ready to apply.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href="/admissions" size="lg" variant="secondary" className="w-full sm:w-auto">
                Explore Admissions
              </Button>
              <Button href="/contact" size="lg" variant="light" className="w-full sm:w-auto">
                Contact HCCC
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { ProgramBrowser };
