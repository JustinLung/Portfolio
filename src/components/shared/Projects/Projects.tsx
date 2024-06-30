import { useEffect } from "react";
import s from "./Projects.module.css";
import { useInView } from "react-intersection-observer";
import cn from "clsx";
import { useAnimation } from "framer-motion";
import { HomeRecord } from "@lib/generated/sdk";
import Image from "next/image";
import Button from "../Button/Button";
import { Parallax } from "../Parallax/Parallax";
import { motion } from "framer-motion";

interface ProjectsProps {
  data: HomeRecord;
  title: string;
}

export function Projects(props: ProjectsProps) {
  const { title, data } = props;
  const projectsToRender = data?.highlights.slice(-3) || [];

  return (
    <article className={cn(s.projects)}>
      <div className="container">
        <div className={s["projects-header"]}>
          <h2>{title}</h2>
        </div>
        <div className={s["projects-container"]}>
          {projectsToRender.map((project, i) => (
            <motion.article key={i} className={s.item}>
              <Parallax>
                <Image
                  src={project.image?.url as string}
                  alt={project.image?.alt as string}
                  height={1080}
                  width={1920}
                />
              </Parallax>
              <div className={s.content}>
                <div>
                  <p>{project.title}</p>
                  <p  className={s.description}>{project.description}</p>
                  <Button
                    icon
                    href={"/projects/" + project.slug}
                    className={s.btn}
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </article>
  );
}
