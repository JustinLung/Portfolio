import s from "./Projects.module.css";
import cn from "clsx";

interface ProjectsProps {}

const projects = [
  {
    title: "scrollbook",
    src: "https://images.unsplash.com/photo-1679065949530-7bb1fba3ccb3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "hi",
  },
  {
    title: "scrollbook",
    src: "https://images.unsplash.com/photo-1679065949530-7bb1fba3ccb3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "hi",
  },
  {
    title: "scrollbook",
    src: "https://images.unsplash.com/photo-1679065949530-7bb1fba3ccb3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "hi",
  },
];

export function Projects(props: ProjectsProps) {
  return (
    <div className={s["project-container"]}>
      {projects.map((project) => {
        return (
          <section className={s["project"]}>
            <h2 className={s["project-title"]}>{project.title}</h2>
            <div className={s['project-image-container']}>
              <img
                src={project.src}
                alt={project.alt}
                className="project-img"
              />
            </div>
          </section>
        );
      })}
    </div>
  );
}
