import { BaseLayout } from "@/components/features/layout/BaseLayout/BaseLayout";
import { PageTransition } from "@/components/shared/PageTransition/PageTransition";
import "@/styles/all.css";
import { useLenis } from "@/utils/useLenis";
import { useVhFix } from "@/utils/useVhFix";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useLenis();
  useVhFix();

  return (
    <>
  
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
      <PageTransition />
    </>
  );
}
