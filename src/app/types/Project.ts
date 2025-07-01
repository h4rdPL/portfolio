export type Project = {
  title: string;
  image: string;
  tag: string;
  stack: string[];
  description: string;
  link: string;
};

export interface ProjectCardProps {
  project: Project;
  delay?: string;
}
