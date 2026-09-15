export type ProgramLevel = "college" | "senior-high" | "junior-high";

export type Program = {
  slug: string;
  name: string;
  shortName: string;
  level: ProgramLevel;
  levelLabel: string;
  overview: string;
  whatYouLearn: string[];
  careerDirection: string[];
  highlights: string[];
  relatedSlugs: string[];
};

export const programs: Program[] = [
  {
    slug: "bachelor-of-elementary-education",
    name: "Bachelor of Elementary Education",
    shortName: "BEED",
    level: "college",
    levelLabel: "College",
    overview:
      "Prepares future elementary educators with the knowledge, pedagogy, and values formation needed to guide young learners with competence and care.",
    whatYouLearn: [
      "Foundational pedagogy and classroom practice for elementary learners",
      "Curriculum planning, assessment, and learner-centered instruction",
      "Professional ethics and the vocation of teaching",
      "Community engagement and collaborative school culture",
    ],
    careerDirection: [
      "Elementary classroom teacher",
      "Education support and instructional roles",
      "Further studies in education and related fields",
    ],
    highlights: [
      "Aligned with HCCC’s mission of forming Christian leaders and lifelong learners",
      "Grounded in Catholic and Franciscan values",
      "Part of HCCC’s college education offerings",
    ],
    relatedSlugs: [
      "bachelor-of-secondary-education-mathematics",
      "bachelor-of-secondary-education-english",
      "bachelor-of-physical-education",
    ],
  },
  {
    slug: "bachelor-of-secondary-education-mathematics",
    name: "Bachelor of Secondary Education — Mathematics",
    shortName: "BSED-MATH",
    level: "college",
    levelLabel: "College",
    overview:
      "Develops secondary mathematics teachers who can inspire analytical thinking and guide learners toward confidence and excellence in math.",
    whatYouLearn: [
      "Secondary mathematics content knowledge",
      "Effective math pedagogy and assessment strategies",
      "Classroom management and learner support",
      "Professional preparation for the teaching vocation",
    ],
    careerDirection: [
      "Junior / Senior High School mathematics teacher",
      "Tutorial and academic support roles",
      "Graduate studies in education or mathematics education",
    ],
    highlights: [
      "Focused specialization in Mathematics education",
      "Supports HCCC’s commitment to quality instruction and mentoring",
    ],
    relatedSlugs: [
      "bachelor-of-secondary-education-english",
      "bachelor-of-secondary-education-filipino",
      "bachelor-of-elementary-education",
    ],
  },
  {
    slug: "bachelor-of-secondary-education-filipino",
    name: "Bachelor of Secondary Education — Filipino",
    shortName: "BSED-FILIPINO",
    level: "college",
    levelLabel: "College",
    overview:
      "Forms secondary Filipino language educators who nurture literacy, cultural appreciation, and meaningful communication among learners.",
    whatYouLearn: [
      "Filipino language and literature for secondary education",
      "Language teaching methods and assessment",
      "Cultural understanding and values formation",
      "Professional teaching competencies",
    ],
    careerDirection: [
      "Secondary Filipino teacher",
      "Language and literacy support roles",
      "Further studies in education or language",
    ],
    highlights: [
      "Specialization in Filipino education",
      "Connected to HCCC’s socio-cultural excellence goals",
    ],
    relatedSlugs: [
      "bachelor-of-secondary-education-english",
      "bachelor-of-secondary-education-mathematics",
      "bachelor-of-elementary-education",
    ],
  },
  {
    slug: "bachelor-of-secondary-education-english",
    name: "Bachelor of Secondary Education — English",
    shortName: "BSED-ENGLISH",
    level: "college",
    levelLabel: "College",
    overview:
      "Equips future English teachers with the skills to develop communication, critical reading, and confident expression among secondary learners.",
    whatYouLearn: [
      "English language and literature for secondary classrooms",
      "Communicative teaching approaches",
      "Reading, writing, and speaking instruction",
      "Professional ethics in education",
    ],
    careerDirection: [
      "Secondary English teacher",
      "Communication and literacy-related roles",
      "Graduate studies in education or English",
    ],
    highlights: [
      "Specialization in English education",
      "Prepares graduates for service in Philippine secondary schools",
    ],
    relatedSlugs: [
      "bachelor-of-secondary-education-filipino",
      "bachelor-of-secondary-education-mathematics",
      "bachelor-of-elementary-education",
    ],
  },
  {
    slug: "bachelor-of-physical-education",
    name: "Bachelor of Physical Education",
    shortName: "BPED",
    level: "college",
    levelLabel: "College",
    overview:
      "Prepares physical education professionals who promote wellness, movement literacy, discipline, and teamwork among learners.",
    whatYouLearn: [
      "Physical education pedagogy and program design",
      "Movement, fitness, and wellness foundations",
      "Coaching, organization, and student engagement",
      "Values formation through sports and physical activity",
    ],
    careerDirection: [
      "Physical education teacher",
      "Sports and wellness program roles",
      "Further studies in PE, sports science, or education",
    ],
    highlights: [
      "Supports holistic formation of mind and body",
      "Aligned with HCCC’s emphasis on well-rounded student development",
    ],
    relatedSlugs: [
      "bachelor-of-elementary-education",
      "bachelor-of-secondary-education-mathematics",
    ],
  },
  {
    slug: "bsba-marketing-management",
    name: "Bachelor of Science in Business Administration — Marketing Management",
    shortName: "BSBA-MM",
    level: "college",
    levelLabel: "College",
    overview:
      "Develops business professionals with marketing insight, ethical judgment, and practical skills for organizations and entrepreneurial ventures.",
    whatYouLearn: [
      "Marketing principles and brand strategy foundations",
      "Business communication and market understanding",
      "Ethical decision-making in business contexts",
      "Professional readiness for commerce and enterprise",
    ],
    careerDirection: [
      "Marketing and sales-related roles",
      "Business operations support",
      "Entrepreneurship and further business studies",
    ],
    highlights: [
      "Part of HCCC’s business administration offerings",
      "Forms responsible professionals and creative innovators",
    ],
    relatedSlugs: [
      "bsba-financial-management",
      "bs-computer-science",
    ],
  },
  {
    slug: "bsba-financial-management",
    name: "Bachelor of Science in Business Administration — Financial Management",
    shortName: "BSBA-FM",
    level: "college",
    levelLabel: "College",
    overview:
      "Prepares students for financial decision-making, stewardship of resources, and responsible business practice.",
    whatYouLearn: [
      "Foundations of financial management",
      "Business analysis and planning basics",
      "Ethical stewardship in financial roles",
      "Professional competencies for business environments",
    ],
    careerDirection: [
      "Finance and accounting-support pathways",
      "Business administration roles",
      "Graduate studies in business or finance",
    ],
    highlights: [
      "Specialization in Financial Management",
      "Supports HCCC’s goal of forming responsible professionals",
    ],
    relatedSlugs: [
      "bsba-marketing-management",
      "bs-computer-science",
    ],
  },
  {
    slug: "bs-computer-science",
    name: "Bachelor of Science in Computer Science",
    shortName: "BSCS",
    level: "college",
    levelLabel: "College",
    overview:
      "Builds computing foundations for students who want to create technology solutions, think analytically, and contribute to a digital future with integrity.",
    whatYouLearn: [
      "Core computer science concepts and problem-solving",
      "Programming and systems foundations",
      "Analytical and collaborative project skills",
      "Ethical technology use and professional readiness",
    ],
    careerDirection: [
      "Software and computing-related entry pathways",
      "Technology support and development roles",
      "Further studies in computing and IT",
    ],
    highlights: [
      "Supports HCCC’s commitment to technological innovation in learning",
      "Forms creative innovators grounded in values",
    ],
    relatedSlugs: [
      "bsba-marketing-management",
      "bsba-financial-management",
    ],
  },
];

export const academicLevels = [
  {
    slug: "junior-high",
    title: "Junior High School",
    subtitle: "Grades 7 through 10",
    description:
      "A formative stage focused on strong academic foundations, values formation, and readiness for Senior High School — offered as part of HCCC’s Basic Education.",
    href: "/academics/junior-high",
    status: "Open for enrollment",
  },
  {
    slug: "senior-high",
    title: "Senior High School",
    subtitle: "Grades 11 & 12 — Academic & TVL Tracks",
    description:
      "Senior High pathways that help learners prepare for college, employment, and lifelong learning through Academic and TVL track offerings.",
    href: "/academics/senior-high",
    status: "Open for enrollment",
  },
  {
    slug: "college",
    title: "College",
    subtitle: "Undergraduate degree programs",
    description:
      "College programs in Education, Physical Education, Business Administration, and Computer Science — forming professionals guided by faith and service.",
    href: "/academics/college",
    status: "Open for enrollment",
  },
] as const;

export function getProgramBySlug(slug: string) {
  return programs.find((p) => p.slug === slug);
}

export function getCollegePrograms() {
  return programs.filter((p) => p.level === "college");
}
