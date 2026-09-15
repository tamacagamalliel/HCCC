export type HistoryMilestone = {
  year: string;
  title: string;
  description: string;
  verified: boolean;
};

/**
 * History summarized from the published HCCC narrative on RCAPS:
 * https://rcapschools.org/hccc/about/history/
 */
export const historyIntro = {
  title: "A Heritage of Faith, Learning, and Community",
  lead:
    "From Holy Cross Academy in 1945 to today’s Holy Cross College of Carigara — a diocesan educational community formed through faith, perseverance, and service to Carigara, Leyte.",
};

export const historyMilestones: HistoryMilestone[] = [
  {
    year: "1945",
    title: "Holy Cross Academy is founded",
    description:
      "On July 2, 1945, Holy Cross Academy opened in Carigara after Catholic parishioners and community leaders worked with the Diocese of Palo to establish a Catholic high school in the post-war years. Early formation was strengthened through the service of Benedictine Sisters (OSB).",
    verified: true,
  },
  {
    year: "1949–1951",
    title: "Early expansion of learning",
    description:
      "Kindergarten classes and normal courses were introduced as the academy grew. Graduates and programs began serving a wider community beyond the high school years.",
    verified: true,
  },
  {
    year: "1972",
    title: "Fire and rebuilding",
    description:
      "On February 17, 1972, Holy Cross Academy was destroyed by fire. Fr. Filomeno Bactol, an alumnus, led rebuilding efforts with alumni, diocesan support, and community partners — restoring the school’s mission from the ruins.",
    verified: true,
  },
  {
    year: "1975–1984",
    title: "Religious Sisters of Mercy and return of diocesan leadership",
    description:
      "The Religious Sisters of Mercy (RSM) administered the academy for a period of development and facility improvements. Diocesan leadership later invited the Sisters of St. Francis of Perpetual Adoration (OSF) of Baybay, Leyte to continue the school’s growth.",
    verified: true,
  },
  {
    year: "1995",
    title: "Holy Cross College of Carigara",
    description:
      "Holy Cross Academy was named Holy Cross College of Carigara as tertiary programs were institutionalized — expanding the school’s mission into college education for the community.",
    verified: true,
  },
  {
    year: "2001–2004",
    title: "College programs recognized",
    description:
      "College offerings grew to include education and business pathways, with published government recognition references for programs such as Elementary and Secondary Education and Business Management, and later Computer Science.",
    verified: true,
  },
  {
    year: "Today",
    title: "A diocesan community looking forward",
    description:
      "HCCC continues as a diocesan educational community under the Palo Archdiocese — offering Junior High, Senior High, and College pathways while remaining guided by Franciscan values and Catholic traditions.",
    verified: true,
  },
];

export const whoWeAre = {
  ownership:
    "HCCC is a non-stock, non-profit corporation owned and managed by the Palo Archdiocese, with the Archbishop as corporation sole.",
  franciscanService:
    "For decades, the Sisters of St. Francis of Perpetual Adoration (OSF) of Baybay, Leyte have served and administered the school’s operations and formation — helping expand infrastructure, support learners, and strengthen access to Catholic education in Carigara and neighboring communities.",
  access:
    "The institution has long sought to serve families seeking quality education grounded in faith, including pathways that help less fortunate learners pursue studies and grants.",
};

export const sealMeaning = {
  title: "Patron and HCCC Seal",
  chiRho:
    "The seal recalls the emblem associated with Emperor Constantine — the Chi-Rho sign of Christ — and the words IN HOC SIGNO VINCES, “By this sign you shall conquer.”",
  cross:
    "The radiating cross symbolizes the graces shared by Jesus, the divine and loving teacher of mankind.",
  rays:
    "The four rays of the cross are linked to four core values for success: Integrity, Passion, Persistence, and Right Action.",
};

/** Core values drawn from the published HCCC seal explanation on RCAPS */
export const sealCoreValues = [
  {
    title: "Integrity",
    description:
      "Living with honesty and principle-based decisions in learning, relationships, and service.",
  },
  {
    title: "Passion",
    description:
      "Pursuing knowledge and vocation with wholehearted commitment and love for learning.",
  },
  {
    title: "Persistence",
    description:
      "Persevering through challenges — as HCCC’s own history of rebuilding and growth reminds us.",
  },
  {
    title: "Right Action",
    description:
      "Choosing what is just and good, applying knowledge with the right attitude and responsibility.",
  },
] as const;

export const leadershipPlaceholders = [
  {
    role: "School Head / Director",
    name: "To be confirmed by HCCC",
    note: "RCAPS history notes that in 2016 Archbishop John Du appointed Fr. Ric Marpa to head and oversee HCC governance. Confirm current officials and photos before publishing as present leadership.",
  },
  {
    role: "Principal / Academic Head",
    name: "To be provided by HCCC",
    note: "Administrator placeholder — replace with official name and photo.",
  },
  {
    role: "Basic Education Leadership",
    name: "To be provided by HCCC",
    note: "Administrator placeholder — replace when confirmed.",
  },
  {
    role: "College Leadership",
    name: "To be provided by HCCC",
    note: "Administrator placeholder — replace when confirmed.",
  },
] as const;

