import s from "./PreFooter.module.css";
import { motion } from "framer-motion";
import cn from "clsx";

interface PreFooterProps {
  isDark?: boolean;
}

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
          <li>
            <a href="/">INSTAGRAM</a>
          </li>
          <li>
            <a href="/">LINKEDIN</a>
          </li>
          <li>
            <a href="/">GITHUB</a>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
