import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { Logo } from "@/components/ui/Logo";

const explore = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Calendar", href: "/calendar" },
];

const admissions = [
  { label: "Admission Process", href: "/admissions/process" },
  { label: "Requirements", href: "/admissions/requirements" },
  { label: "Programs", href: "/academics" },
  { label: "Enrollment Portal", href: siteConfig.enrollment.url, external: true },
  { label: "Send Inquiry", href: "/inquire" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-forest-950 text-white">
      <div className="container-wide section-pad pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <Logo size={52} className="h-12 w-12 shrink-0 sm:h-[52px] sm:w-[52px]" />
              <div className="min-w-0">
                <p className="font-display text-lg leading-snug sm:text-xl">{siteConfig.name}</p>
                <p className="text-sm text-white/60">{siteConfig.shortName}</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80">
              A diocesan educational community in Carigara, Leyte — guided by Franciscan
              values and rooted in Catholic traditions.
            </p>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow/90">
              In Hoc Signo Vinces
            </p>
            <p className="mt-2 text-xs text-white/55">{siteConfig.location.full}</p>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social mt-5"
            >
              <FacebookIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              Official Facebook Page
            </a>
            <a
              href={siteConfig.social.facebookCollege}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social mt-1"
            >
              <FacebookIcon className="h-4 w-4" />
              College Department Facebook
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-gold-400">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-gold-400">Admissions</p>
            <ul className="mt-4 space-y-2.5">
              {admissions.map((item) => (
                <li key={item.href}>
                  {"external" in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link text-sm"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="footer-link text-sm">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-gold-400">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{siteConfig.location.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a href={`tel:${siteConfig.contact.phoneTel}`} className="footer-link">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="footer-link break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/60">{siteConfig.contact.officeHours}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-sm italic text-gold-400">
              {siteConfig.greeting}
            </p>
            <p className="mt-1">
              © {year} {siteConfig.legalName}. All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="footer-legal">
              Privacy Policy
            </Link>
            <Link href="/data-privacy" className="footer-legal">
              Data Privacy
            </Link>
            <Link href="/terms" className="footer-legal">
              Website Policy
            </Link>
            <Link href="/accessibility" className="footer-legal">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
