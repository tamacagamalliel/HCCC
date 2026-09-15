"use client";

import { useMemo, useState } from "react";
import { faqs, faqCategories, type FaqCategory } from "@/content/faqs";
import { cn } from "@/lib/utils";
import { ChevronDown, Search } from "lucide-react";

export function FaqExplorer({
  initialCategory = "All",
}: {
  initialCategory?: FaqCategory | "All";
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FaqCategory | "All">(initialCategory);
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const filtered = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = category === "All" || faq.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search FAQs…"
            className="h-11 w-full rounded-md border border-border bg-surface pl-10 pr-3 text-sm outline-none ring-gold-500 focus:ring-2"
            aria-label="Search FAQs"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
          {(["All", ...faqCategories] as const).map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={category === item}
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-semibold transition",
                category === item
                  ? "border-forest-800 bg-forest-800 text-white"
                  : "border-border bg-surface text-ink-soft hover:border-forest-600",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
        {filtered.length === 0 ? (
          <p className="px-5 py-10 text-center text-sm text-muted">No FAQs match your search.</p>
        ) : (
          filtered.map((faq) => {
            const open = openId === faq.id;
            return (
              <div key={faq.id} id={faq.id}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : faq.id)}
                >
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-forest-700">
                      {faq.category}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-ink sm:text-base">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "mt-1 h-4 w-4 shrink-0 text-muted transition",
                      open && "rotate-180",
                    )}
                  />
                </button>
                {open ? (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-muted">{faq.answer}</div>
                ) : null}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
