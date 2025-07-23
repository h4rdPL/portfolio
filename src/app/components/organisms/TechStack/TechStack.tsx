"use client";

import { Tag } from "../../atoms/Tag";
import { techData } from "@/src/app/data/TechStack";
import {
  FloatingElements,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
  TechCard,
  TechDesc,
  TechGrid,
  TechIcon,
  TechStackSection,
  TechTags,
  TechTitle,
} from "./TechStack-style";

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
