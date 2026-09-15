"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { academicLevels, getCollegePrograms } from "@/content/programs";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "basic-education",
    label: "Basic Education",
    title: "Basic Education",
    subtitle: "Foundational Catholic formation",
    description:
      "HCCC’s Basic Education pathway prepares learners with strong academics and values formation — the foundation for Junior High and beyond.",
    href: "/academics/basic-education",
  },
  {
    id: "junior-high",
    label: "Junior High",
    ...academicLevels[0],
  },
  {
    id: "senior-high",
    label: "Senior High",
    ...academicLevels[1],
  },
  {
    id: "college",
    label: "College",
    ...academicLevels[2],
  },
] as const;

export function ProgramBrowser() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("college");
  const current = tabs.find((t) => t.id === active) ?? tabs[3];
  const college = getCollegePrograms();

  return (
    <section className="section-pad">
      <div className="container-wide">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow text-gold-700">Academics</p>
            <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl md:text-[2.75rem]">
              Discover your path
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              From Basic Education through College — pathways formed for growth, vocation, and
              service.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid items-start gap-4 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-5">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:sticky lg:top-[calc(var(--header-height)+1rem)] lg:flex-col lg:overflow-visible">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "shrink-0 rounded-xl border px-4 py-3 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:w-full",
                  active === tab.id
                    ? "border-forest-700 bg-forest-900 text-white shadow-[var(--shadow-soft)]"
                    : "border-border bg-surface text-ink hover:border-forest-600 hover:bg-forest-50",
                )}
              >
                <span className="block text-sm font-semibold">{tab.label}</span>
                {"subtitle" in tab ? (
                  <span
                    className={cn(
                      "mt-1 block text-xs",
                      active === tab.id ? "text-white/70" : "text-muted",
                    )}
                  >
                    {tab.subtitle}
                  </span>
                ) : null}
              </button>
            ))}
          </div>

          <Reveal>
            <div className="rounded-[1.5rem] border border-border bg-surface-2 p-5 sm:p-6 lg:p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-gold-700">
                {"status" in current ? current.status : "Open for enrollment"}
              </p>
              <h3 className="font-display mt-2 text-2xl text-ink sm:text-3xl">{current.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
                {current.description}
              </p>
              <Button href={current.href} className="mt-5" variant="primary">
                Explore {current.label}
                <ArrowRight className="h-4 w-4" />
              </Button>

              {active === "college" ? (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {college.map((program) => (
                    <Link
                      key={program.slug}
                      href={`/academics/programs/${program.slug}`}
                      className="group rounded-2xl border border-border bg-surface p-4 no-underline transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-forest-600 hover:shadow-[var(--shadow-soft)] sm:p-5"
                    >
                      <p className="font-display text-2xl tracking-tight text-forest-800 sm:text-3xl">
                        {program.shortName}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-snug text-ink">
                        {program.name}
                      </p>
                      <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-muted">
                        {program.levelLabel}
                      </p>
                      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
                        {program.overview}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest-800">
                        Explore program
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