export type Facility = {
  id: string;
  name: string;
  category: string;
  description: string;
  status: "verified-generic" | "needs-confirmation";
};

/**
 * Facility list kept intentionally conservative.
 * Do not invent specific labs/buildings without confirmation.
 */
export const facilities: Facility[] = [
  {
    id: "learning-spaces",
    name: "Learning Spaces & Classrooms",
    category: "Academics",
    description:
      "Instructional spaces that support Basic Education and College learning. Administrator: add photos and capacity details.",
    status: "needs-confirmation",
  },
  {
    id: "admin-offices",
    name: "Administrative Offices",
    category: "Administration",
    description:
      "Offices supporting admissions, records, and school services for students and families.",
    status: "verified-generic",
  },
  {
    id: "student-spaces",
    name: "Student & Community Spaces",
    category: "Campus Life",
    description:
      "Areas where students gather for formation, activities, and community life. Administrator: replace with named facilities.",
    status: "needs-confirmation",
  },
  {
    id: "faith-spaces",
    name: "Faith & Values Formation Spaces",
    category: "Formation",
    description:
      "As a Catholic diocesan school, faith formation is part of community life. Administrator: confirm chapel/religious space details and imagery.",
    status: "needs-confirmation",
  },
];

export type GalleryItem = {
  id: string;
  title: string;
  category: "Campus" | "Students" | "Events" | "Academics" | "Community" | "Graduation" | "Activities";
  tone: "forest" | "gold" | "slate" | "mist" | "rose" | "deep";
  caption: string;
  /** Public path under /images/gallery/ or /images/ when available */
  imageSrc?: string;
};

/**
 * Gallery slots ready for official photography.
 * Place files in public/images/gallery/ using the filenames below.
 * Suggested sources (with school permission):
 * https://www.facebook.com/holycrosscollegeofcarigaraofficial
 * https://www.facebook.com/holycrosscollegedepartment/
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Campus Facade",
    category: "Campus",
    tone: "forest",
    caption: "Holy Cross College of Carigara campus building.",
    imageSrc: "/images/background.jpg",
  },
  {
    id: "g2",
    title: "Campus Courtyard",
    category: "Campus",
    tone: "gold",
    caption: "Campus building and courtyard — from the official HCCC RCAPS site.",
    imageSrc: "/images/gallery/campus-02.jpg",
  },
  {
    id: "g3",
    title: "Learning Spaces",
    category: "Academics",
    tone: "mist",
    caption: "Classroom learning environment at HCCC.",
    imageSrc: "/images/gallery/academics-01.jpg",
  },
  {
    id: "g4",
    title: "Student Life",
    category: "Students",
    tone: "slate",
    caption: "Students and campus life at Holy Cross College of Carigara — from the official RCAPS site.",
    imageSrc: "/images/gallery/students-01.jpg",
  },
  {
    id: "g5",
    title: "School Events",
    category: "Events",
    tone: "rose",
    caption: "Campus grounds — from the official HCCC RCAPS site.",
    imageSrc: "/images/gallery/campus-03.jpg",
  },
  {
    id: "g6",
    title: "Community & Outreach",
    category: "Community",
    tone: "deep",
    caption: "Learning spaces that support community and formation.",
    imageSrc: "/images/gallery/community-01.jpg",
  },
  {
    id: "g7",
    title: "Activities & Formation",
    category: "Activities",
    tone: "gold",
    caption: "Campus environment for student life and formation.",
    imageSrc: "/images/gallery/activities-01.jpg",
  },
  {
    id: "g8",
    title: "Graduation Moments",
    category: "Graduation",
    tone: "forest",
    caption: "Student and campus life at Holy Cross College of Carigara.",
    imageSrc: "/images/gallery/graduation-01.jpg",
  },
];

export const campusLifeSections = [
  {
    title: "Student Activities",
    description:
      "Opportunities for involvement beyond the classroom — from academic interests to community celebration. Administrator: list official clubs and annual activities.",
  },
  {
    title: "Organizations & Clubs",
    description:
      "Student organizations help Holy Crossians lead, collaborate, and serve. Administrator: publish the current roster of recognized organizations.",
  },
  {
    title: "Faith & Values Formation",
    description:
      "Guided by Franciscan values and Catholic traditions, formation is woven into school life and learning.",
  },
  {
    title: "Community & Outreach",
    description:
      "HCCC’s mission emphasizes compassionate stewardship and community partnership in Carigara and beyond.",
  },
  {
    title: "Sports & Wellness",
    description:
      "Physical education and wellness pathways support holistic growth. Administrator: add varsity/intramural details when available.",
  },
  {
    title: "Cultural Life",
    description:
      "Socio-cultural excellence is part of the school’s published mission. Administrator: feature official cultural events and performances.",
  },
] as const;
