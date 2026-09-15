"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Menu, Search, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

type NavChild = { label: string; href: string; description?: string };
type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About HCCC", href: "/about", description: "Who we are" },
      { label: "History", href: "/about/history", description: "Our heritage" },
      {
        label: "Mission, Vision & Values",
        href: "/about/mission-vision-values",
        description: "What guides us",
      },
      {
        label: "School Leadership",
        href: "/about/leadership",
        description: "Governance",
      },
      {
        label: "Campus & Facilities",
        href: "/about/campus",
        description: "Our spaces",
      },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Overview", href: "/academics", description: "Programs at a glance" },
      {
        label: "Basic Education",
        href: "/academics/basic-education",
        description: "JHS & SHS",
      },
      {
        label: "Junior High School",
        href: "/academics/junior-high",
        description: "Grades 7–10",
      },
      {
        label: "Senior High School",
        href: "/academics/senior-high",
        description: "Grades 11–12",
      },
      { label: "College", href: "/academics/college", description: "Degree programs" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Why Choose HCCC", href: "/admissions", description: "Start here" },
      {
        label: "Admission Process",
        href: "/admissions/process",
        description: "Step by step",
      },
      {
        label: "Requirements",
        href: "/admissions/requirements",
        description: "Documents needed",
      },
      { label: "Admissions FAQ", href: "/admissions/faq", description: "Quick answers" },
    ],
  },
  {
    label: "Campus Life",
    href: "/campus-life",
    children: [
      { label: "Overview", href: "/campus-life", description: "Life at HCCC" },
      {
        label: "Activities",
        href: "/campus-life/activities",
        description: "Student life",
      },
      {
        label: "Organizations",
        href: "/campus-life/organizations",
        description: "Clubs & groups",
      },
      {
        label: "Community",
        href: "/campus-life/community",
        description: "Service & outreach",
      },
      { label: "Gallery", href: "/campus-life/gallery", description: "Campus moments" },
    ],
  },
  {
    label: "News & Events",
    href: "/news",
    children: [
      { label: "News", href: "/news", description: "Announcements" },
      { label: "Events", href: "/events", description: "Upcoming & past" },
      { label: "School Calendar", href: "/calendar", description: "Public dates" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Header({ onSearchOpen }: { onSearchOpen: () => void }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) {
        setOpen(false);
        setExpanded(null);
      }
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "border-white/20 bg-forest-950/98 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.55)] backdrop-blur-md"
          : "border-white/10 bg-forest-950/90 backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "container-wide flex items-center justify-between gap-2 transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-3",
          scrolled ? "h-14 sm:h-16" : "h-[var(--header-height)]",
        )}
      >
        <Link
          href="/"
          className="group flex min-w-0 max-w-[58%] items-center gap-2 no-underline transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 sm:max-w-none sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <Logo
            size={40}
            priority
            className="h-9 w-9 shrink-0 drop-shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 sm:h-11 sm:w-11"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-[0.95rem] leading-tight text-white transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-yellow sm:text-lg">
              {siteConfig.shortName}
            </span>
            <span className="hidden truncate text-[11px] tracking-wide text-white/90 min-[400px]:block">
              Holy Cross College of Carigara
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {mainNavigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="nav-link inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-[13px] font-medium !text-white no-underline xl:px-3 xl:text-sm"
              >
                {item.label}
                {item.children ? (
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      activeMenu === item.label && "rotate-180 text-yellow",
                    )}
                  />
                ) : null}
              </Link>
              {item.children && activeMenu === item.label ? (
                <div className="absolute left-0 top-full z-50 min-w-[260px] pt-2 xl:min-w-[280px]">
                  <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-lift)]">
                    <ul className="p-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="nav-dropdown-item block rounded-lg px-3 py-2.5 no-underline"
                          >
                            <span className="block text-sm font-semibold text-ink">
                              {child.label}
                            </span>
                            {child.description ? (
                              <span className="mt-0.5 block text-xs text-ink-soft">
                                {child.description}
                              </span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={onSearchOpen}
            className="btn-icon inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/15 hover:text-yellow"
            aria-label="Open search"
          >
            <Search className="h-5 w-5" />
          </button>
          <Button
            href="/inquire"
            size="sm"
            variant="secondary"
            className="hidden min-[480px]:inline-flex"
          >
            Inquire
          </Button>
          <button
            type="button"
            className="btn-icon inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/15 hover:text-yellow lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-white/10 bg-forest-950 lg:hidden"
        >
          <nav
            className="container-wide max-h-[min(70dvh,calc(100dvh-var(--header-height)))] overflow-y-auto overscroll-contain py-3 pb-[max(1rem,env(safe-area-inset-bottom))]"
            aria-label="Mobile"
          >
            <ul className="space-y-1">
              {mainNavigation.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const isExpanded = expanded === item.label;

                return (
                  <li key={item.label} className="border-b border-white/10">
                    <div className="flex items-stretch">
                      <Link
                        href={item.href}
                        className="flex-1 rounded-md px-2 py-3.5 text-base font-semibold text-white no-underline transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/10 hover:pl-3 hover:text-yellow"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {hasChildren ? (
                        <button
                          type="button"
                          className="btn-icon inline-flex w-12 items-center justify-center text-white/80 hover:text-yellow"
                          aria-expanded={isExpanded}
                          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label}`}
                          onClick={() =>
                            setExpanded((current) =>
                              current === item.label ? null : item.label,
                            )
                          }
                        >
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                              isExpanded && "rotate-180",
                            )}
                          />
                        </button>
                      ) : null}
                    </div>
                    {hasChildren && isExpanded ? (
                      <ul className="space-y-1 pb-3 pl-3">
                        {item.children!.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-md px-3 py-2.5 text-sm text-white/90 no-underline transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-0.5 hover:bg-white/10 hover:text-yellow"
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 grid gap-2 pb-2">
              <Button href="/inquire" variant="secondary" onClick={() => setOpen(false)}>
                Inquire Now
              </Button>
              <Button href={siteConfig.enrollment.url} external variant="light">
                Explore Enrollment
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
