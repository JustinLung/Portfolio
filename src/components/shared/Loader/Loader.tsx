import { motion, AnimatePresence } from "framer-motion";
import cn from "clsx";
import s from "./Loader.module.css";
import { useEffect, useRef, useState } from "react";
import { create } from "zustand";
import { animate } from "framer-motion";
import { easeInOutExpo } from "@/utils/transitions";

export const useLoading = create<{
  showLoader: boolean;
  showAfterLoader: boolean;
}>(() => ({
  showLoader: true,
  showAfterLoader: false,
}));

export function Loader() {
  const { showLoader: visible } = useLoading();
  const [loadingText, setLoadingText] = useState("LOADING");
  const ref = useRef<HTMLSpanElement>(null);
  const loadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 8,
      times: [0, 0.2, 0.2, 0.8, 0.8, 1],
      ease: easeInOutExpo,
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = value.toFixed(0);
        }
      },
      onComplete: () => {
        setLoadingText("FINISHED");
        setTimeout(() => {
          useLoading.setState({ showLoader: false, showAfterLoader: true });
        }, 1000); // Delay for 1 second before hiding loader
      },
    });

    return () => {
      controls.stop();
      useLoading.setState({ showLoader: false, showAfterLoader: false });
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={s["Loader"]}
          initial={{ opacity: 1, translateY: 0 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ translateY: "-100%" }}
          transition={{ duration: 1, delay: 0.5, ease: easeInOutExpo }}
        >
          <motion.div
            className={s["loader"]}
            initial={{ opacity: 1, translateY: 0 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: "-100%" }}
            transition={{ duration: 1, delay: 0.5, ease: easeInOutExpo }}
          >
            <div className={s.content}>
              <motion.p
                className={cn(s["text"])}
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -20 }}
                ref={loadingRef}
              >
                {loadingText}
              </motion.p>
              <motion.p
                className={cn(s["percentage"])}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span ref={ref}>0</span>%
              </motion.p>
            </div>
            <motion.div
              className={s["progress-bar"]}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 8, delay: 0.5, ease: easeInOutExpo }}
            >
              <motion.div className={s["progress"]} />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
