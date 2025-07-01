import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    title: "Airbnb Clone",
    image: "/images/airbnb-clone.png",
    tag: "refactoring",
    stack: [".NET", "TDD", "Clean Architecture"],
    description: "React app based on REST API using styled-components.",
    link: "https://github.com/h4rdPL/airbnb",
  },
  {
    title: "DevCenter",
    image: "/images/dev_center.png",
    tag: "in progress",
    stack: [".NET", "TDD", "Clean Architecture"],
    description: "React app based on REST API using styled-components.",
    link: "https://github.com/h4rdPL/devCenter",
  },
  {
    title: "Product List Card",
    image:
      "https://github.com/h4rdPL/restaurant-cart/blob/main/src/assets/design/desktop-design-empty.jpg?raw=true",
    tag: "done",
    stack: ["React", "Styled-components"],
    description: "React app based on REST API using styled-components.",
    link: "https://github.com/h4rdPL/devCenter",
  },
  {
    title: "Plate recognition",
    image: "/images/plate_recognition.png",
    tag: "new",
    stack: ["Python", "OpenCV", "Machine Learning"],
    description: "License plate detection with computer vision",
    link: "https://github.com/h4rdPL/plate_recognition",
  },
  {
    title: "PlantUML AI Generator",
    image: "/images/plantuml_generator.png",
    tag: "new",
    stack: ["Python", "TypeScript", "Next.js", "OpenAI API", "PlantUML"],
    description:
      "AI-powered tool to generate PlantUML diagrams from NLP descriptions.",
    link: "#",
  },
];
