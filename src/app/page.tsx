import { Navbar } from "@/src/app/components/organisms/Navbar/Navbar";
import { Projects } from "@/src/app/components/organisms/Projects/Projects";
import { Hero } from "@/src/app/components/organisms/Hero/Hero";
import { TechStack } from "./components/organisms/TechStack/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
    </>
  );
}
