import MetaTags from "@/components/features/MetaTags";
import { About } from "@/components/shared/About/About";
import { Hero } from "@/components/shared/Hero/Hero";
import { PreFooter } from "@/components/shared/PreFooter/PreFooter";
import { Projects } from "@/components/shared/Projects/Projects";
import TextHighlight from "@/components/shared/TextHighlight/TextHighlight";


interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <>
      <MetaTags
        pageTitle={"Homepage"}
        pageDescription={"This is the homepage"}
        currentUrl={"/"}
      />
      <Hero />
      <TextHighlight value={"Building magical and accessible web experiences is my passion."}/>
      <Projects />
      {/* <About/> */}
      <PreFooter />
    </>
  );
}
