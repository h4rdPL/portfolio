// Projects-style.tsx
import styled, { keyframes, css } from "styled-components";
import { Swiper } from "swiper/react";

// Keyframes
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const cardEntrance = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const pulseUnderline = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;

// Styled Components
export const ProjectsSection = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(to bottom, #f8fafc, #ffffff);
  position: relative;
  overflow: hidden;
`;

export const Subtitle = styled.p`
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

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  color: #1e293b;
  opacity: 0;
  font-weight: 400;
  animation: ${fadeInUp} 0.8s ease-out 0.2s forwards;
`;

export const ProjectCard = styled.div<{ delay?: string }>`
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

export const ImageContainer = styled.div`
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

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
`;

export const Tag = styled.span<{ type?: string }>`
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

export const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 0;
  list-style: none;
`;

export const StackItem = styled.li`
  background: #f1f5f9;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-size: 0.75rem;
  color: #334155;
`;

export const ProjectDescription = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

export const ProjectLink = styled.a`
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

export const StyledSwiper = styled(Swiper)`
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

export const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

export const FloatingElement = styled.div`
  position: absolute;
  opacity: 0.1;
  background: linear-gradient(135deg, #6366f1, #10b981);
  animation: ${float} 15s infinite linear;
`;
