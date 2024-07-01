import { ProjectRecord } from "@lib/generated/sdk";
import s from "./DoubleImage.module.css";
import cn from "clsx";
import Image from "next/image";
import { Parallax } from "../Parallax/Parallax";

interface DoubleImageProps {
  data: ProjectRecord;
}

export function DoubleImage(props: DoubleImageProps) {
  const { data } = props;
  return (
    <div className={cn(s.double, "container")}>
      {data?.doubleImage.map((double, i) => {
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
      })}
    </div>
  );
}
