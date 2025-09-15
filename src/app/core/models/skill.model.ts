export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'mobile';
  languages: string[];
  frameworks: string[];
  icon: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  cvUrl: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  experience: string;
  description: string;
  image: string;
  quote: string;
}
