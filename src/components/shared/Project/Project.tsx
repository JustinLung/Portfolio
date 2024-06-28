import Image from "next/image";
import { Parallax } from "../Parallax/Parallax";
import s from "./Project.module.css";
import cn from "clsx";
import Button from "../Button/Button";

interface ProjectProps {
  src: string;
  alt: string;
  slug: string;
  title: string;
  description: string;
}

export function Project(props: ProjectProps) {
  const { title, description, src, alt, slug } = props;
  return (
    <article className={s.item}>
      <Parallax>
        <Image src={src} alt={alt} height={1080} width={1920} />
      </Parallax>
      <div className={s.content}>
        <p>{title}</p>
        <p>{description}</p>
        <Button icon href={"/projects/" + slug} className={s.btn}>
          View Project
        </Button>
      </div>
    </article>
  );
}
