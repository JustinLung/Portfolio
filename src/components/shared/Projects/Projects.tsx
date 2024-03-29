import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import s from "./Projects.module.css";
import { useInView } from "react-intersection-observer";
import cn from "clsx";
import { useAnimation } from "framer-motion";

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
    <div className={s["project-container"]}>
      {projects.map((project) => {
        return (
          <motion.section className={s["project"]} ref={ref} variants={variant}>
            <h2 className={s["project-title"]}>{project.title}</h2>
            <div className={s["project-image-container"]}>
              <img
                src={project.src}
                alt={project.alt}
                className="project-img"
              />
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
