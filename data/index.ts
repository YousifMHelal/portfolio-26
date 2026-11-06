import type {
  AboutData,
  ContactData,
  HeroContent,
  Project,
  Testimonial,
  TimelineItem
} from "@/types";

export const hero: HeroContent = {
  name: "Yousif Mamdouh",
  role: "Full Stack Developer",
  bio: "Full Stack Developer at ElectroPi, building AI-powered web platforms end to end with React, Next.js, Node.js, and TypeScript. I turn complex ideas into fast, intuitive, and production-ready products.",
  backgroundText: "YOUSIF MAMDOUH",
  signatureImage: "/assets/signature.png",
  portraitImage: "/assets/hero-reference.png",
  footerNote: "Portfolio 2026",
  navLinks: [
    { label: "Home", href: "#hero", active: true },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/", monogram: "GH" },
    { label: "LinkedIn", href: "https://linkedin.com/", monogram: "IN" },
  ],
  ctas: [
    { label: "View Projects", href: "#projects", variant: "solid" },
    { label: "Contact Me", href: "#contact", variant: "outline" },
  ],
};

export const about: AboutData = {
  label: "ABOUT ME",
  heading: "Who is Yousif?",
  bio: `I’m a Full Stack Developer at ElectroPi, an enterprise AI engineering company, where I build the web platforms that put AI products in front of real users, from React and Next.js frontends to Node.js and Express APIs on PostgreSQL.

Since June 2026 I’ve shipped production systems across healthcare, HR tech, real estate, and corporate training: a clinical decision-support dashboard for physicians, a bilingual AI sales CRM, a two-sided hiring marketplace, and an AI training portal that runs coaching sessions inside Microsoft Teams.

Before that, during my military service, I built multiple full-stack applications completely offline, relying only on my knowledge and problem-solving skills. That taught me to work independently and deliver under real constraints.

I care deeply about clean architecture, type safety, testing, and smooth user experiences, and I’m always exploring new ways to integrate AI into products that are not just functional but impactful.`,
  journeyTitle: "MY JOURNEY",
  stats: [
    { value: "50+", label: "Projects Built" },
    { value: "2+", label: "Years Experience" },
    { value: "Full Stack", label: "Developer" },
  ],
};

export const timeline: TimelineItem[] = [
  {
    year: "06/2026 - Present",
    title: "Full Stack Developer",
    subtitle: "ElectroPi",
    description:
      "Building AI-powered enterprise platforms end to end: MODRB (AI training portal in Microsoft Teams), Medswarm (clinical decision-support dashboard + Express API), Land & Lead (bilingual real-estate AI sales CRM), and Alcamp (hiring marketplace). Next.js, React, Node.js, Prisma, PostgreSQL, with full Arabic/English RTL support, automated tests, and CI/CD.",
  },
  {
    year: "2025 - 2027",
    title: "Postgraduate Diploma in Computer Science",
    subtitle: "Cairo University",
    description:
      "Currently pursuing a postgraduate diploma in Computer Science, deepening my knowledge in software development, algorithms, and advanced system design while continuing to build real-world applications.",
  },
  {
    year: "2025 - 03/2026",
    title: "Military Service – Developer Role",
    subtitle: "Military Service",
    description:
      "During my military service, I developed full web applications to improve and automate internal processes within the unit. Working without internet access, I relied entirely on my knowledge and problem-solving skills, which significantly enhanced my ability to think critically and resolve complex technical challenges.",
  },
  {
    year: "2020 - 2024",
    title: "Higher Institute for Specific Studies",
    subtitle: "Management Information Systems (MIS)",
    description:
      "Earned a degree in MIS, combining technical and business knowledge. Built a strong foundation in information systems, data management, and how technology supports business operations.",
  },
  {
    year: "2020 - Present",
    title: "Continuous Learning & Internships",
    subtitle: "Self-Development",
    description:
      "Completed numerous online courses and participated in internships, continuously improving skills in frontend development, problem-solving, and modern technologies through hands-on projects and real-world practice.",
  },
];

const ELECTROPI_LABEL = "ElectroPi · Client Work";

