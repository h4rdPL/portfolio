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
    title: "Product List Card",
    image:
      "https://github.com/h4rdPL/restaurant-cart/blob/main/src/assets/design/desktop-design-empty.jpg?raw=true",
    tag: "done",
    stack: ["React", "Styled-components"],
    description: "React app based on REST API using styled-components.",
    link: "https://github.com/h4rdPL/restaurant-cart",
  },
  {
    title: "Plate recognition",
    image: "/images/plate_recognition.png",
    tag: "done",
    stack: ["Python", "OpenCV", "Machine Learning"],
    description: "License plate detection with computer vision",
    link: "https://github.com/h4rdPL/plate_recognition",
  },
  {
    title: "PlantUML Generator",
    image: "/images/plantuml_generator.png",
    tag: "done",
    stack: ["Python", "TypeScript", "Next.js", "OpenAI API", "PlantUML"],
    description:
      "AI-powered tool to generate PlantUML diagrams from NLP descriptions.",
    link: "https://github.com/h4rdPL/DiagramGenieApp",
  },
  {
    title: "Fitness prediction app",
    image: "/images/cat_fit.png",
    tag: "new",
    stack: ["Python", "React Native", "TypeScript", "Next.js", "OpenAI API"],
    description: "Machine Learning mobile app to improve our workout",
    link: "#",
  },
  {
    title: "Nexcent Landing",
    image: "/images/nexcent.png",
    tag: "done",
    stack: ["TypeScript", "Vite.js"],
    description: "Landing Page website from Figma Community",
    link: "https://github.com/h4rdPL/nexcent",
  },
  {
    title: "DotLearn",
    image: "/images/dotLearn.png",
    tag: "done",
    stack: ["C#", ".NET", "TypeScript", "React.js"],
    description: "Languages learning application",
    link: "https://github.com/h4rdPL/dotLearn",
  },
  {
    title: "Car Route Optimizer",
    image: "/images/python_ML.png",
    tag: "done",
    stack: [
      "Python",
      "Genetic Algorithms",
      "Operations Research",
      "Matplotlib",
    ],
    description: "Genetic algorithm VRP solver with feline supervision",
    link: "https://github.com/h4rdPL/car_optimizer/tree/mainr",
  },
];
