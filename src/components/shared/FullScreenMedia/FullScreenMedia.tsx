import s from "./FullScreenMedia.module.css";
import cn from "clsx";

interface FullScreenMediaProps {}

export function FullScreenMedia(props: FullScreenMediaProps) {
  return (
    <Parallax className={s.imageContainer}>
      <Image
        src={double?.url as string}
        alt={double?.alt as string}
        height={1080}
        width={1920}
      />
    </Parallax>
  );
}
