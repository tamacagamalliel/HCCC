"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SearchDialog } from "@/components/search/SearchDialog";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { BackToTop } from "@/components/ui/BackToTop";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <ThemeProvider>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
      {/* Future: HCCC Virtual Admissions Assistant mount point */}
      <div id="hccc-assistant-root" hidden aria-hidden="true" />
    </ThemeProvider>
  );
}
