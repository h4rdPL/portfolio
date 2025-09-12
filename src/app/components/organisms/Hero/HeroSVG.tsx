"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type PupilPosition = { cx: number; cy: number };
type EyeCenter = { x: number; y: number };

export const HeroSVG = () => {
  const [svgContent, setSvgContent] = useState<string>("");
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const steamElements = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    fetch("images/hero_people.svg")
      .then((res) => res.text())
      .then(setSvgContent);
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

    const getOriginal = (el: Element): PupilPosition => ({
      cx: parseFloat(el.getAttribute("cx") || "0"),
      cy: parseFloat(el.getAttribute("cy") || "0"),
    });

    const leftPupilOriginal = getOriginal(leftPupil);
    const rightPupilOriginal = getOriginal(rightPupil);

    const svgRect = svgElement.getBoundingClientRect();
    const leftEyeRect = leftEye.getBoundingClientRect();
    const rightEyeRect = rightEye.getBoundingClientRect();

    const centerOf = (rect: DOMRect): EyeCenter => ({
      x: (rect.left + rect.right) / 2 - svgRect.left,
      y: (rect.top + rect.bottom) / 2 - svgRect.top,
    });

    const leftEyeCenter = centerOf(leftEyeRect);
    const rightEyeCenter = centerOf(rightEyeRect);
    const maxMovement = 15;

    const moveEyes = (e: MouseEvent) => {
      const mouseX = e.clientX - svgRect.left;
      const mouseY = e.clientY - svgRect.top;

      const move = (eyeCenter: EyeCenter, original: PupilPosition): PupilPosition => {
        const dx = mouseX - eyeCenter.x;
        const dy = mouseY - eyeCenter.y;
        const dist = Math.min(Math.hypot(dx, dy), maxMovement);
        const angle = Math.atan2(dy, dx);
        return {
          cx: original.cx + Math.cos(angle) * dist,
          cy: original.cy + Math.sin(angle) * dist,
        };
      };

      const newLeft = move(leftEyeCenter, leftPupilOriginal);
      const newRight = move(rightEyeCenter, rightPupilOriginal);

      gsap.to(leftPupil, { attr: { cx: newLeft.cx, cy: newLeft.cy }, duration: 0.3, ease: "power2.out" });
      gsap.to(rightPupil, { attr: { cx: newRight.cx, cy: newRight.cy }, duration: 0.3, ease: "power2.out" });
    };

    window.addEventListener("mousemove", moveEyes);

    const createSteamAnimation = () => {
      const coffeeCup = svgElement.querySelector<SVGPathElement>(
        'path[d^="M2109.3,2060.32"]'
      );
      if (!coffeeCup) return;

      const coffeeGroup = coffeeCup.closest("g") as SVGGElement | null;
      if (!coffeeGroup) return;

      steamElements.current.forEach((el) => el.remove());
      steamElements.current = [];

      const bbox = coffeeCup.getBBox();
      const centerX = bbox.x + bbox.width / 2;
      const totalSteamWidth = 80;

      for (let i = 0; i < 4; i++) {
        const steam = document.createElementNS("http://www.w3.org/2000/svg", "path");

        const baseD = `M0,0
      C10,-15 30,-25 25,-40
      C20,-55 40,-65 30,-80
      C15,-95 35,-110 20,-125`;

        steam.setAttribute("d", baseD);
        steam.setAttribute("stroke", "#bbb");
        steam.setAttribute("stroke-width", "3");
        steam.setAttribute("stroke-linecap", "round");
        steam.setAttribute("fill", "none");
        steam.setAttribute("opacity", "0");

        const xOffset = -totalSteamWidth / 2 + (totalSteamWidth / 3) * i;
        const xPos = centerX + xOffset;
        const yPos = bbox.y - 30;

        steam.setAttribute("transform", `translate(${xPos}, ${yPos}) scale(1) rotate(0)`);

        coffeeGroup.appendChild(steam);
        steamElements.current.push(steam);

        const tl = gsap.timeline({
          repeat: -1,
          delay: i * 0.4,
          repeatDelay: 0.5 + Math.random() * 0.5,
        });

        const riseDistance1 = 120 + Math.random() * 40;
        const riseDistance2 = riseDistance1 + 80 + Math.random() * 40;

        tl.to(steam, { duration: 0.6, opacity: 0.6, ease: "sine.inOut" })
          .to(steam, {
            duration: 3,
            ease: "power1.out",
            onUpdate(this: gsap.core.Tween) {
              const progress = this.progress();
              const newY = yPos - riseDistance1 * progress;
              const driftX = xPos + 10 * Math.sin(progress * Math.PI * 2 + i);
              const rotation = 5 * Math.sin(progress * Math.PI * 4 + i);
              const scale = 1 + 0.5 * progress;
              steam.setAttribute("transform", `translate(${driftX}, ${newY}) scale(${scale}) rotate(${rotation})`);
            },
          })
          .to(steam, {
            duration: 2,
            opacity: 0,
            ease: "power1.in",
            onUpdate(this: gsap.core.Tween) {
              const progress = this.progress();
              const newY = yPos - riseDistance1 - (riseDistance2 - riseDistance1) * progress;
              const driftX = xPos + 15 * Math.sin(progress * Math.PI * 3 + i);
              const rotation = 10 * Math.sin(progress * Math.PI * 4 + i);
              const scale = 1.5 + 0.8 * progress;
              steam.setAttribute("transform", `translate(${driftX}, ${newY}) scale(${scale}) rotate(${rotation})`);
            },
          });
      }
    };

    createSteamAnimation();

    return () => {
      window.removeEventListener("mousemove", moveEyes);
      steamElements.current.forEach((el) => el.remove());
      steamElements.current = [];
    };
  }, [svgContent]);

  return (
    <div
      ref={svgContainerRef}
      style={{
        width: "600px",
        height: "600px",
        zIndex: 1,
        marginLeft: "2rem",
      }}
    />
  );
};
