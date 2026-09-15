/**
 * Central site configuration — CMS-ready.
 * Replace values here (or via a future CMS) without touching UI components.
 */

export const siteConfig = {
  name: "Holy Cross College of Carigara",
  legalName: "Holy Cross College of Carigara, Incorporated",
  shortName: "HCCC",
  /** Traditional Franciscan greeting used by the school */
  greeting: "Peace and All Good To You",
  /** Homepage hero display line — brand remains primary via seal/name */
  heroHeadline: "Where Knowledge Becomes Character.",
  tagline: "Shaping Minds. Forming Character. Serving Community.",
  description:
    "A diocesan educational community in Carigara, Leyte dedicated to academic growth, character formation, and meaningful service — guided by Franciscan values and rooted in Catholic traditions.",
  location: {
    street: "Rebolledo St., Ponong",
    city: "Carigara",
    province: "Leyte",
    postalCode: "6529",
    country: "Philippines",
    full: "Rebolledo St., Ponong, 6529 Carigara, Leyte, Philippines",
  },
  contact: {
    phone: "(053) 331-2601",
    phoneTel: "+63533312601",
    mobile: "0921 654 9052",
    mobileTel: "+639216549052",
    /** Alternate listed on RCAPS school page */
    phoneAlt: "(053) 331-2099",
    email: "holycrosscollege_carigara@yahoo.com",
    emailAlt: "contacthccc@rcapschools.org",
    officeHours: "Monday – Friday, 8:00 AM – 5:00 PM",
  },
  social: {
    facebook: "https://www.facebook.com/holycrosscollegeofcarigaraofficial",
    facebookCollege: "https://www.facebook.com/holycrosscollegedepartment/",
  },
  enrollment: {
    url: "https://schoolaide.holycrosscollege.edu.ph/",
    label: "Proceed to Online Enrollment",
    portalName: "SchoolAide / HCCC Online Enrollment",
  },
  academicYear: "S.Y. 2026–2027",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hccc-carigara.pages.dev",
  locale: "en-PH",
} as const;

export const vision =
  "To be an eminent diocesan educational community committed to promote holistic transformation and global competence through integrated, community-based and ethical learning.";

export const mission =
  "Guided by Franciscan values and rooted in Catholic traditions, HCCC is a learning community committed to academic and socio-cultural excellence and produce Christian leaders, life-long learners, responsible professionals, creative innovators and compassionate stewards.";

export const goals = [
  "Recruit and retain competent faculty, academic and service-oriented staff and student population.",
  "Provide scholarship opportunities and research and development productivity.",
  "Expand infrastructure and support system including technological innovation for research, teaching, service and community partnership.",
  "Preserve a climate of harmony and human dignity.",
  "Model quality instruction and student mentoring.",
] as const;

/** Four core values from the published HCCC seal explanation (RCAPS) */
export const coreValues = [
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
      "Persevering through challenges — applying knowledge with determination and hope.",
  },
  {
    title: "Right Action",
    description:
      "Choosing what is just and good, with the right attitude and responsible decisions.",
  },
] as const;

export const identityPillars = [
  {
    title: "Guided by Franciscan values",
    description:
      "A learning community shaped by peace, simplicity, and service.",
  },
  {
    title: "Rooted in Catholic traditions",
    description:
      "Faith formation that nurtures conscience, compassion, and vocation.",
  },
] as const;

export const whyHccc = [
  {
    title: "Values Formation",
    description:
      "Integrity, Passion, Persistence, and Right Action — core values linked to the HCCC seal and daily formation.",
  },
  {
    title: "Guidance & Mentoring",
    description:
      "Quality instruction and student mentoring are part of the school’s published goals — walking with learners as they grow.",
  },
  {
    title: "Community Belonging",
    description:
      "A diocesan learning community connected to Carigara, Leyte — where students, families, educators, and alumni grow together.",
  },
  {
    title: "Accessible Quality Education",
    description:
      "A government-recognized, PEAC-certified institution offering pathways such as the ESC subsidy to help families access quality private education.",
  },
  {
    title: "Future-Ready Pathways",
    description:
      "Junior High, Senior High, and College programs that prepare learners for higher education, careers, and lifelong service.",
  },
] as const;
