export type Lang = 'both' | 'en' | 'bn';
export type Level = 'Basic' | 'Intermediate' | 'Advanced';

export interface NavItem {
  id: string;
  icon: string;
  en: string;
  bn: string;
}

export interface NavGroup {
  cat: string;
  items: NavItem[];
}

export interface TopicSection {
  level: Level;
  titleEn: string;
  titleBn: string;
  contentEn: string;
  contentBn: string;
  pointsEn?: string[];
  pointsBn?: string[];
  code?: string;
  language?: string; // e.g., 'javascript', 'html', 'css'
}

export interface TopicDetail {
  id: string;
  titleEn: string;
  titleBn: string;
  icon: string;
  descriptionEn: string;
  descriptionBn: string;
  sections: TopicSection[];
}

export interface InterviewQuestion {
  q: string;
  a: string;
}

export interface PageProps {
  lang: Lang;
}
