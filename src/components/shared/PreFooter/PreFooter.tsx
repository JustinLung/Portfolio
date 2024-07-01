import s from "./PreFooter.module.css";
import { motion } from "framer-motion";
import cn from "clsx";

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
    <motion.section
      layout="position"
      className={cn(s.PreFooter, isDark && s["dark-mode"])}
    >
      <div className={s.content}>
        <h2>GET IN TOUCH</h2>
        <ul>
          {socials.map((social, i) => {
            return (
              <li key={`socials-${i}`}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
}
