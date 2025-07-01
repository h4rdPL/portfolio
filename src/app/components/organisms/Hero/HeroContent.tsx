"use client";
import React from "react";
import {
  HeroContentWrapper,
  StyledButton,
  StyledHeading,
  WavingHand,
} from "./Hero-style";

export const HeroContent = () => (
  <HeroContentWrapper>
    <StyledHeading>
      Hello <WavingHand>👋</WavingHand> <br />I am Matthew
    </StyledHeading>
    <p>Software Engineer</p>
    <StyledButton>My projects</StyledButton>
  </HeroContentWrapper>
);
