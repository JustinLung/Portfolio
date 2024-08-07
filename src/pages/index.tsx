import MetaTags from "@/components/features/MetaTags";
import { Hero } from "@/components/shared/Hero/Hero";
import { PreFooter } from "@/components/shared/PreFooter/PreFooter";
import { Projects } from "@/components/shared/Projects/Projects";
import TextHighlight from "@/components/shared/TextHighlight/TextHighlight";
import { GetStaticProps } from "next";
import { nextClient } from "@lib/client";
import { HomePageQuery, HomeRecord } from "@lib/generated/sdk";
import { Loader, useLoading } from "@/components/shared/Loader/Loader";
import dynamic from "next/dynamic";

interface PageProps {
  data: HomeRecord;
}

const DynamicCanvas = dynamic(
  () =>
    import("@/components/shared/Canvas/Canvas").then(
      (res) => res.DynamicCanvas
    ),
  {
    ssr: false,
  }
);

export default function Page({ data }: PageProps) {
  return (
    <>
      <MetaTags
        pageTitle={"Portfolio - Home"}
        pageDescription={"This is my portfolio"}
        currentUrl={"/"}
      />
      <Loader />
      <Hero
        title={data?.hero?.title as string}
        subtext={data?.hero?.subtext as string}
      >
        <DynamicCanvas />
      </Hero>
      <TextHighlight value={data?.highlightedText as string} />
      <Projects data={data} title={data.projectTitle as string} />
      <PreFooter />
    </>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const [homePage] = await Promise.allSettled([nextClient.HomePage()]);

  return {
    props: {
      data: (homePage as PromiseFulfilledResult<HomePageQuery>).value.home,
    },
  };
};
