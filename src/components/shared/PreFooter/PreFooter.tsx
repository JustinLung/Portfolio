import s from "./PreFooter.module.css";
import { motion } from "framer-motion";
import cn from "clsx";
import { easeOutExpo } from "@/utils/transitions";

interface PreFooterProps {
  isDark?: boolean;
}

export const socials = [
  {
    href: "https://www.instagram.com/justinlung_/",
    title: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/justinlung123/",
    title: "Linkedin",
  },
  {
    href: "https://github.com/JustinLung",
    title: "Github",
  },
];

export function PreFooter(props: PreFooterProps) {
  const { isDark = false } = props;
  return (
    <section className={cn(s.PreFooter, isDark && s["dark-mode"])}>
      <div className={s.content}>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          transition={{
            ease: easeOutExpo,
          }}
        >
          GET IN TOUCH
        </motion.h2>
        <motion.ul
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          transition={{
            ease: easeOutExpo,
          }}
        >
          {socials.map((social, i) => {
            return (
              <li key={`socials-${i}`}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.title}
                </a>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
