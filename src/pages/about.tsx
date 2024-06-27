import { About } from "@/components/shared/About/About";
import { nextClient } from "@lib/client";
import { AboutPageQuery, AboutRecord } from "@lib/generated/sdk";
import { GetStaticProps } from "next";

interface PageProps {
  data: AboutRecord;
}

export default function Page({ data }: PageProps) {
  console.log(data);
  return <About data={data} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const [aboutPage] = await Promise.allSettled([nextClient.AboutPage()]);

  return {
    props: {
      data: (aboutPage as PromiseFulfilledResult<AboutPageQuery>).value.about,
    },
  };
};
