import runwiseImage from "./assets/img/projects/runwise.webp";
import advaentOfCode2024Image from "./assets/img/projects/advent_of_code_2024.webp";
import portfolioImage from "./assets/img/projects/portfolio.webp";

interface HasLink {
  exist: boolean;
  source: string | null;
}

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  technologies: string[];
  sourceCode: HasLink;
  website: HasLink;
}

const projects: ProjectProps[] = [
  {
    id: "001",
    title: "RunWise",
    description:
      "A web application providing helpful tools for runners. At the moment it includes a pace calculator.",
    image: runwiseImage,
    alt: "screenshot",
    technologies: ["react", "javascript", "css", "html"],
    sourceCode: {
      exist: true,
      source: "https://github.com/swalstab/runwise",
    },
    website: { exist: false, source: null },
  },
  {
    id: "002",
    title: "Advent of Code 2024",
    description:
      "An interactive interface for Advent of Code 2024 solutions. Accepts an input and displays results (all solutions are written in JavaScript)",
    image: advaentOfCode2024Image,
    alt: "screenshot",
    technologies: ["react", "javascript", "css", "html"],
    sourceCode: {
      exist: true,
      source: "https://github.com/swalstab/advent_of_code_2024",
    },
    website: { exist: false, source: null },
  },
  {
    id: "003",
    title: "Portfolio Website",
    description:
      "My portfolio built with TypeScript, featuring my projects. All components are handcrafted using plain CSS",
    image: portfolioImage,
    alt: "screenshot",
    technologies: ["react", "typescript", "css", "html"],
    sourceCode: {
      exist: true,
      source: "https://github.com/swalstab/portfolio",
    },
    website: { exist: true, source: "https://swalstab.netlify.app/" },
  },
];

export default projects;
