import { useEffect } from "react";
import s from "./Projects.module.css";
import { useInView } from "react-intersection-observer";
import cn from "clsx";
import { useAnimation } from "framer-motion";
import { HomeRecord } from "@lib/generated/sdk";
import Image from "next/image";
import Button from "../Button/Button";
import { Parallax } from "../Parallax/Parallax";

interface ProjectsProps {
  data: HomeRecord;
  title: string;
}

export function Projects(props: ProjectsProps) {
  const { title, data } = props;
  console.log(data);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const projectsToRender = data?.highlights.slice(-3) || [];

  return (
    <article className={cn(s.projects)}>
      <div className="container">
        <div className={s["projects-header"]}>
          <h2>{title}</h2>
        </div>
        <div className={s["projects-container"]}>
          {projectsToRender.map((project, i) => (
            <article key={i} className={s.item}>
              <Parallax>
                <Image
                  src={project.image?.url as string}
                  alt={project.image?.alt as string}
                  height={1080}
                  width={1920}
                />
              </Parallax>
              <div className={s.content}>
                <p>{project.title}</p>
                <p>{project.description}</p>
                <Button
                  icon
                  href={"/projects/" + project.slug}
                  className={s.btn}
                >
                  View Project
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
}
