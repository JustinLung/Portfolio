import { useEffect } from "react";
import s from "./Projects.module.css";
import { useInView } from "react-intersection-observer";
import cn from "clsx";
import { useAnimation } from "framer-motion";
import { HighlightedWorkRecord } from "@lib/generated/sdk";
import Image from "next/image";

interface ProjectsProps {
  highlights: HighlightedWorkRecord;
}

export function Projects(props: ProjectsProps) {
  const { highlights } = props;
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <article className={cn(s.projects)}>
      <div className="container">
        <div className={s["projects-header"]}>
          <h2>{highlights.title}</h2>
        </div>
        <div className={s["projects-container"]}>
          {highlights.works.map((project, i) => (
            <article key={i} className={s.item}>
              <Image
                src={project.image?.url as string}
                alt={project.image?.alt as string}
                height={1080}
                width={1920}
              />
              <div className={s.content}>
                <p>{project.title}</p>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
}
