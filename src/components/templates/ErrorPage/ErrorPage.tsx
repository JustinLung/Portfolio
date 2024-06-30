import Button from "@/components/shared/Button/Button";
import styles from "./ErrorPage.module.css";
import { motion } from "framer-motion";
import cn from "clsx";
import { easeOutExpo } from "@/utils/transitions";

interface ErrorPageProps {
  statusCode?: number | null;
}

export function ErrorPage(props: ErrorPageProps) {
  return (
    <section className={cn(styles["notfound"], "container")}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ delay: 0, ease: easeOutExpo }}
        className={styles["notfound-title"]}
      >
        404
      </motion.h1>
      <div className={styles["container"]}>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.3, ease: easeOutExpo }}
          className={styles["notfound-description"]}
        >
          Oops! Looks like this page took a coffee break and forgot to come
          back.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.4, ease: easeOutExpo }}
        >
          <Button href="/" className={cn(styles["btn"], "button")}>
            Home
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
