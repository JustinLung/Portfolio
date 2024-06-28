import { media } from "@/utils/media";
import { easeOutExpo } from "@/utils/transitions";
import { MotionElement } from "@/utils/types";
import cn from "clsx";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMedia } from "react-use";
import s from "./Parallax.module.css";

interface ParallaxProps extends MotionElement {
  reverse?: boolean;
  modifier?: number;
  forceParallax?: boolean;
  hasReveal?: boolean;
}

export function Parallax(props: ParallaxProps) {
  let {
    reverse,
    children,
    forceParallax = true  ,
    hasReveal = false,
    modifier = 8,
    ...rest
  } = props;

  const isMobile = useMedia(media.tablet.max, true);

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const pointModifier = 1 + (modifier * 2) / 100;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${reverse ? "" : "-"}${modifier}%`, `${reverse ? "-" : ""}${modifier}%`]
  );

  return (
    <motion.div {...rest} className={cn(s.Parallax, rest.className)} ref={ref}>
      <motion.div
        variants={{
          initial: {
            scale: hasReveal ? 1.1 : 1,
          },
          animate: { scale: 1 },
        }}
        initial={"initial"}
        animate={inView ? "animate" : "initial"}
        transition={{
          clipPath: {
            duration: 1.5,
            ease: easeOutExpo,
          },
          duration: 2.2,
          ease: easeOutExpo,
        }}
      >
        <motion.div
          style={{
            scale: isMobile && !forceParallax ? 1 : pointModifier,
            y: isMobile && !forceParallax ? 0 : y,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
