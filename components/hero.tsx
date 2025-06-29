"use client";
import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";
import styled, { keyframes } from "styled-components";
import { gsap } from "gsap";

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
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  color: ${({ theme }) => theme.colors.black};
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

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 600px;
  z-index: 1;

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  align-self: flex-start;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Hero = () => {
  const [svgContent, setSvgContent] = useState<string>("");
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("images/hero_people.svg")
      .then((response) => response.text())
      .then((svgText) => {
        setSvgContent(svgText);
      });
  }, []);

  useEffect(() => {
    if (!svgContent || !svgContainerRef.current) return;

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
    const svgElement = svgDoc.querySelector("svg");

    if (!svgElement) return;

    svgElement.setAttribute("width", "600");
    svgElement.setAttribute("height", "600");
    svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");

    svgContainerRef.current.innerHTML = "";
    svgContainerRef.current.appendChild(svgElement);

    const leftEye = svgElement.querySelector(
      '[transform*="-177.84,-215.503"] ellipse'
    );
    const rightEye = svgElement.querySelector(
      '[transform*="-7.18118,-215.925"] ellipse'
    );
    const leftPupil = svgElement.querySelector(
      '[transform*="707.258,1012.5"] ellipse'
    );
    const rightPupil = svgElement.querySelector(
      '[transform*="877.308,1007.9"] ellipse'
    );

    if (!leftEye || !rightEye || !leftPupil || !rightPupil) return;

    const leftPupilOriginal = {
      cx: parseFloat(leftPupil.getAttribute("cx") || "0"),
      cy: parseFloat(leftPupil.getAttribute("cy") || "0"),
    };
    const rightPupilOriginal = {
      cx: parseFloat(rightPupil.getAttribute("cx") || "0"),
      cy: parseFloat(rightPupil.getAttribute("cy") || "0"),
    };

    const leftEyeRect = leftEye.getBoundingClientRect();
    const rightEyeRect = rightEye.getBoundingClientRect();
    const svgRect = svgElement.getBoundingClientRect();

    const leftEyeCenter = {
      x: (leftEyeRect.left + leftEyeRect.right) / 2 - svgRect.left,
      y: (leftEyeRect.top + leftEyeRect.bottom) / 2 - svgRect.top,
    };
    const rightEyeCenter = {
      x: (rightEyeRect.left + rightEyeRect.right) / 2 - svgRect.left,
      y: (rightEyeRect.top + rightEyeRect.bottom) / 2 - svgRect.top,
    };

    const maxMovement = 15;

    const moveEyes = (e: MouseEvent) => {
      const mouseX = e.clientX - svgRect.left;
      const mouseY = e.clientY - svgRect.top;

      const dxLeft = mouseX - leftEyeCenter.x;
      const dyLeft = mouseY - leftEyeCenter.y;
      const distanceLeft = Math.min(
        Math.sqrt(dxLeft * dxLeft + dyLeft * dyLeft),
        maxMovement
      );
      const angleLeft = Math.atan2(dyLeft, dxLeft);

      const dxRight = mouseX - rightEyeCenter.x;
      const dyRight = mouseY - rightEyeCenter.y;
      const distanceRight = Math.min(
        Math.sqrt(dxRight * dxRight + dyRight * dyRight),
        maxMovement
      );
      const angleRight = Math.atan2(dyRight, dxRight);

      gsap.to(leftPupil, {
        attr: {
          cx: leftPupilOriginal.cx + Math.cos(angleLeft) * distanceLeft,
          cy: leftPupilOriginal.cy + Math.sin(angleLeft) * distanceLeft,
        },
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(rightPupil, {
        attr: {
          cx: rightPupilOriginal.cx + Math.cos(angleRight) * distanceRight,
          cy: rightPupilOriginal.cy + Math.sin(angleRight) * distanceRight,
        },
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveEyes);

    return () => {
      window.removeEventListener("mousemove", moveEyes);
    };
  }, [svgContent]);

  return (
    <HeroWrapper>
      <HeroContent>
        <StyledHeading>
          Hello <WavingHand>👋</WavingHand> <br />I am Matthew
        </StyledHeading>
        <p>Software Engineer</p>
        <StyledButton>My projects</StyledButton>
      </HeroContent>
      <div
        ref={svgContainerRef}
        style={{
          width: "600px",
          height: "600px",
          zIndex: 1,
          marginLeft: "2rem",
        }}
      />
    </HeroWrapper>
  );
};
