import Image from "next/image";
import { Parallax } from "../Parallax/Parallax";
import s from "./ProjectHero.module.css";
import cn from "clsx";
import { ProjectRecord } from "@lib/generated/sdk";
0;
import Link from "next/link";
import { motion } from "framer-motion";
import { easeOutExpo } from "@/utils/transitions";

interface ProjectHeroProps {
  data: ProjectRecord;
}

export function ProjectHero(props: ProjectHeroProps) {
  const { data } = props;
  return (
    <section>
      <div className={cn(s["hero-wrapper"])}>
        <div className={cn("container", s["title-container"])}>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              ease: easeOutExpo,
              delay: 0.5,
              duration: 0.3,
            }}
            className={cn(s.title)}
          >
            {data?.title}
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: easeOutExpo,
            delay: 0.5,
            duration: 0.3,
          }}
        >
          <Parallax className={s["hero-container"]}>
            <Image
              src={data?.image?.url as string}
              alt={data?.image?.alt as string}
              height={1080}
              width={1920}
              className={s["hero"]}
            />
          </Parallax>
        </motion.div>
      </div>
      <div className={cn(s.content, "container")}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 0.5,
          }}
          transition={{ delay: 0.3, ease: easeOutExpo }}
          viewport={{ once: true }}
          className={s.type}
        >
          {data?.projectType}
        </motion.span>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ delay: 0.3, ease: easeOutExpo }}
          viewport={{ once: true }}
          className={s.description}
        >
          {data?.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 0.5,
          }}
          transition={{ delay: 0.3, ease: easeOutExpo }}
          viewport={{ once: true }}
          className={s["link-container"]}
        >
          {data?.liveLink && (
            <Link href={data?.liveLink as string} className={s.link}>
              Visit Site
            </Link>
          )}
          {data?.githubLink && (
            <Link href={data?.githubLink as string} className={s.link}>
              Github Repository
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
