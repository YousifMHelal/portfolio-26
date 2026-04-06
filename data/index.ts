import type {
  AboutData,
  HeroContent,
  PersonalInfo,
  ProjectItem,
  SkillItem,
  TimelineItem,
} from "@/types";

export const hero: HeroContent = {
  name: "Yousif Mamdouh",
  role: "Web Developer",
  bio: "I build clean, responsive interfaces with strong visual rhythm, thoughtful spacing, and smooth interactions. My work focuses on turning ideas into polished frontend experiences that feel fast and intentional.",
  backgroundText: "YOUSIF MAMDOUH",
  signatureImage: "/assets/signature.png",
  portraitImage: "/assets/hero-reference.png",
  footerNote: "Portfolio 2026",
  navLinks: [
    { label: "Home", href: "#home", active: true },
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
  bio: "I'm a passionate web developer with 1-2 years of hands-on experience building modern, interactive web applications. I specialize in React and Next.js, crafting clean, performant, and visually expressive digital experiences. Though early in my professional journey, I've built a diverse range of real-world apps that reflect my obsession with quality and detail.",
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

export const personalInfo: PersonalInfo = {
  name: "",
  role: "",
  location: "",
  email: "",
  summary: "",
};

export const projects: ProjectItem[] = [
  {
    id: "project-1",
    title: "",
    description: "",
    techStack: [],
    githubUrl: "",
    liveUrl: "",
  },
];

export const skills: SkillItem[] = [
  {
    id: "skill-1",
    name: "",
    category: "",
  },
];
