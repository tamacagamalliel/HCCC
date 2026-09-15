export type FaqCategory =
  | "Admissions"
  | "Enrollment"
  | "Programs"
  | "Requirements"
  | "Basic Education"
  | "College"
  | "General";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
};

export const faqs: FaqItem[] = [
  {
    id: "programs-offered",
    question: "What programs does HCCC offer?",
    answer:
      "HCCC offers Junior High School (Grades 7–10), Senior High School (Grades 11–12 — Academic & TVL tracks), and College programs including Bachelor of Elementary Education; Bachelor of Secondary Education in Mathematics, Filipino, and English; Bachelor of Physical Education; BSBA Marketing Management; BSBA Financial Management; and Bachelor of Science in Computer Science.",
    category: "Programs",
  },
  {
    id: "how-to-apply",
    question: "How do I apply?",
    answer:
      "Applications are processed through the official HCCC Online Enrollment portal. Create an account, complete the admission form, upload required documents, and track your application status online.",
    category: "Admissions",
  },
  {
    id: "documents-required",
    question: "What documents are required?",
    answer:
      "The enrollment portal lists Report Card (Form 138), Good Moral Certificate, and PSA Birth Certificate among the documents needed to apply. Additional requirements may apply depending on your level or student type — confirm in the portal or with Admissions.",
    category: "Requirements",
  },
  {
    id: "where-located",
    question: "Where is HCCC located?",
    answer:
      "Holy Cross College of Carigara is located at Rebolledo St., Ponong, 6529 Carigara, Leyte, Philippines.",
    category: "General",
  },
  {
    id: "contact-admissions",
    question: "How can I contact Admissions?",
    answer:
      "Reach the school at (053) 331-2601, mobile 0921 654 9052, or email holycrosscollege_carigara@yahoo.com. Office hours are Monday–Friday, 8:00 AM – 5:00 PM. You may also use the website inquiry form.",
    category: "Admissions",
  },
  {
    id: "online-enrollment",
    question: "Where can I access online enrollment?",
    answer:
      "Use the official HCCC Online Enrollment portal at schoolaide.holycrosscollege.edu.ph. This public website does not replace the enrollment system — it helps you prepare and then directs you to the portal.",
    category: "Enrollment",
  },
  {
    id: "office-hours",
    question: "What are the school’s office hours?",
    answer: "Monday – Friday, 8:00 AM – 5:00 PM.",
    category: "General",
  },
  {
    id: "track-application",
    question: "Can I track the status of my application?",
    answer:
      "Yes. Log in to SchoolAide, go to Enrollment, and use View My Application to check your application status in real time.",
    category: "Enrollment",
  },
  {
    id: "jhs-shs",
    question: "Does HCCC offer Junior High and Senior High?",
    answer:
      "Yes. Junior High School (Grades 7–10) and Senior High School (Grades 11–12, Academic & TVL tracks) are listed as open for enrollment through the official portal.",
    category: "Basic Education",
  },
  {
    id: "college-programs",
    question: "What college degrees are available?",
    answer:
      "College offerings include BEED, BSED Mathematics, BSED Filipino, BSED English, BPED, BSBA Marketing Management, BSBA Financial Management, and BS Computer Science.",
    category: "College",
  },
  {
    id: "peac-esc",
    question: "Is HCCC a PEAC-certified school?",
    answer:
      "According to publicly shared institutional information, HCCCI is a government-recognized school and a PEAC-certified institution that offers the ESC subsidy to help make quality private education more accessible. For current subsidy eligibility details, contact Admissions.",
    category: "General",
  },
  {
    id: "sy-calendar",
    question: "When does enrollment open for S.Y. 2026–2027?",
    answer:
      "For S.Y. 2026–2027, the published enrollment calendar indicates applications open May 11, 2026, with a deadline of June 30, 2026. Opening of classes is listed as June 8, 2026. Always verify the latest dates on the enrollment portal.",
    category: "Enrollment",
  },
];

export const faqCategories: FaqCategory[] = [
  "Admissions",
  "Enrollment",
  "Programs",
  "Requirements",
  "Basic Education",
  "College",
  "General",
];
