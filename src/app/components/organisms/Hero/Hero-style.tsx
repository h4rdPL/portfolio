"use client";
import styled, { keyframes } from "styled-components";
import { Button } from "../../atoms/Button";

const wave = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  color: ${({ theme }) => theme.colors.black};
`;

export const WavingHand = styled.span`
  display: inline-block;
  animation: ${wave} 2.5s infinite;
  transform-origin: 70% 70%;
`;

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: calc(100vh - 72px);
  gap: 2rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;

    &::before {
      clip-path: path(
        "M 0 60
         C 50 30, 100 60, 150 30
         C 200 60, 250 30, 300 60
         L 300 100
         L 0 100
         Z"
      );
      background: linear-gradient(
        45deg,
        ${({ theme }) => theme.colors.primary} 0%,
        ${({ theme }) => theme.colors.secondary} 50%,
        ${({ theme }) => theme.colors.accent} 100%
      );
    }
  }
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 600px;
  z-index: 1;

  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-self: flex-start;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
