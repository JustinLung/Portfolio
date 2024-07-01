import Button from "@/components/shared/Button/Button";
import { Parallax } from "@/components/shared/Parallax/Parallax";
import { AnimatePresence, motion } from "framer-motion";
import { nextClient } from "@lib/client";
import { ProjectPageQuery, ProjectRecord } from "@lib/generated/sdk";
import { GetStaticProps } from "next";
import { Project } from "@/components/shared/Project/Project";
import s from "../components/shared/Project/Project.module.css";
import cn from "clsx";
import { PreFooter } from "@/components/shared/PreFooter/PreFooter";
import { useState } from "react";
import { easeOutExpo } from "@/utils/transitions";
import { container, item } from "@/components/features/layout/Header/Header";

interface PageProps {
  data: ProjectRecord[];
}

export default function Page({ data }: PageProps) {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = data.filter((project) => {
    if (!filter) return true;
    return project?.projectType?.includes(filter);
  });

  return (
    <AnimatePresence>
      <section className={cn("container", s["projects"])}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{
            ease: easeOutExpo,
            duration: 0.5,
            delay: 0.3,
          }}
        >
          PROJECTS
        </motion.h1>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={s.filter}
        >
          <motion.button
            onClick={() => setFilter(null)}
            className={cn({ [s.active]: !filter })}
            variants={item}
          >
            All
          </motion.button>
          <motion.button
            onClick={() => setFilter("Webdevelopment")}
            className={cn({ [s.active]: filter === "Webdevelopment" })}
            variants={item}
          >
            Web Development
          </motion.button>
          <motion.button
            onClick={() => setFilter("Creative Development")}
            className={cn({ [s.active]: filter === "Creative Development" })}
            variants={item}
          >
            Creative Development
          </motion.button>
        </motion.div>
        <div className={s["projects-container"]}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <Project
                key={project.slug}
                title={project.title as string}
                description={project.description as string}
                src={project.image?.url as string}
                alt={project.image?.alt as string}
                slug={project.slug as string}
              />
            ))}
          </AnimatePresence>
        </div>
      </section>
      <PreFooter isDark />
    </AnimatePresence>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const [projectPage] = await Promise.allSettled([nextClient.ProjectPage()]);

  let projectData = null;

  if (projectPage.status === "fulfilled") {
    projectData = projectPage.value.allProjects || null;
  }

  return {
    props: {
      data: projectData,
    },
  };
};
