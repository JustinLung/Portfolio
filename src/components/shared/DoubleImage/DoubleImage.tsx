import { ProjectRecord } from "@lib/generated/sdk";
import s from "./DoubleImage.module.css";
import cn from "clsx";
import Image from "next/image";
import { Parallax } from "../Parallax/Parallax";
import { motion } from "framer-motion";
import { easeOutExpo } from "@/utils/transitions";

interface DoubleImageProps {
  data: ProjectRecord;
}

export function DoubleImage(props: DoubleImageProps) {
  const { data } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.3, ease: easeOutExpo }}
      viewport={{ once: true }}
      className={cn(s.double, "container")}
    >
      {data?.doubleImage.map((double, i) => {
        return (
          <Parallax className={s.imageContainer} key={`image-${i}`}>
            <Image
              src={double?.url as string}
              alt={double?.alt as string}
              height={1080}
              width={1920}
            />
          </Parallax>
        );
      })}
    </motion.div>
  );
}
