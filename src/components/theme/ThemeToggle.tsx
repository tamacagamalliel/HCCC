"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";
import type { ThemePreference } from "@/components/theme/theme";
import { cn } from "@/lib/utils";

const options: {
  value: ThemePreference;
  label: string;
  icon: typeof Sun;
}[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

export function ThemeToggle({ className }: { className?: string }) {
  const { preference, setPreference } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const ActiveIcon =
    options.find((o) => o.value === preference)?.icon ?? Monitor;

  useEffect(() => {
    if (!open) return;

    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("mousedown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        className="btn-icon inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/15 hover:text-yellow"
        aria-label="Theme settings"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        <ActiveIcon className="h-5 w-5" />
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label="Color theme"
          className="absolute right-0 top-full z-50 mt-2 min-w-[10.5rem] overflow-hidden rounded-xl border border-border bg-surface p-1 shadow-[var(--shadow-lift)]"
        >
          {options.map((option) => {
            const Icon = option.icon;
            const selected = preference === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors duration-300",
                  selected
                    ? "bg-forest-100 text-ink"
                    : "text-ink-soft hover:bg-forest-50 hover:text-ink",
                )}
                onClick={() => {
                  setPreference(option.value);
                  setOpen(false);
                }}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {option.label}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
