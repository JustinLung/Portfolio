import { motion } from "framer-motion";
import s from "./Hero.module.css";
import { easeOutExpo } from "@/utils/transitions";

interface HeroProps {
  title: string;
  subtext: string;
}

export function Hero(props: HeroProps) {
  const { title, subtext } = props;
  return (
    <section className={s.hero}>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{
          ease: easeOutExpo,
          delay: 0.3,
          duration: 0.3,
        }}
      >
        {subtext}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{
          ease: easeOutExpo,
          delay: 0.5,
          duration: 0.3,
        }}
      >
        {title}
      </motion.h1>
    </section>
  );
}
