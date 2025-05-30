import { lazy } from "react";
import "./ProjectCard.css";

import { ProjectProps } from "../pages/ProjectsPage";

const TechTag = lazy(() => import("./TechTag"));

function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div className="project">
      <figure className="project-img">
        <img
          src={`./src/assets/img/projects/${project.image}`}
          alt={project.alt}
        />
      </figure>
      <div className="project-content">
        <p className="project-title">{project.title}</p>
        <div className="project-tags">
          {[...new Set(project.technologies)].map((tech, idx) => (
            <TechTag key={idx} tech={tech} />
          ))}
        </div>
        <p className="project-description">{project.description}</p>

        <ul className="project-btns">
          {project.sourceCode.exist && (
            <li>
              <a href={project.sourceCode.source!} className="project-btn">
                <img
                  src="./src/assets/img/icon/github-mark.svg"
                  alt="GitHub logo"
                  draggable="false"
                />
                GitHub
              </a>
            </li>
          )}
          {project.website.exist && (
            <li>
              <a href={project.website.source!} className="project-btn">
                Live View
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
