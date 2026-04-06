import type {
  HeroContent,
  PersonalInfo,
  ProjectItem,
  SkillItem,
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
