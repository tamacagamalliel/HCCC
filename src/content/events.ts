export type EventCategory =
  | "Admissions"
  | "Academic"
  | "Community"
  | "Faith"
  | "Student Life"
  | "Holiday";

export type SchoolEvent = {
  slug: string;
  title: string;
  date: string;
  endDate?: string;
  displayDate: string;
  time?: string;
  location: string;
  category: EventCategory;
  description: string;
  body: string[];
};

export const events: SchoolEvent[] = [
  {
    slug: "application-period-opens-2026",
    title: "Application Period Opens",
    date: "2026-05-11",
    displayDate: "May 11, 2026",
    time: "Portal opens",
    location: "HCCC Online Enrollment Portal",
    category: "Admissions",
    description:
      "Online applications for new and transferee students begin for S.Y. 2026–2027.",
    body: [
      "Mark your calendars: the official enrollment portal lists May 11, 2026 as the opening of the application period for new and transferee students.",
      "Prepare your documents in advance and create your portal account when you are ready to apply.",
    ],
  },
  {
    slug: "opening-of-classes-2026",
    title: "Opening of Classes",
    date: "2026-06-08",
    displayDate: "June 8, 2026",
    time: "As announced by the school",
    location: "HCCC Campus, Carigara, Leyte",
    category: "Academic",
    description:
      "First day of classes for officially enrolled students for S.Y. 2026–2027.",
    body: [
      "Opening of classes is published as June 8, 2026 for officially enrolled students.",
      "Families should monitor school announcements for reporting details and orientation schedules.",
    ],
  },
  {
    slug: "application-deadline-2026",
    title: "Application Deadline",
    date: "2026-06-30",
    displayDate: "June 30, 2026",
    time: "End of day / as indicated in portal",
    location: "HCCC Online Enrollment Portal",
    category: "Admissions",
    description:
      "Last day to submit your admission application and requirements for the published calendar period.",
    body: [
      "June 30, 2026 is listed as the last day to submit admission applications and requirements for the published S.Y. 2026–2027 calendar window.",
      "Submit early when possible so Admissions can guide you if documents need correction.",
    ],
  },
];

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents(referenceDate = new Date()) {
  const ref = referenceDate.toISOString().slice(0, 10);
  return events
    .filter((e) => e.date >= ref)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastEvents(referenceDate = new Date()) {
  const ref = referenceDate.toISOString().slice(0, 10);
  return events
    .filter((e) => e.date < ref)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export type CalendarItem = {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  category: EventCategory;
  description: string;
};

export const calendarItems: CalendarItem[] = [
  {
    id: "cal-app-open",
    title: "Application Period Opens",
    date: "2026-05-11",
    displayDate: "May 11, 2026",
    category: "Admissions",
    description: "Online applications for new and transferee students begin.",
  },
  {
    id: "cal-classes",
    title: "School Opening / First Day of Classes",
    date: "2026-06-08",
    displayDate: "June 8, 2026",
    category: "Academic",
    description: "First day of classes for officially enrolled students.",
  },
  {
    id: "cal-app-deadline",
    title: "Application Deadline",
    date: "2026-06-30",
    displayDate: "June 30, 2026",
    category: "Admissions",
    description: "Last day to submit admission application and requirements.",
  },
];
