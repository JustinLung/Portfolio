import Lenis from "@studio-freight/lenis";
import { create } from "zustand";

export type LenisProps = {
  Lenis?: Lenis;
};

export const useLenisState = create<LenisProps>(() => ({
  Lenis: undefined,
}));
