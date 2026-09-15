import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Holy Cross College of Carigara — address, phone, email, office hours, and inquiry form.",
  path: "/contact",
});

export default function ContactPage() {
  const mapQuery = encodeURIComponent(siteConfig.location.full);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect with Holy Cross College of Carigara"
        description="Visit campus, call Admissions, or send a message. We welcome students, parents, alumni, and community partners."
      >
        <Button href="/inquire" variant="secondary">
          Send an Inquiry
        </Button>
      </PageHero>

      <section className="section-pad">
        <div className="container-wide grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <InfoCard
              icon={MapPin}
              label="Address"
              value={siteConfig.location.full}
            />
            <InfoCard
              icon={Phone}
              label="Telephone"
              value={siteConfig.contact.phone}
              href={`tel:${siteConfig.contact.phoneTel}`}
            />
            <InfoCard
              icon={Phone}
              label="Mobile"
              value={siteConfig.contact.mobile}
              href={`tel:${siteConfig.contact.mobileTel}`}
            />
            <InfoCard
              icon={Mail}
              label="Email"
              value={siteConfig.contact.email}
              href={`mailto:${siteConfig.contact.email}`}
            />
            <InfoCard icon={Clock} label="Office Hours" value={siteConfig.contact.officeHours} />
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-5 no-underline transition hover:border-forest-600"
            >
              <FacebookIcon className="h-5 w-5 text-forest-800" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-forest-700">
                  Social
                </span>
                <span className="mt-1 block text-sm font-semibold text-ink">
                  Official Facebook Page
                </span>
              </span>
            </a>
            <a
              href={siteConfig.social.facebookCollege}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-5 no-underline transition hover:border-forest-600"
            >
              <FacebookIcon className="h-5 w-5 text-forest-800" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-forest-700">
                  College
                </span>
                <span className="mt-1 block text-sm font-semibold text-ink">
                  College Department Facebook
                </span>
              </span>
            </a>
            <p className="text-xs text-muted">
              Alternate contacts listed by RCAPS: {siteConfig.contact.phoneAlt} ·{" "}
              {siteConfig.contact.emailAlt}
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-ink">Send a message</h2>
            <p className="mt-2 text-sm text-muted">
              Public inquiry form — not a student or teacher portal.
            </p>
            <div className="mt-5">
              <InquiryForm />
            </div>
          </div>
        </div>

        <div className="container-wide mt-12">
          <h2 className="font-display text-2xl text-ink">Location map</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-soft)]">
            <iframe
              title="Map of Holy Cross College of Carigara"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-forest-800" />
      <span>
        <span className="block text-xs font-bold uppercase tracking-wider text-forest-700">
          {label}
        </span>
        <span className="mt-1 block text-sm font-medium text-ink">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5 no-underline transition hover:border-forest-600"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5">
      {content}
    </div>
  );
}
