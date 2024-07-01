import Image from "next/image";
import { Parallax } from "../Parallax/Parallax";
import { motion } from "framer-motion";
import s from "./Project.module.css";
import cn from "clsx";
import Button from "../Button/Button";
import { easeOutExpo } from "@/utils/transitions";

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
    <motion.article
      layout="position"
      className={s.item}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.2,
        },
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.4,
        ease: easeOutExpo,
      }}
    >
      <Parallax>
        <Image src={src} alt={alt} height={1080} width={1920} />
      </Parallax>
      <div className={s.content}>
        <div>
          <p>{title}</p>
          <p>{description}</p>
          <Button icon href={"/projects/" + slug} className={s.btn}>
            View Project
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
