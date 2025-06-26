"use client";
import React from "react";
import { Button } from "@/components/atoms/Button";
import styled, { keyframes } from "styled-components";

// Waving animation
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

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.Large};
`;

const WavingHand = styled.span`
  display: inline-block;
  animation: ${wave} 2.5s infinite;
  transform-origin: 70% 70%;
`;

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: calc(100vh - 72px);
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 600px;

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  align-self: flex-start;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;

  @media (min-width: 768px) {
    max-width: 30%;
    flex: 1;
    margin-left: 2rem;
  }
`;

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <StyledHeading>
          Hello <WavingHand>👋</WavingHand> <br />I am Matthew
        </StyledHeading>
        <p>Software Engineer</p>
        <StyledButton>My projects</StyledButton>
      </HeroContent>
      <Image src="images/hero_people.png" alt="hero_image" />
    </HeroWrapper>
  );
};
