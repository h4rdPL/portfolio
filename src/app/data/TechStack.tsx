import { Code, Server, Database, GitBranch, Smartphone } from "lucide-react";

export const techData = [
  {
    icon: <Code />,
    title: "Frontend Development",
    desc: "Building responsive, performant user interfaces with modern frameworks and libraries.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SCSS",
      "Styled-components",
    ],
  },
  {
    icon: <Server />,
    title: "Backend Development",
    desc: "Creating robust APIs and server-side applications with Node.js and other technologies.",
    tags: [".NET", "C#", "Node.js", "REST API", "Fast API"],
  },
  {
    icon: <Database />,
    title: "Database & Storage",
    desc: "Designing efficient data models and implementing optimized database solutions.",
    tags: ["PostgreSQL", "SQL", "MongoDB", "Redis", "Firebase", "Python"],
  },
  {
    icon: <GitBranch />,
    title: "DevOps & Tools",
    desc: "Implementing CI/CD pipelines and deploying applications to cloud platforms.",
    tags: ["Docker", "AWS", "Git", "LLM", "GitHub Actions"],
  },
  {
    icon: <Smartphone />,
    title: "Android Development",
    desc: "Developing cross-platform mobile apps using React Native with native performance.",
    tags: ["React Native", "Expo", "Android Studio", "TypeScript", "Mobile UI"],
  },
];
