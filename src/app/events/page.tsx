import Link from "next/link";
import { PageHero } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { events, getPastEvents, getUpcomingEvents } from "@/content/events";

export const metadata = buildMetadata({
  title: "Events",
  description: "Upcoming and past public events at Holy Cross College of Carigara.",
  path: "/events",
});

export default function EventsPage() {
  const upcoming = getUpcomingEvents(new Date("2026-03-01"));
  const past = getPastEvents(new Date("2026-03-01"));

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Gatherings, deadlines, and community moments"
        description="A public events list for families and visitors. Academic portals remain separate."
      />
      <section className="section-pad">
        <div className="container-page space-y-12">
          <EventGroup title="Upcoming Events" items={upcoming} empty="No upcoming events listed yet." />
          <EventGroup title="Past Events" items={past} empty="No past events listed yet." />
        </div>
      </section>
    </>
  );
}

function EventGroup({
  title,
  items,
  empty,
}: {
  title: string;
  items: typeof events;
  empty: string;
}) {
  return (
    <div>
      <h2 className="font-display text-3xl text-ink">{title}</h2>
      {items.length === 0 ? (
        <p className="mt-4 text-sm text-muted">{empty}</p>
      ) : (
        <div className="mt-5 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
          {items.map((event) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className="flex flex-col gap-2 px-5 py-5 no-underline transition hover:bg-forest-50 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-forest-700">
                  {event.category}
                </p>
                <h3 className="mt-1 font-display text-xl text-ink">{event.title}</h3>
                <p className="mt-1 text-sm text-muted">{event.description}</p>
              </div>
              <div className="text-sm text-gold-700 sm:text-right">
                <p className="font-semibold">{event.displayDate}</p>
                <p className="text-muted">{event.location}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
