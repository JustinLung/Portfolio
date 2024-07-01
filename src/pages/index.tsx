import MetaTags from "@/components/features/MetaTags";
import { About } from "@/components/shared/About/About";
import { Hero } from "@/components/shared/Hero/Hero";
import { PreFooter } from "@/components/shared/PreFooter/PreFooter";
import { Projects } from "@/components/shared/Projects/Projects";
import TextHighlight from "@/components/shared/TextHighlight/TextHighlight";
import { GetStaticProps } from "next";
import { nextClient } from "@lib/client";
import { HomePageQuery, HomeRecord } from "@lib/generated/sdk";

interface PageProps {
  data: HomeRecord;
}

export default function Page({ data }: PageProps) {
  return (
    <>
      <MetaTags
        pageTitle={"Portfolio - Home"}
        pageDescription={"This is my portfolio"}
        currentUrl={"/"}
      />
      <Hero
        title={data?.hero?.title as string}
        subtext={data?.hero?.subtext as string}
      />
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
