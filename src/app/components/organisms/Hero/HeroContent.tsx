"use client";
import React from "react";
import {
  HeroWrapper,
  HeroContentWrapper,
  StyledButton,
  StyledHeading,
  WavingHand,
} from "./Hero-style";

export const HeroContent = () => (
  <HeroWrapper>
    <HeroContentWrapper>
      <StyledHeading>
        Hello <WavingHand>👋</WavingHand> <br />I am Matthew
      </StyledHeading>
      <p>Software Engineer</p>
      <StyledButton>My projects</StyledButton>
    </HeroContentWrapper>
  </HeroWrapper>
);
