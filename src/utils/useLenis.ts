import { useLenisState } from "@/state/lenis";
import Lenis from "@studio-freight/lenis";
import { frame } from "framer-motion";
import { useEffect } from "react";

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      orientation: "vertical", // vertical, horizontal
      gestureOrientation: "vertical", // vertical, horizontal, both
      smoothWheel: true,
      smoothTouch: false,
      infinite: false,
    });
    useLenisState.setState({ Lenis: lenis });

    frame.update((time) => {
      lenis.raf(time.timestamp);
    }, true);

    return () => {
      lenis?.destroy();
    };
  }, []);
};
