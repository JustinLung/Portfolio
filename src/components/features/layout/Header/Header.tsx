import { Link } from "@/components/shared/Link/Link";
import styles from "./Header.module.css";
import cn from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { easeOutExpo } from "@/utils/transitions";
import { links } from "./links";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: easeOutExpo,
    },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: easeOutExpo,
    },
  },
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={cn(styles["header"])}>
      <div className={cn("container", styles["header-block"])}>
        <Link href="/">PORTFOLIO</Link>
        <button className="clear" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, scale: 1.5 }}
            exit={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: easeOutExpo }}
            className={styles["navigation"]}
          >
            <motion.ul variants={container} initial="hidden" animate="show">
              {links.map((link) => {
                return (
                  <motion.li key={link.title} variants={item}>
                    <Link href={link.href}>{link.title}</Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
