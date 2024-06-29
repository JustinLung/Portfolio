import s from "./FullScreenMedia.module.css";
import cn from "clsx";

interface FullScreenMediaProps {}

export function FullScreenMedia(props: FullScreenMediaProps) {
  return (
    <article className={cn(s.FullScreenMedia)}>
      <p></p>
    </article>
  );
}
