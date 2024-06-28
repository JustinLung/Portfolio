import { Link } from "@/components/shared/Link/Link";
import styles from "./Header.module.css";
import cn from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { easeOutExpo } from "@/utils/transitions";
import { links } from "./links";

export const container = {
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

export const item = {
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
    <header
      className={cn(styles["header"])}
      style={{
        mixBlendMode: !isOpen ? "difference" : "unset",
      }}
    >
      <div className={cn("container", styles["header-block"])}>
        <Link href="/">PORTFOLIO</Link>
        <nav className={styles["desktop-nav"]}>
          <motion.ul variants={container} initial="hidden" animate="show">
            {links.map((link) => {
              return (
                <motion.li key={link.title} variants={item}>
                  <Link href={link.href} onClick={() => setIsOpen(false)}>
                    {link.title}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>
        <button
          className={cn("clear", styles["menu"])}
          onClick={() => setIsOpen(!isOpen)}
        >
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
                    <Link href={link.href} onClick={() => setIsOpen(false)}>
                      {link.title}
                    </Link>
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
