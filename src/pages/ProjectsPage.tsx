import { lazy } from "react";
import styles from "./ProjectsPage.module.css";

const ProjectCard = lazy(() => import("../components/ProjectCard"));

interface HasLink {
  exist: boolean;
  source: string | null;
}

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  sourceCode: HasLink;
  website: HasLink;
}

async function getData(endpoint: string): Promise<ProjectProps[]> {
  const res = await fetch(endpoint);

  return res.json();
}

const projects = await getData("../../projects.json");

function ProjectsPage() {
  return (
    <main className={styles.projects}>
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
