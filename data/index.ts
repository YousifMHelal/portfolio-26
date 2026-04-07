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
  role: "Web Developer",
  bio: "Frontend Developer crafting modern, scalable web applications with React, Next.js, and TypeScript. I turn complex ideas into fast, intuitive, and production-ready products.",
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
  bio: `I’m a Frontend Developer with a strong focus on building modern, scalable, and user-focused web applications using React, Next.js, and TypeScript.

What sets me apart is my ability to work independently and solve complex problems under constraints. During my military service, I built multiple full-stack applications completely offline, relying only on my knowledge and problem-solving skills to deliver real, usable systems.

I enjoy turning ideas into production-ready products, whether it’s a voice-first AI platform like Bookified or a full management system like Edu Nexus. I care deeply about clean architecture, performance, and creating smooth user experiences.

I’m constantly learning and exploring new technologies, especially in AI integrations and modern web architecture, aiming to build tools that are not just functional but impactful.`,
  journeyTitle: "MY JOURNEY",
  stats: [
    { value: "50+", label: "Projects Built" },
    { value: "1-2", label: "Years Experience" },
    { value: "Frontend", label: "Specialist" },
  ],
};

export const timeline: TimelineItem[] = [
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

export const projects: Project[] = [
  {
    id: 1,
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
    size: "large",
    image: "/assets/projects/bookified.png",
  },
  {
    id: 2,
    title: "Edu Nexus",
    description:
      "Comprehensive school management dashboard with role-based access for admins, teachers, students, and parents.",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk Auth",
      "Shadcn UI",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/YousifMHelal/edu-nexus",
    liveUrl: null,
    size: "medium",
    image: "/assets/projects/edu-nexus.png",
  },
  {
    id: 3,
    title: "Trendy",
    description:
      "Full-featured e-commerce platform with product management, Stripe payments, order processing, and email notifications.",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "MongoDB",
      "Stripe",
      "Firebase",
      "Zustand",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/YousifMHelal/trendy",
    liveUrl: null,
    size: "medium",
    image: "/assets/projects/trendy.png",
  },
  {
    id: 4,
    title: "Cash Withdraw",
    description:
      "Full-stack financial operations dashboard with Arabic-first RTL UI for daily treasury tracking and WhatsApp-optimized PDF reporting.",
    techStack: [
      "React 19",
      "Node.js",
      "Express",
      "Prisma",
      "SQLite",
      "Tailwind CSS",
      "jsPDF",
    ],
    githubUrl: "https://github.com/YousifMHelal/cash-withdraw",
    liveUrl: null,
    size: "medium",
    image: "/assets/projects/cash-withdraw.png",
  },
  {
    id: 5,
    title: "Momento",
    description:
      "Dynamic social media platform featuring post creation, likes, saves, user profiles, trending feed, and drag-and-drop file uploads.",
    techStack: [
      "React 18",
      "TypeScript",
      "Appwrite",
      "React Query",
      "Shadcn UI",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/YousifMHelal/momento",
    liveUrl: null,
    size: "medium",
    image: "/assets/projects/momento.png",
  },
  {
    id: 6,
    title: "Postpeak",
    description:
      "Blogging platform with user authentication, post creation, comments, category filtering, and Firebase backend.",
    techStack: [
      "Next.js 13",
      "JavaScript",
      "Prisma",
      "Firebase Auth",
      "NextAuth",
      "React Quill",
    ],
    githubUrl: "https://github.com/YousifMHelal/postpeak",
    liveUrl: null,
    size: "large",
    image: "/assets/projects/postpeak.png",
  },
];

export const skillSlugs = [
  // Languages
  "typescript",
  "javascript",

  // Frontend
  "react",
  "nextdotjs",
  "html5",
  "css3",
  "bootstrap",
  "tailwindcss",
  "reactrouter",

  // Backend
  "nodedotjs",
  "express",

  // Databases
  "mongodb",
  "mysql",
  "prisma",
  "firebase",

  // CMS & Other
  "wordpress",

  // Auth & Payments
  "clerk",
  "stripe",

  // State Management
  // Cloud & Deployment
  "vercel",
  "docker",

  // Tools & Dev
  "git",
  "github",
  "figma",
  "vite",
  "prettier",
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Abdelwahab",
    quote:
      "Yousif is one of the most talented people I've worked with. He delivers work correctly and on time, and if there are any revisions he handles them without hesitation and at no extra cost - delivering exactly what was required.",
    featured: true,
  },
  {
    id: 2,
    name: "Mohamed Ahmed",
    quote:
      "One of the best people I've worked with. He built several apps that fully digitized our paper-based workflow - and all of that during his military service, without internet access.",
    featured: false,
  },
  {
    id: 3,
    name: "Mahmoud Mohamed",
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
