import { PageHero } from "@/components/ui/Section";
import { CalendarExplorer } from "@/components/calendar/CalendarExplorer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "School Calendar",
  description:
    "Public school calendar for Holy Cross College of Carigara — enrollment periods, opening of classes, and key dates.",
  path: "/calendar",
});

export default function CalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar"
        title="Important public dates"
        description="An information calendar for families — not a student academic portal."
      />
      <section className="section-pad">
        <div className="container-page">
          <CalendarExplorer />
        </div>
      </section>
    </>
  );
}
