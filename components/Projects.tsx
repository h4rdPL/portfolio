"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import styled, { keyframes, css } from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

type Project = {
  title: string;
  image: string;
  tag: string;
  stack: string[];
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Airbnb Clone",
    image: "/images/airbnb-clone.png",
    tag: "refactoring",
    stack: [".NET", "TDD", "Clean Architecture"],
    description: "React app based on REST API using styled-components.",
    link: "https://github.com/h4rdPL/airbnb",
  },
  {
    title: "DevCenter",
    image: "/images/dev_center.png",
    tag: "in progress",
    stack: [".NET", "TDD", "Clean Architecture"],
    description: "React app based on REST API using styled-components.",
    link: "https://github.com/h4rdPL/devCenter",
  },
  {
    title: "Product List Card",
    image:
      "https://github.com/h4rdPL/restaurant-cart/blob/main/src/assets/design/desktop-design-empty.jpg?raw=true",
    tag: "done",
    stack: ["React", "Styled-components"],
    description: "React app based on REST API using styled-components.",
    link: "https://github.com/h4rdPL/devCenter",
  },
  {
    title: "Plate recognition",
    image: "/images/plate_recognition.png",
    tag: "new",
    stack: ["Python", "OpenCV", "Machine Learning"],
    description: "License plate detection with computer vision",
    link: "#",
  },
  {
    title: "PlantUML AI Generator",
    image: "/images/plantuml_generator.png",
    tag: "new",
    stack: ["Python", "TypeScript", "Next.js", "OpenAI API", "PlantUML"],
    description:
      "AI-powered tool to generate PlantUML diagrams from NLP descriptions.",
    link: "#",
  },
];

// Keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const cardEntrance = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulseUnderline = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;

// Styled Components
const ProjectsSection = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(to bottom, #f8fafc, #ffffff);
  position: relative;
  overflow: hidden;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out 0.4s forwards;
  position: relative;
  padding: 0 2rem;
  span {
    font-weight: bold;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  color: #1e293b;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out 0.2s forwards;
`;

const ProjectCard = styled.div<{ delay?: string }>`
  width: 100%;
  max-width: 380px;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  animation: ${cardEntrance} 0.6s ease-out forwards;
  animation-delay: ${({ delay }) => delay || "0s"};

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
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

  &:hover::after {
    transform: scaleX(1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  ${ProjectCard}:hover &::before {
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
`;

const Tag = styled.span<{ type?: string }>`
  display: inline-block;
  padding: 0.2rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: lowercase;

  ${({ type }) => {
    switch (type) {
      case "done":
        return css`
          background: #bbf7d0;
          color: #166534;
        `;
      case "in progress":
        return css`
          background: #dbeafe;
          color: #1e3a8a;
        `;
      case "refactoring":
        return css`
          background: #fef3c7;
          color: #92400e;
        `;
      default:
        return css`
          background: #e9d5ff;
          color: #6b21a8;
        `;
    }
  }}
`;

const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 0;
  list-style: none;
`;

const StackItem = styled.li`
  background: #f1f5f9;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-size: 0.75rem;
  color: #334155;
`;

const ProjectDescription = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #6366f1;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(99, 102, 241, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const StyledSwiper = styled(Swiper)`
  padding: 2rem 0;
  position: relative;

  .swiper-slide {
    transition: all 0.3s ease;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide-active {
    transform: scale(1.05);
  }

  .swiper-button-next,
  .swiper-button-prev {
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    color: #6366f1 !important;

    &:hover {
      background-color: #6366f1 !important;
      color: white !important;
    }

    &::after {
      font-size: 16px !important;
      font-weight: bold;
    }
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #e0e0e0;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #6366f1;
  }
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

const FloatingElement = styled.div`
  position: absolute;
  opacity: 0.1;
  background: linear-gradient(135deg, #6366f1, #10b981);
  animation: ${float} 15s infinite linear;
`;

interface ProjectCardProps {
  project: Project;
  delay?: string;
}

const ProjectCardComponent: React.FC<ProjectCardProps> = ({
  project,
  delay,
}) => (
  <ProjectCard delay={delay}>
    <ImageContainer>
      <ProjectImage src={project.image} alt={project.title} />
    </ImageContainer>
    <ProjectContent>
      <ProjectHeader>
        <ProjectTitle>{project.title}</ProjectTitle>
        <Tag type={project.tag}>{project.tag}</Tag>
      </ProjectHeader>
      <StackList>
        {project.stack.map((tech) => (
          <StackItem key={tech}>{tech}</StackItem>
        ))}
      </StackList>
      <ProjectDescription>{project.description}</ProjectDescription>
      <ProjectLink
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        See more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </ProjectLink>
    </ProjectContent>
  </ProjectCard>
);

export const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <FloatingElements>
        {[...Array(10)].map((_, i) => (
          <FloatingElement
            key={i}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              borderRadius: `${Math.random() * 50}%`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </FloatingElements>

      <Container>
        <Title>My Projects</Title>
        <Subtitle>
          Here are some of my recent works, including <span>team projects</span>
        </Subtitle>
        <StyledSwiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: {
              slidesPerView: 3,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
              },
            },
          }}
          spaceBetween={30}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCardComponent
                project={project}
                delay={`${index * 0.1}s`}
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Container>
    </ProjectsSection>
  );
};
