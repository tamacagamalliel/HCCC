"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { galleryItems, type GalleryItem } from "@/content/campus";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const categories = [
  "All",
  "Campus",
  "Students",
  "Events",
  "Academics",
  "Community",
  "Graduation",
  "Activities",
] as const;

function GalleryMedia({
  item,
  className,
  priority = false,
}: {
  item: GalleryItem;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(item.imageSrc) && !failed;

  if (showImage && item.imageSrc) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority={priority}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return <div className={cn(className, `tone-${item.tone}`)} aria-hidden />;
}

export function GalleryGrid() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items = useMemo(
    () => galleryItems.filter((item) => category === "All" || item.category === category),
    [category],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300",
              category === item
                ? "border-forest-800 bg-forest-800 text-white"
                : "border-border bg-surface text-ink-soft hover:border-forest-600",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item)}
            className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border text-left shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
          >
            <GalleryMedia
              item={item}
              priority={index < 2}
              className={
                index % 3 === 0
                  ? "aspect-[4/5]"
                  : index % 3 === 1
                    ? "aspect-square"
                    : "aspect-[16/10]"
              }
            />
            <div className="bg-surface p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-forest-700">
                {item.category}
              </p>
              <p className="mt-1 font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-xs text-muted">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            type="button"
            className="absolute inset-0 bg-forest-950/70"
            aria-label="Close lightbox"
            onClick={() => setActive(null)}
          />
          <div className="relative w-[min(720px,100%)] overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-lift)]">
            <button
              type="button"
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 transition hover:bg-yellow"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <GalleryMedia item={active} className="aspect-[16/10]" priority />
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-forest-700">
                {active.category}
              </p>
              <h2 className="font-display mt-1 text-2xl text-ink">{active.title}</h2>
              <p className="mt-2 text-sm text-muted">{active.caption}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
