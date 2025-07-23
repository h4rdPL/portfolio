import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

interface EducationData {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  skills: string[];
}

interface EducationItemProps {
  index: number;
  isVisible: boolean;
}

interface TagProps {
  index: number;
}

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const drawLine = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(44, 44, 44, 0.4);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 0 10px rgba(44, 44, 44, 0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const EducationContainer = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
  padding: 120px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: ${shimmer} 3s infinite;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 80px;
  color: #2c2c2c;
  letter-spacing: 2px;
  position: relative;
  animation: ${fadeInUp} 1s ease-out;
`;

const EducationList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 60px;

  &::before {
    content: "";
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #2c2c2c, #e0e0e0, #2c2c2c);
    border-radius: 1px;
    animation: ${drawLine} 2s ease-out 0.5s both;

    @media (max-width: 768px) {
      left: 15px;
    }
  }
`;

const EducationItem = styled.div<EducationItemProps>`
  position: relative;
  padding: 40px 0 40px 80px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateX(-30px);

  ${({ index, isVisible }) =>
    isVisible &&
    css`
      animation: ${slideInLeft} 0.8s ease-out ${index * 0.3 + 1}s both;
    `}

  &::before {
    content: "";
    position: absolute;
    left: 25px;
    top: 50px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #2c2c2c;
    border: 3px solid #fafafa;
    box-shadow: 0 0 0 2px #2c2c2c;
    transition: all 0.3s ease;
    z-index: 2;
  }

  &:hover {
    transform: translateX(10px);

    &::before {
      animation: ${pulse} 2s infinite;
      background: #007acc;
      box-shadow: 0 0 0 2px #007acc, 0 4px 15px rgba(0, 122, 204, 0.3);
    }
  }

  @media (max-width: 768px) {
    padding-left: 50px;

    &::before {
      left: 10px;
    }
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const DegreeTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2c2c2c;
  margin: 0;
  line-height: 1.3;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #007acc, transparent);
    transition: left 0.6s ease;
  }

  ${EducationItem}:hover & {
    &::after {
      left: 100%;
    }
  }
`;

const Institution = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  color: #666;
  margin: 4px 0 0 0;
  transition: color 0.3s ease;

  ${EducationItem}:hover & {
    color: #007acc;
  }
`;

const Duration = styled.span`
  font-size: 0.9rem;
  color: #999;
  font-weight: 300;
  white-space: nowrap;
  padding: 8px 16px;
  background: rgba(0, 122, 204, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(0, 122, 204, 0.2);
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;

  ${EducationItem}:hover & {
    background: rgba(0, 122, 204, 0.2);
    border-color: rgba(0, 122, 204, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    align-self: flex-start;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
  font-weight: 300;
  transition: all 0.3s ease;

  ${EducationItem}:hover & {
    color: #333;
    transform: translateY(-2px);
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Tag = styled.span<TagProps>`
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  color: #495057;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid #dee2e6;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #007acc, #0056b3);
    color: white;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 122, 204, 0.3);
    border-color: #007acc;

    &::before {
      left: 100%;
    }
  }

  &:nth-child(odd) {
    animation-delay: ${({ index }) => index * 0.1}s;
  }

  &:nth-child(even) {
    animation-delay: ${({ index }) => (index + 1) * 0.1}s;
  }
`;

const AnimatedBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(0, 122, 204, 0.1) 0%,
      transparent 70%
    );
    animation: ${float} 6s ease-in-out infinite;
  }

  &::before {
    top: 10%;
    right: 10%;
    animation-delay: -2s;
  }

  &::after {
    bottom: 10%;
    left: 10%;
    animation-delay: -4s;
  }
`;

export const Education: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const educationData: EducationData[] = [
    {
      degree: "Master of Computer Science",
      institution: "University of Economics in Katowice",
      duration: "2024 - 2026",
      description:
        "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on deep learning applications in computer vision.",
      skills: [
        "Machine Learning",
        "Python",
        "TensorFlow",
        "Software Architecture",
      ],
    },
    {
      degree: "Master Erasmus+ Program",
      institution: "University of Economics in Varna",
      duration: "2025 - 2026",
      description:
        "International exchange program focusing on European business practices and cross-cultural collaboration.",
      skills: [
        "International Business",
        "Cultural Studies",
        "Project Management",
      ],
    },
    {
      degree: "Bachelor of Software Engineering",
      institution:
        "Cavalry Captain Witold Pilecki State University in Oświęcim",
      duration: "2020 - 2024",
      description:
        "Comprehensive software development program with focus on full-stack web development and software architecture.",
      skills: ["JavaScript", "React", "Node.js", "Database Design"],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems(educationData.map((_, index) => index));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <EducationContainer>
      <AnimatedBackground />
      <ContentWrapper>
        <MainTitle>Education</MainTitle>
        <EducationList>
          {educationData.map((edu, index) => (
            <EducationItem
              key={index}
              index={index}
              isVisible={visibleItems.includes(index)}
            >
              <ItemHeader>
                <div>
                  <DegreeTitle>{edu.degree}</DegreeTitle>
                  <Institution>{edu.institution}</Institution>
                </div>
                <Duration>{edu.duration}</Duration>
              </ItemHeader>
              <Description>{edu.description}</Description>
              <SkillsContainer>
                {edu.skills.map((skill, skillIndex) =>
                  skill ? (
                    <Tag key={skillIndex} index={skillIndex}>
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
