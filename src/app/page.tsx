"use client";
import { Navbar } from "@/src/app/components/organisms/Navbar/Navbar";
import { Hero } from "@/src/app/components/organisms/Hero/Hero";
import { TechStack } from "./components/organisms/TechStack/TechStack";
import { Projects } from "./components/organisms/Projects/Projects";
import { Education } from "./components/organisms/Education/Education";
import { Footer } from "./components/organisms/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Education />
      <Footer />
    </>
  );
}
