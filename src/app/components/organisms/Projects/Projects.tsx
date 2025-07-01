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
  StackList,
  StackItem,
  ProjectDescription,
  ProjectLink,
  StyledSwiper,
  FloatingElements,
  FloatingElement,
} from "./Projects-style";

import { ProjectCardProps } from "@/src/app/types/Project";
import { Tag } from "../../atoms/Tag";
import { projects } from "@/src/app/data/Project";
import { Button } from "../../atoms/Button";

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

        <Tag variant="project-status" type={project.tag}>
          {project.tag}
        </Tag>
      </ProjectHeader>

      <StackList>
        {project.stack.map((tech) => (
          <StackItem key={tech}>{tech}</StackItem>
        ))}
      </StackList>

      <ProjectDescription>{project.description}</ProjectDescription>

      <Button
        as="a"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        variant="link"
        showArrow
      >
        See more
      </Button>
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
