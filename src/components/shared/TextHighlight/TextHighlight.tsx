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
    offset: ["50% end", "start start"],
  });

  return (
    <div className={cn(s["text-hightlight-container"])}>
      <motion.p
        className={s.paragraph}
        ref={element}
        style={{ opacity: scrollYProgress }}
      >
        {value}
      </motion.p>
    </div>
  );
}
