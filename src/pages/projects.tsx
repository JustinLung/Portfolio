import Button from "@/components/shared/Button/Button";
import { Parallax } from "@/components/shared/Parallax/Parallax";
import { nextClient } from "@lib/client";
import { ProjectPageQuery, ProjectRecord } from "@lib/generated/sdk";
import { GetStaticProps } from "next";
import { Project } from "@/components/shared/Project/Project";
import s from "../components/shared/Project/Project.module.css";
import cn from "clsx";
import { PreFooter } from "@/components/shared/PreFooter/PreFooter";

interface PageProps {
  data: ProjectRecord[];
}

export default function Page({ data }: PageProps) {
  console.log(data);
  return (
    <>
      <section className={cn("container", s["projects"])}>
        <h1>PROJECTS</h1>
        <div className={s["projects-container"]}>
          {data.map((project, i) => (
            <Project
              title={project.title as string}
              description={project.description as string}
              src={project.image?.url as string}
              alt={project.image?.alt as string}
              slug={project.slug as string}
            />
          ))}
        </div>
      </section>
      <PreFooter isDark />
    </>
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
