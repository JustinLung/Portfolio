import { create } from "zustand";

export type TransitionProps = {
  triggerTransition: any; // Name of transition
};

export const usePageTransition = create<TransitionProps>((set) => ({
  triggerTransition: "",
  setTriggerTransition: (triggerTransition: string) =>
    set({ triggerTransition }),
}));
