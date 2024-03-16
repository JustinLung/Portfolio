import MetaTags from "@/components/features/MetaTags";
import { Projects } from "@/components/shared/Projects/Projects";

interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <>
      <MetaTags
        pageTitle={"Homepage"}
        pageDescription={"This is the homepage"}
        currentUrl={"/"}
      />
      <Projects />
    </>
  );
}
