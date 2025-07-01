import { Navbar } from "@/src/app/components/organisms/Navbar/Navbar";
import { Projects } from "@/src/app/components/organisms/Projects/Projects";
import { Hero } from "@/src/app/components/organisms/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
    </>
  );
}
