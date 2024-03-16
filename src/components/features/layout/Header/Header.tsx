import { Link } from "@/components/shared/Link/Link";
import styles from "./Header.module.css";
import cn from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { easeOutExpo } from "@/utils/transitions";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Stylegide",
    href: "/styleguide",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={cn(styles["header"])}>
      <div className="container">
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
            <ul>
              {links.map((link) => {
                return (
                  <li key={link.title}>
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
