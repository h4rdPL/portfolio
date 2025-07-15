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
import { motion } from "framer-motion";
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
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: typeof delay === "string" ? parseFloat(delay) : 0 }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.3 },
    }}
    style={{ perspective: 1000 }}
  >
    <motion.div
      whileHover={{
        rotateY: 5,
        rotateX: -5,
        transition: { duration: 0.5 },
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <ProjectCard delay={delay}>
        <ImageContainer>
          <ProjectImage
            src={project.image}
            alt={project.title}
            as={motion.img}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
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
              <StackItem
                key={tech}
                as={motion.li}
                whileHover={{
                  scale: 1.05,
                  originX: 0,
                  color: "var(--primary-color)",
                }}
              >
                {tech}
              </StackItem>
            ))}
          </StackList>

          <ProjectDescription>{project.description}</ProjectDescription>

          <Button
            as={motion.a}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variant="link"
            showArrow
            whileHover={{
              scale: 1.05,
              x: 5,
            }}
          >
            See more
          </Button>
        </ProjectContent>
      </ProjectCard>
    </motion.div>
  </motion.div>
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
