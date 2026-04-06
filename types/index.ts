export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  summary: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
}

export interface HeroNavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeroSocialLink {
  label: string;
  href: string;
  monogram: string;
}

export interface HeroCTA {
  label: string;
  href: string;
  variant: "solid" | "outline";
}

export interface HeroContent {
  name: string;
  role: string;
  bio: string;
  backgroundText: string;
  signatureImage: string;
  portraitImage: string;
  footerNote: string;
  navLinks: HeroNavLink[];
  socialLinks: HeroSocialLink[];
  ctas: HeroCTA[];
}

export interface AboutStatItem {
  value: string;
  label: string;
}

export interface AboutData {
  label: string;
  heading: string;
  bio: string;
  journeyTitle: string;
  stats: AboutStatItem[];
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}
