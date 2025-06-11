import { lazy } from "react";
import projectsData, { ProjectProps } from "../projectsData.ts";
import "./ProjectsPage.css";

const ProjectCard = lazy(() => import("../components/ProjectCard"));

const projects: ProjectProps[] = projectsData;

function ProjectsPage() {
  return (
    <main className="projects">
      <section>
        <div className="container">
          <h2 className="heading-secondary">Projects</h2>
        </div>
        <div className="container grid grid--3-cols margin-bottom-md">
          {projects.map((p: ProjectProps) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
