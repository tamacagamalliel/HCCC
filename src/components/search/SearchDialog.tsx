"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { programs } from "@/content/programs";
import { newsArticles } from "@/content/news";
import { events } from "@/content/events";
import { faqs } from "@/content/faqs";
import { cn } from "@/lib/utils";

type SearchHit = {
  type: string;
  title: string;
  description: string;
  href: string;
};

const staticPages: SearchHit[] = [
  {
    type: "Page",
    title: "Home",
    description: "Holy Cross College of Carigara official website",
    href: "/",
  },
  {
    type: "Page",
    title: "About HCCC",
    description: "School identity, mission, and community",
    href: "/about",
  },
  {
    type: "Page",
    title: "Admissions",
    description: "How to apply and enroll at HCCC",
    href: "/admissions",
  },
  {
    type: "Page",
    title: "Contact",
    description: "Address, phone, email, and office hours",
    href: "/contact",
  },
  {
    type: "Page",
    title: "Inquire",
    description: "Send a public inquiry to HCCC",
    href: "/inquire",
  },
  {
    type: "Page",
    title: "Campus Life",
    description: "Activities, organizations, and community",
    href: "/campus-life",
  },
  {
    type: "Page",
    title: "School Calendar",
    description: "Public enrollment and school dates",
    href: "/calendar",
  },
];

function buildIndex(): SearchHit[] {
  return [
    ...staticPages,
    ...programs.map((p) => ({
      type: "Program",
      title: p.name,
      description: p.overview,
      href: `/academics/programs/${p.slug}`,
    })),
    ...newsArticles.map((n) => ({
      type: "News",
      title: n.title,
      description: n.excerpt,
      href: `/news/${n.slug}`,
    })),
    ...events.map((e) => ({
      type: "Event",
      title: e.title,
      description: e.description,
      href: `/events/${e.slug}`,
    })),
    ...faqs.map((f) => ({
      type: "FAQ",
      title: f.question,
      description: f.answer,
      href: `/admissions/faq#${f.id}`,
    })),
  ];
}

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const index = useMemo(() => buildIndex(), []);

  useEffect(() => {
    if (open) {
      setQuery("");
      const t = setTimeout(() => inputRef.current?.focus(), 20);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) onClose();
        else {
          /* parent opens via shortcut listener */
        }
      }
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index.slice(0, 8);
    return index
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.type.toLowerCase().includes(q),
      )
      .slice(0, 12);
  }, [index, query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label="Site search">
      <button
        type="button"
        className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm"
        aria-label="Close search"
        onClick={onClose}
      />
      <div className="relative mx-auto mt-[8vh] w-[min(640px,calc(100%-1rem))] overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-lift)] sm:mt-[12vh] sm:w-[min(640px,calc(100%-1.5rem))]">
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="h-4 w-4 text-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, programs, news, events, FAQs…"
            className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted"
            aria-label="Search query"
          />
          <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-[10px] text-muted sm:inline">
            ESC
          </kbd>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-muted hover:bg-forest-50 hover:text-ink"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <li className="px-3 py-8 text-center text-sm text-muted">No results found.</li>
          ) : (
            results.map((item) => (
              <li key={`${item.type}-${item.href}`}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "block rounded-xl px-3 py-3 no-underline transition hover:bg-forest-50",
                  )}
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700">
                    {item.type}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-ink">{item.title}</span>
                  <span className="mt-1 line-clamp-2 block text-xs text-muted">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
        <div className="border-t border-border px-4 py-2 text-[11px] text-muted">
          Tip: press <kbd className="rounded border border-border px-1">Ctrl</kbd> /{" "}
          <kbd className="rounded border border-border px-1">⌘</kbd> +{" "}
          <kbd className="rounded border border-border px-1">K</kbd> to search
        </div>
      </div>
    </div>
  );
}
