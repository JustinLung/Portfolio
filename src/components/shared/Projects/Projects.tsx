import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import s from "./Projects.module.css";
import { useInView } from "react-intersection-observer";
import cn from "clsx";
import { useAnimation } from "framer-motion";
import Button from "../Button/Button";

interface ProjectsProps {}

const variant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, staggerChildren: 0.5 },
  },
  hidden: { opacity: 0, y: 100 },
};

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
    <article className={s.projects}>
      <div className={s["projects-header"]}>
        <h2>WORK</h2>
      </div>
      <div className={s["projects-container"]}>
        {projects.map((project, i) => (
          <div key={i} className={s.item}>
            <img src={project.src} alt="" />
          </div>
        ))}
      </div>
    </article>
  );
}
