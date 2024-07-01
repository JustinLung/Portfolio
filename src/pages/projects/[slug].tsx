import MetaTags from "@/components/features/MetaTags";
import { DoubleImage } from "@/components/shared/DoubleImage/DoubleImage";
import { Parallax } from "@/components/shared/Parallax/Parallax";
import { PreFooter } from "@/components/shared/PreFooter/PreFooter";
import { ProjectHero } from "@/components/shared/ProjectHero/ProjectHero";
import { nextClient } from "@lib/client";
import { ProjectRecord } from "@lib/generated/sdk";
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

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // @ts-ignore
    const slugsQuery = await nextClient.getAllProjectSlugs();
    const paths = slugsQuery.projects.map((project: any) => ({
      params: { slug: project.slug },
    }));

    console.log("Fetched slugs:", slugsQuery.projects);

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const slug = context?.params?.slug as string;
    const projectQuery = await nextClient.getProjectBySlug({ slug });
    console.log("Fetched project data:", projectQuery.project);

    return {
      props: {
        data: projectQuery.project,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
};

export default Page;
