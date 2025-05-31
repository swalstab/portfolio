import { lazy } from "react";
import projectsData, { ProjectProps } from "../projectsData.ts";
import "./ProjectsPage.css";

const ProjectCard = lazy(() => import("../components/ProjectCard"));

// interface HasLink {
//   exist: boolean;
//   source: string | null;
// }

// export interface ProjectProps {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   alt: string;
//   technologies: string[];
//   sourceCode: HasLink;
//   website: HasLink;
// }

// async function getData(endpoint: string): Promise<ProjectProps[]> {
//   const res = await fetch(endpoint);

//   return res.json();
// }

// const projects = await getData("../../projects.json");

const projects: ProjectProps[] = projectsData;

function ProjectsPage() {
  return (
    <main className="projects">
      <section>
        <div className="container">
          <h2 className="heading-secondary">Projects</h2>
        </div>
        <div className="container grid grid--3-cols">
          {projects.map((p: ProjectProps) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
