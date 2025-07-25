import styled, { keyframes, css } from "styled-components";

export interface EducationItemProps {
  index: number;
  isVisible: boolean;
}

export interface EducationListProps {
  isVisible: boolean;
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
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(44, 44, 44, 0.4);
  }
  50% {
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

export const EducationContainer = styled.section`
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

export const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 80px;
  color: #2c2c2c;
  letter-spacing: 2px;
  position: relative;
  animation: ${fadeInUp} 1s ease-out;
`;

export const EducationList = styled.div<EducationListProps>`
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
    transform: scaleY(0);
    transform-origin: top;

    ${({ isVisible }) =>
      isVisible &&
      css`
        animation: ${drawLine} 2s ease-out 0.5s forwards;
      `}

    @media (max-width: 768px) {
      left: 15px;
    }
  }
`;

export const EducationItem = styled.div<EducationItemProps>`
  position: relative;
  padding: 40px 0 40px 80px;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ index, isVisible }) =>
    isVisible &&
    css`
      animation: ${slideInLeft} 0.8s ease-out ${index * 0.3 + 1}s both;
    `}

  &::before {
    content: "";
    position: absolute;
    left: 29px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #2c2c2c;
    border: 3px solid #fafafa;
    box-shadow: 0 0 0 2px #2c2c2c;
    z-index: 2;
    transition: all 0.3s ease;
    transform: translateX(-40%);
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
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const ItemHeader = styled.div`
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

export const DegreeTitle = styled.h3`
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

export const Institution = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  color: #666;
  margin: 4px 0 0 0;
  transition: color 0.3s ease;

  ${EducationItem}:hover & {
    color: #007acc;
  }
`;

export const Duration = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.black};
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

export const Description = styled.p`
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

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const AnimatedBackground = styled.div`
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
