import { useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import s from "./TextHighlight.module.css";
import cn from "clsx";

interface TextHighlightInterface {
  value: string;
}

export default function TextHighlight(props: TextHighlightInterface) {
  const { value } = props;
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 50%"],
  });

  return (
    <div className={cn(s["text-hightlight-container"])}>
      <motion.p
        className={cn(s.paragraph, "container")}
        ref={element}
        style={{ opacity: scrollYProgress }}
      >
        {value}
      </motion.p>
    </div>
  );
}
