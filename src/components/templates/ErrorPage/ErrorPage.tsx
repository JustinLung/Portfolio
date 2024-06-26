import Button from "@/components/shared/Button/Button";
import styles from "./ErrorPage.module.css";
import cn from "clsx";

interface ErrorPageProps {
  statusCode?: number | null;
}

export function ErrorPage(props: ErrorPageProps) {
  return (
    <section className={cn(styles["notfound"], "container")}>
      <h1 className={styles["notfound-title"]}>404</h1>
      <div className={styles["container"]}>
        <p className={styles["notfound-description"]}>
          Oops! Looks like this page took a coffee break and forgot to come
          back.
        </p>
        <Button href="/" className={cn(styles["btn"], "button")}>
          Home
        </Button>
      </div>
    </section>
  );
}
