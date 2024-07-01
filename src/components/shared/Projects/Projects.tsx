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
import { easeInOutExpo, easeOutExpo } from "@/utils/transitions";
import { container } from "@/components/features/layout/Header/Header";

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
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 0.3, ease: easeOutExpo }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
        </div>
        <div className={s["projects-container"]}>
          {projectsToRender.map((project, i) => (
            <motion.article
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              initial={{
                opacity: 0,
                y: 50,
              }}
              transition={{ ease: easeInOutExpo, duration: 0.3 }}
              viewport={{
                once: true,
              }}
              key={i}
              className={s.item}
            >
              <Parallax>
                <Image
                  src={project.image?.url as string}
                  alt={project.image?.alt as string}
                  height={1080}
                  width={1920}
                  className={s.projectImage}
                />
              </Parallax>
              <div className={s.content}>
                <div>
                  <p>{project.title}</p>
                  <p className={s.description}>{project.description}</p>
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
