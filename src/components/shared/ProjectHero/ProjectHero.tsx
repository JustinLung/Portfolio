import Image from "next/image";
import { Parallax } from "../Parallax/Parallax";
import s from "./ProjectHero.module.css";
import cn from "clsx";
import { ProjectRecord } from "@lib/generated/sdk";
0;
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectHeroProps {
  data: ProjectRecord;
}

export function ProjectHero(props: ProjectHeroProps) {
  const { data } = props;
  return (
    <section>
      <div className={s["hero-wrapper"]}>
        <h1 className={cn(s.title, "container")}>{data.title}</h1>
        <Parallax className={s["hero-container"]}>
          <Image
            src={data.image?.url as string}
            alt={data.image?.alt as string}
            height={1080}
            width={1920}
            className={s["hero"]}
          />
        </Parallax>
      </div>
      <div className={cn(s.content, "container")}>
        <span className={s.type}>{data.projectType}</span>
        <p className={s.description}>{data.description}</p>
        <div className={s["link-container"]}>
          {data.liveLink && (
            <Link href={data.liveLink as string} className={s.link}>
              Visit Site
            </Link>
          )}
          {data.githubLink && (
            <Link href={data.githubLink as string} className={s.link}>
              Github Repository
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
