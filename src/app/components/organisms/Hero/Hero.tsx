"use client";
import React from "react";
import { HeroSVG } from "./HeroSVG";
import { HeroWrapper } from "./Hero-style";
import { HeroContent } from "./HeroContent";

export const Hero = () => (
  <HeroWrapper>
    <HeroContent />
    <HeroSVG />
  </HeroWrapper>
);
