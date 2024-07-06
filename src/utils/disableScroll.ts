import { useLenisState } from "@/state/lenis";

export default function disableScroll(disabled: boolean) {
  const { Lenis } = useLenisState.getState();
  if (!Lenis) return;
  disabled ? Lenis.stop() : Lenis.start();
  document.body.style.setProperty("overflow", disabled ? "hidden" : "initial");
}
