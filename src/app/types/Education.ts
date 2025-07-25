export interface EducationData {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  skills: string[];
}

export interface EducationItemProps {
  index: number;
  isVisible: boolean;
}

export interface TagProps {
  index: number;
}
