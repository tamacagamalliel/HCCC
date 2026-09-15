export type RequirementCategory =
  | "general"
  | "new-students"
  | "transferees"
  | "college"
  | "basic-education";

export type RequirementGroup = {
  id: string;
  category: RequirementCategory;
  title: string;
  description: string;
  items: string[];
  note?: string;
};

/**
 * Requirements sourced from the official HCCC Online Enrollment portal.
 * Expand when the school publishes level-specific checklists.
 */
export const requirementGroups: RequirementGroup[] = [
  {
    id: "general-application",
    category: "general",
    title: "Core Application Documents",
    description:
      "Documents commonly requested for admission applications through the official online enrollment portal.",
    items: [
      "Report Card (Form 138)",
      "Good Moral Certificate",
      "PSA Birth Certificate",
    ],
    note: "Additional documents may be required depending on level, student type, or program. Confirm on the official enrollment portal or with Admissions.",
  },
  {
    id: "new-students",
    category: "new-students",
    title: "New Students",
    description:
      "First-time applicants begin by creating an account on the official enrollment portal and submitting the required documents online.",
    items: [
      "Create an account on the HCCC Online Enrollment portal",
      "Complete the online admission form",
      "Upload scanned copies of required documents",
      "Track your application status in the portal",
    ],
  },
  {
    id: "basic-education",
    category: "basic-education",
    title: "Junior High & Senior High",
    description:
      "Basic Education enrollment for Junior High School (Grades 7–10) and Senior High School (Grades 11–12) is managed through the SchoolAide portal.",
    items: [
      "Report Card (Form 138)",
      "Good Moral Certificate",
      "PSA Birth Certificate",
      "Additional level-specific requirements as indicated in SchoolAide",
    ],
  },
  {
    id: "college",
    category: "college",
    title: "College Applicants",
    description:
      "College applicants may use the dedicated College portal pathways linked from the official enrollment site.",
    items: [
      "Report Card (Form 138)",
      "Good Moral Certificate",
      "PSA Birth Certificate",
      "Additional college requirements as indicated by Admissions / College portal",
    ],
    note: "Administrator note: publish Form 137 / 2×2 photo / transferee checklists here when officially confirmed for the public website.",
  },
  {
    id: "transferees",
    category: "transferees",
    title: "Transferees",
    description:
      "Transfer applicants should prepare the core documents and follow portal instructions for additional transfer credentials.",
    items: [
      "Core application documents listed above",
      "Transfer credentials as required by the receiving level",
      "Submit and track requirements through the online portal",
    ],
    note: "Exact transfer document lists can vary. Use the enrollment portal or contact Admissions for the checklist that applies to you.",
  },
];

export const admissionSteps = [
  {
    step: "01",
    title: "Explore Your Program",
    description:
      "Review Junior High, Senior High, and College offerings to find the pathway that fits your goals.",
  },
  {
    step: "02",
    title: "Review Requirements",
    description:
      "Prepare your documents — typically including Report Card (Form 138), Good Moral Certificate, and PSA Birth Certificate.",
  },
  {
    step: "03",
    title: "Create Your Portal Account",
    description:
      "Register on the official HCCC Online Enrollment portal with your email and set up your parent or student profile.",
  },
  {
    step: "04",
    title: "Complete the Application",
    description:
      "Fill out the online admission form with student details and the level you are applying for.",
  },
  {
    step: "05",
    title: "Submit Requirements",
    description:
      "Upload scanned copies of required documents directly through the portal.",
  },
  {
    step: "06",
    title: "Receive Confirmation & Enroll",
    description:
      "Receive email confirmation, track your application status online, and complete enrollment steps as instructed.",
  },
] as const;

export const enrollmentCalendar = [
  {
    id: "app-opens",
    title: "Application Period Opens",
    date: "2026-05-11",
    displayDate: "May 11, 2026",
    description: "Online applications for new and transferee students begin.",
    category: "admissions" as const,
  },
  {
    id: "classes-start",
    title: "Opening of Classes",
    date: "2026-06-08",
    displayDate: "June 8, 2026",
    description: "First day of classes for officially enrolled students.",
    category: "academic" as const,
  },
  {
    id: "app-deadline",
    title: "Application Deadline",
    date: "2026-06-30",
    displayDate: "June 30, 2026",
    description: "Last day to submit your admission application and requirements.",
    category: "admissions" as const,
  },
];
