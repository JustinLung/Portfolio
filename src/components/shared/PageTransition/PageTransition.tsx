// Big thanks to Studio Freight! github.com/studio-freight/
import styles from "./PageTransition.module.css";
import { useAnimationControls } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "react-use";
import { motion } from "framer-motion";

import { usePageTransition } from "@/state/pageTransition";
import { easeInOutExpo } from "@/utils/transitions";

const variants = {
  visible: {
    x: "100%",
  },
  hidden: {
    x: "0%",
  },
};

export const PageTransition = () => {
  const curtainRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [pageLoaded, setPageloaded] = useState(false);
  const [curtainInComplete, setCurtainInComplete] = useState(false);
  const { triggerTransition } = usePageTransition();
  const controls = useAnimationControls();
  
  useEffect(() => {
    if (!curtainInComplete) return;

    const changeRouteComplete = () => {
      setPageloaded(true);
    };

    router.events.on("routeChangeComplete", changeRouteComplete);

    return () => {
      router.events.off("routeChangeComplete", changeRouteComplete);
    };
  }, [curtainInComplete, router.events]);

  useIsomorphicLayoutEffect(() => {
    if (triggerTransition === "") return;
    controls.set({
      x: "-100%",
    });
    controls.start("hidden");
  }, [controls, triggerTransition]);

  useIsomorphicLayoutEffect(() => {
    if (!pageLoaded) return;

    controls.set({
      x: 0,
    });
    controls.start("visible");
  }, [controls, pageLoaded]);

  return (
    <motion.div
      className={styles["page-transition"]}
      animate={controls}
      variants={variants}
      transition={{
        duration: 0.7,
        ease: easeInOutExpo
      }}
      ref={curtainRef}
      onAnimationComplete={(e: any) => {
        if (e === "visible") {
          usePageTransition.setState({
            triggerTransition: "",
          });
          setCurtainInComplete(false);
          setPageloaded(false);
        } else {
          router.push(triggerTransition);
          setCurtainInComplete(true);
        }
      }}
    />
  );
};
