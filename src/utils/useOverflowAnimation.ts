import { easeOutExpo } from "@/utils/transitions";
import {
  AnimationOptionsWithValueOverrides,
  useAnimate,
  useInView,
} from "framer-motion";
import { useEffect } from "react";

export function useOverflowAnimation({
  animationConfig,
  inViewConfig,
}: {
  inViewConfig?: {
    root?: any;
    once?: boolean;
    amount?: "some" | "all" | number;
  };
  animationConfig?: AnimationOptionsWithValueOverrides;
}) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: true,
    ...inViewConfig,
  });

  useEffect(() => {
    if (isInView && scope.current) {
      animate(
        scope.current,
        {
          opacity: [0, 1],
          y: ["100%", "0%"],
        },
        {
          duration: 0.8,
          ease: easeOutExpo,
          ...animationConfig,
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, scope]);

  return scope;
}
