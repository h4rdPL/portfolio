"use client";

import styled from "styled-components";
import { Code2, Server, Database, GitBranch } from "lucide-react";
import { Tag } from "../../atoms/Tag";

const TechStackSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SectionSubtitle = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TechCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    border-color: rgba(99, 102, 241, 0.2);

    &::after {
      transform: scaleX(1);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #6366f1, #10b981);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
`;

const TechIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;

  svg {
    width: 40px;
    height: 40px;
  }
`;

const TechTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #1e293b;
`;

const TechDesc = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const techData = [
  {
    icon: <Code2 />,
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
];

export const TechStack = () => {
  return (
    <TechStackSection id="tech-stack">
      <FloatingElements />

      <SectionHeader>
        <SectionTitle>My Tech Stack</SectionTitle>
        <SectionSubtitle>
          Technologies I use to build modern, scalable applications
        </SectionSubtitle>
      </SectionHeader>

      <TechGrid>
        {techData.map((tech, index) => (
          <TechCard key={index}>
            <TechIcon>{tech.icon}</TechIcon>
            <TechTitle>{tech.title}</TechTitle>
            <TechDesc>{tech.desc}</TechDesc>
            <TechTags>
              {tech.tags.map((tag) => (
                <Tag key={tag} variant="tech">
                  {tag}
                </Tag>
              ))}
            </TechTags>
          </TechCard>
        ))}
      </TechGrid>
    </TechStackSection>
  );
};
