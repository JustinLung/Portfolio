import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import s from "./Projects.module.css";
import { useInView } from "react-intersection-observer";
import cn from "clsx";
import { useAnimation } from "framer-motion";
import Button from "../Button/Button";
import { HighlightedWorkRecord, WorkRecord } from "@lib/generated/sdk";
import Image from "next/image";

interface ProjectsProps {
  highlights: HighlightedWorkRecord;
}

const variant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, staggerChildren: 0.5 },
  },
  hidden: { opacity: 0, y: 100 },
};

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
    </article>
  );
}
  