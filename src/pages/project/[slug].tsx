import MetaTags from "@/components/features/MetaTags";
import { nextClient } from "@lib/client";
import { GetStaticProps } from "next";

interface PageProps {
  data: any;
}

function Page({ data }: PageProps) {
  return (
    <>
      {/* <MetaTags /> */}
      
    </>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const slug = context?.params?.slug as string;
  const projectQuery = nextClient.getCaseStudyBySlug({ slug });

  const [caseStudy] = await Promise.allSettled([
    projectQuery,
  ]);

  return {
    props: {
      data: (caseStudy as PromiseFulfilledResult<GetCaseStudyBySlugQuery>).value.caseStudy,
      footer: (footer as PromiseFulfilledResult<GetFooterQuery>).value.footer,
      header: (navigation as PromiseFulfilledResult<GetHeaderQuery>).value.header,
      prefooter: (prefooter as PromiseFulfilledResult<GetWorkPreFooterQuery>).value.work?.preFooter,
    },
  };
};