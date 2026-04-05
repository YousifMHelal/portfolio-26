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
