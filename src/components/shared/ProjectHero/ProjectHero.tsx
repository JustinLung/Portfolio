import Image from "next/image";
import { Parallax } from "../Parallax/Parallax";
import s from "./ProjectHero.module.css";
import cn from "clsx";
import { ProjectRecord } from "@lib/generated/sdk";

interface ProjectHeroProps {
  data: ProjectRecord;
}

export function ProjectHero(props: ProjectHeroProps) {
  const { data } = props;
  return (
    <Parallax className={s["hero-container"]}>
      <Image
        src={data.image?.url as string}
        alt={data.image?.alt as string}
        height={1080}
        width={1920}
        className={s["hero"]}
      />
    </Parallax>
  );
}
