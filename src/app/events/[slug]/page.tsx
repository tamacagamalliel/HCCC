import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { events, getEventBySlug } from "@/content/events";
import { absoluteUrl } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return {
    title: `${event.title} | HCCC`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.location,
      address: "Rebolledo St., Ponong, 6529 Carigara, Leyte, Philippines",
    },
    description: event.description,
    url: absoluteUrl(`/events/${event.slug}`),
    organizer: {
      "@type": "EducationalOrganization",
      name: "Holy Cross College of Carigara, Incorporated",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={event.category}
        title={event.title}
        description={event.description}
      >
        <div className="space-y-1 text-sm text-white/75">
          <p>{event.displayDate}{event.time ? ` · ${event.time}` : ""}</p>
          <p>{event.location}</p>
        </div>
      </PageHero>
      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <div className="prose-hccc space-y-4">
            {event.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/events" variant="outline">
              Back to events
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
