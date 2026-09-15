"use client";

import { useMemo, useState } from "react";
import { calendarItems } from "@/content/events";
import { cn } from "@/lib/utils";

const categories = ["All", "Admissions", "Academic", "Community", "Faith", "Student Life", "Holiday"] as const;

export function CalendarExplorer() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const items = useMemo(() => {
    return calendarItems
      .filter((item) => category === "All" || item.category === category)
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [category]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-semibold",
              category === item
                ? "border-forest-800 bg-forest-800 text-white"
                : "border-border bg-surface text-ink-soft",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
        {items.length === 0 ? (
          <p className="px-5 py-10 text-center text-sm text-muted">
            No calendar items in this category yet.
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col gap-2 px-5 py-5 sm:flex-row sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-forest-700">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
                <time className="text-sm font-semibold text-gold-700" dateTime={item.date}>
                  {item.displayDate}
                </time>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
