export type NewsCategory =
  | "Announcement"
  | "Admissions"
  | "Academic"
  | "Events"
  | "Student Life"
  | "Community"
  | "Achievement";

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: NewsCategory;
  date: string;
  displayDate: string;
  featured?: boolean;
  imageTone: "forest" | "gold" | "slate" | "rose";
  /** Real campus imagery from official HCCC / RCAPS sources */
  imageSrc: string;
  imageAlt: string;
};

/**
 * Sample public announcements based on verified enrollment calendar facts.
 * Featured images sourced from the published RCAPS HCCC site and local campus assets.
 */
export const newsArticles: NewsArticle[] = [
  {
    slug: "enrollment-open-sy-2026-2027",
    title: "Enrollment Open for S.Y. 2026–2027",
    excerpt:
      "Holy Cross College of Carigara welcomes new and returning Holy Crossians. Online applications are now part of the published enrollment calendar.",
    body: [
      "Holy Cross College of Carigara, Incorporated invites prospective and returning students to prepare for S.Y. 2026–2027.",
      "According to the official online enrollment portal, the application period opens on May 11, 2026 for new and transferee students, with an application deadline of June 30, 2026. Opening of classes is listed as June 8, 2026.",
      "Junior High School, Senior High School, and College programs are listed as open for enrollment. Applicants may create an account, complete the admission form, and upload requirements through the official portal.",
      "For assistance, contact Admissions during office hours or send an inquiry through this website. Always verify the latest schedules on the enrollment portal.",
    ],
    category: "Admissions",
    date: "2026-05-01",
    displayDate: "May 1, 2026",
    featured: true,
    imageTone: "forest",
    imageSrc: "/images/news/campus-bg6.jpg",
    imageAlt: "Holy Cross College of Carigara campus building and courtyard",
  },
  {
    slug: "prepare-your-application-documents",
    title: "Prepare Your Application Documents Early",
    excerpt:
      "Families are encouraged to gather Report Card (Form 138), Good Moral Certificate, and PSA Birth Certificate before applying online.",
    body: [
      "A complete application helps Admissions process your request more smoothly.",
      "The official enrollment portal notes that applicants typically prepare a Report Card (Form 138), Good Moral Certificate, and PSA Birth Certificate. Additional documents may be requested depending on level or student type.",
      "Scan clear copies of your documents so they are ready to upload when you submit your online application.",
      "If you are unsure which checklist applies to you, contact Admissions or use the inquiry form on this website.",
    ],
    category: "Announcement",
    date: "2026-04-15",
    displayDate: "April 15, 2026",
    imageTone: "gold",
    imageSrc: "/images/news/campus-bg5.jpg",
    imageAlt: "Classroom learning space at Holy Cross College of Carigara",
  },
  {
    slug: "welcome-to-the-new-hccc-website",
    title: "Welcome to the Official HCCC Public Website",
    excerpt:
      "This site is your digital front door to Holy Cross College of Carigara — for programs, admissions guidance, news, and contact channels.",
    body: [
      "This public website helps students, parents, alumni, and the Carigara community learn about Holy Cross College of Carigara.",
      "Here you can explore academic programs, review the admissions journey, find FAQs, and reach the school through official contact channels.",
      "Academic records, grades, and enrollment transactions continue to be handled through the school’s existing online enrollment systems — not through this informational website.",
      "We look forward to walking with families as they discover life as Holy Crossians.",
    ],
    category: "Announcement",
    date: "2026-03-20",
    displayDate: "March 20, 2026",
    imageTone: "slate",
    imageSrc: "/images/news/campus-home1.jpg",
    imageAlt: "Students and campus life at Holy Cross College of Carigara",
  },
  {
    slug: "values-formation-at-the-heart-of-hccc",
    title: "Values Formation at the Heart of HCCC",
    excerpt:
      "Guided by Franciscan values and rooted in Catholic traditions, HCCC forms learners for academic excellence and compassionate service.",
    body: [
      "Holy Cross College of Carigara is a learning community guided by Franciscan values and rooted in Catholic traditions.",
      "Its published mission affirms a commitment to academic and socio-cultural excellence — forming Christian leaders, lifelong learners, responsible professionals, creative innovators, and compassionate stewards.",
      "As families explore programs and enrollment, we invite them to encounter not only coursework, but a community dedicated to holistic transformation.",
    ],
    category: "Community",
    date: "2026-02-10",
    displayDate: "February 10, 2026",
    imageTone: "rose",
    imageSrc: "/images/news/campus-bg1.jpg",
    imageAlt: "Holy Cross College of Carigara campus grounds",
  },
];

export function getArticleBySlug(slug: string) {
  return newsArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3) {
  return newsArticles.filter((a) => a.slug !== slug).slice(0, limit);
}
