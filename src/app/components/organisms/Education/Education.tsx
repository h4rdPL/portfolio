import React, { useState, useEffect, useRef } from "react";
import {
  AnimatedBackground,
  ContentWrapper,
  DegreeTitle,
  Description,
  EducationContainer,
  EducationItem,
  EducationList,
  Institution,
  ItemHeader,
  MainTitle,
  SkillsContainer,
} from "./Education-style";
import { educationData } from "@/src/app/data/Education";
import { Tag } from "../../atoms/Tag";

export const Education: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [hasAnimated]);

  return (
    <EducationContainer ref={sectionRef}>
      <AnimatedBackground />
      <ContentWrapper>
        <MainTitle>Education</MainTitle>
        <EducationList isVisible={hasAnimated}>
          {educationData.map((edu, eduIndex) => (
            <EducationItem
              key={eduIndex}
              index={eduIndex}
              isVisible={hasAnimated}
            >
              <ItemHeader>
                <div>
                  <DegreeTitle>{edu.degree}</DegreeTitle>
                  <Institution>{edu.institution}</Institution>
                </div>
                {/* Make sure index is passed to enable animation */}
                <Tag variant="duration" index={eduIndex}>
                  {edu.duration}
                </Tag>
              </ItemHeader>

              <Description>{edu.description}</Description>

              <SkillsContainer>
                {edu.skills.map((skill, skillIndex) =>
                  skill ? (
                    <Tag key={skillIndex} index={skillIndex} variant="tech">
                      {skill}
                    </Tag>
                  ) : null
                )}
              </SkillsContainer>
            </EducationItem>
          ))}
        </EducationList>
      </ContentWrapper>
    </EducationContainer>
  );
};
