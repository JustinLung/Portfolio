import { useLenisState } from "@/state/lenis";
import { easeInOutExpo } from "@/utils/transitions";
import cn from "clsx";
import { animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { create } from "zustand";
import s from "./Loader.module.css";

interface LoaderProps {}

export const useLoading = create(() => ({
  isLoading: true,
  isLoaderDone: false,
}));

export function Loader(props: LoaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const isLoaderDone = useLoading((state) => state.isLoaderDone);

  useEffect(() => {
    if (!ref.current || !progressBarRef.current) return;
    const { Lenis } = useLenisState.getState();

    const updateProgress = (value: number) => {
      setProgress(Math.round(value * 100));
    };

    const enterAnimation = async () => {
      Lenis?.stop();

      // @ts-ignore
      await animate(
        progressBarRef.current,
        { width: ["0%", "100%"] },
        {
          delay: 0.4,
          duration: 2,
          ease: easeInOutExpo,
          // @ts-ignore
          onUpdate: (latest) => updateProgress(latest / 100),
        }
      );

      const duration = 2;

      // @ts-ignore
      await animate(
        ref.current,
        { y: ["0%", "-100%"] },
        {
          delay: 0.4,
          ease: easeInOutExpo,
          duration,
          onComplete: () => {
            ref.current!.style.visibility = "hidden";
          },
        }
      );

      Lenis?.start();
      useLoading.setState({ isLoaderDone: true });
    };

    enterAnimation();
  }, []);

  return !isLoaderDone ? (
    <section>
      <motion.div
        initial={{
          backgroundColor: "var(--green)",
        }}
        transition={{
          duration: 1,
        }}
        ref={ref}
        className={cn(s.Loader)}
      >
        <div className={s.container}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            LOADING
          </motion.span>
          <div ref={progressBarRef} className={s.ProgressBar}></div>
        </div>
      </motion.div>
    </section>
  ) : null;
}
