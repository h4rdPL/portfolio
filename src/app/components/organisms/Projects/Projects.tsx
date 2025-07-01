"use client";

import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import {
  ProjectsSection,
  Subtitle,
  Container,
  Title,
  ProjectCard,
  ImageContainer,
  ProjectImage,
  ProjectContent,
  ProjectHeader,
  ProjectTitle,
  Tag,
  StackList,
  StackItem,
  ProjectDescription,
  ProjectLink,
  StyledSwiper,
  FloatingElements,
  FloatingElement,
} from "./Projects-style";

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
