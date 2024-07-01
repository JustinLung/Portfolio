import MetaTags from "@/components/features/MetaTags";
import { DoubleImage } from "@/components/shared/DoubleImage/DoubleImage";
import { Parallax } from "@/components/shared/Parallax/Parallax";
import { PreFooter } from "@/components/shared/PreFooter/PreFooter";
import { ProjectHero } from "@/components/shared/ProjectHero/ProjectHero";
import { nextClient } from "@lib/client";
import { GetProjectBySlugQuery, ProjectRecord } from "@lib/generated/sdk";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";

interface PageProps {
  data: ProjectRecord;
}

function Page({ data }: PageProps) {
  return (
    <>
      <ProjectHero data={data} />
      <DoubleImage data={data} />
      <PreFooter isDark />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async context => {
  const slugCollection = await nextClient.getAllProjectBySlug();
  const slugs = slugCollection.allProjects.map(project => ({
    params: { slug: project.slug as string },
  }));
  return {
    paths: slugs,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const slug = context?.params?.slug as string;
  const projectQuery = nextClient.getProjectBySlug({ slug });

  const [project] = await Promise.allSettled([
    projectQuery
  ])

  return {
    props: {
      data: (project as PromiseFulfilledResult<GetProjectBySlugQuery>).value.project
    }
  }
};

export default Page;