export const projects: Project[] = [
  {
    id: 1,
    title: "MODRB",
    label: ELECTROPI_LABEL,
    description:
      "Enterprise AI training platform where an AI trainer runs live coaching sessions inside Microsoft Teams and grades each one against learning outcomes. Built the portal (training-plan and track wizards, scheduling, reports, admin) and its Express API with Microsoft Entra sign-in.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Zustand",
      "Zod",
      "Express 5",
      "Prisma",
      "PostgreSQL",
      "Azure MSAL",
      "pg-boss",
      "Playwright",
    ],
    githubUrl: null,
    liveUrl: null,
    size: "large",
    image: "/assets/projects/modrb.png",
  },
  {
    id: 2,
    title: "Medswarm",
    label: ELECTROPI_LABEL,
    description:
      "Clinical decision-support dashboard over a hospital HIS: physicians review AI-generated suggestions and approve or reject each one. Built the React dashboard, the Express REST API (auth, audit, contract mapping to the AI service), and a mock HIS for integration testing.",
    techStack: [
      "React 19",
      "Vite",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Express 5",
      "Prisma",
      "PostgreSQL",
      "LiveKit",
      "Vitest",
    ],
    githubUrl: null,
    liveUrl: "https://demo.testdevelopment.top:5100/",
    size: "medium",
    image: "/assets/projects/medswarm.png",
    imagePosition: "left top",
  },
  {
    id: 3,
    title: "Alcamp",
    label: ELECTROPI_LABEL,
    description:
      "Two-sided hiring marketplace connecting companies with project-trained talent. Candidate, company, and admin areas with JWT auth per role, applicant pipeline, interview and offer lifecycle, assessments, and real-time SignalR notifications.",
    techStack: [
      "React 19",
      "Vite",
      "TypeScript",
      "TanStack Query",
      "React Router",
      "SignalR",
      "TipTap",
      "Tailwind CSS",
    ],
    githubUrl: null,
    liveUrl: null,
    size: "medium",
    image: "/assets/projects/alcamp.png",
  },
  {
    id: 4,
    title: "Land & Lead",
    label: ELECTROPI_LABEL,
    description:
      "Bilingual (AR/EN, full RTL) CRM for an AI sales agent that qualifies Saudi real-estate leads over WhatsApp: lead pipeline, conversation viewer, property knowledge base, billing, and analytics, fed by an HMAC-signed webhook.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "next-intl",
      "TanStack Table",
      "Recharts",
      "LiveKit",
    ],
    githubUrl: null,
    liveUrl: "https://demo.testdevelopment.top:6101/en",
    size: "medium",
    image: "/assets/projects/land-and-lead.png",
  },
  {
    id: 5,
    title: "Retail ERP",
    description:
      "Arabic-first (RTL) retail shop ERP: sales and purchase invoices, inventory with low-stock alerts and stock-taking, customer and supplier ledgers, financial reports, and printable PDF statements.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Zustand",
      "React PDF",
      "Playwright",
    ],
    githubUrl: "https://github.com/YousifMHelal/Erp",
    liveUrl: "https://erp-amber-nu.vercel.app",
    size: "medium",
    image: "/assets/projects/erp.png",
    imagePosition: "right center",
  },
  {
    id: 6,
    title: "Bookified",
    description:
      "AI-powered voice companion platform that transforms PDFs into interactive conversational experiences with real-time voice AI.",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "MongoDB",
      "Vapi",
      "ElevenLabs",
      "Google Gemini",
      "Clerk Auth",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/YousifMHelal/bookified",
    liveUrl: "https://bookified-bay.vercel.app/",
    size: "medium",
    image: "/assets/projects/bookified.png",
  },
  {
    id: 7,
    title: "Teba",
    description:
      "Production-ready e-commerce platform with full shopping experience — product catalog, cart, checkout, admin dashboard, order management, and real-time Algolia search. Supports Arabic RTL UI and multiple Egyptian payment methods.",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth.js",
      "Algolia",
      "Cloudinary",
      "Zustand",
      "Tailwind CSS",
      "Recharts",
      "Vercel",
    ],
    githubUrl: "https://github.com/YousifMHelal/teba-ecommerce",
    liveUrl: "https://teba-ecommerce.vercel.app",
    size: "medium",
    image: "/assets/projects/teba.png",
  },
  {
    id: 8,
    title: "Cash Management",
    label: "Freelance · Client Work",
    description:
      "Arabic-first (RTL) installable PWA for a cash-desk business: daily opening balances across Cash, Vodafone Cash, InstaPay, and Fawry, guarded withdrawals, deposits, transfers, and expenses, shift handover, customer debt ledgers, and branded PDF reports shared to WhatsApp.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma 7",
      "PostgreSQL",
      "NextAuth",
      "React PDF",
      "PWA",
      "Vitest",
      "Playwright",
    ],
    githubUrl: null,
    liveUrl: null,
    size: "medium",
    image: "/assets/projects/cash-withdraw.png",
  },
];

export const skillSlugs = [
  // Languages
  "typescript",
  "javascript",

  // Frontend
  "react",
  "nextdotjs",
  "vite",
  "html5",
  "css3",
  "tailwindcss",
  "shadcnui",
  "radixui",
  "bootstrap",
  "reactrouter",
  "reactquery",
  "reacthookform",

  // Backend
  "nodedotjs",
  "express",
  "swagger",

  // Databases
  "postgresql",
  "prisma",
  "mongodb",
  "mysql",
  "sqlite",
  "firebase",

  // Validation & Testing
  "zod",
  "vitest",

  // AI & Realtime
  "googlegemini",
  "elevenlabs",

  // Search, Auth & Payments
  "algolia",
  "clerk",
  "stripe",

  // CMS & Other
  "wordpress",

  // Cloud & Deployment
  "vercel",
  "docker",

  // Tools & Dev
  "git",
  "github",
  "figma",
  "prettier",
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Abdelrahman Ali",
    quote:
      "Yousif is one of the most talented people I've worked with. He delivers work correctly and on time, and if there are any revisions he handles them without hesitation and at no extra cost - delivering exactly what was required.",
    featured: true,
  },
  {
    id: 2,
    name: "Mahmoud Saeed",
    quote:
      "One of the best people I've worked with. He built several apps that fully digitized our paper-based workflow - and all of that during his military service, without internet access.",
    featured: false,
  },
  {
    id: 3,
    name: "Ibrahim Mohamed",
    quote:
      "I highly recommend working with him. One of the most skilled people I've worked with, delivering exceptional results in record time.",
    featured: false,
  },
];

export const contactData: ContactData = {
  email: "contact@yousifmamdouh.tech",
  github: "https://github.com/YousifMHelal",
  githubUsername: "@YousifMHelal",
  linkedin: "https://www.linkedin.com/in/yousifmhelal/",
  linkedinName: "@YousifMHelal",
  whatsapp: "https://wa.me/+201150509675",
  facebook: "https://www.facebook.com/YousifM.Helal",
  cvPath: "/assets/Yousif%20Mamdouh.pdf",
};
