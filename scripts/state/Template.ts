import { create } from "zustand";

export type COMPONENTProps = {
  showCOMPONENT: boolean;
};

export const useCOMPONENT = create<COMPONENTProps>(() => ({
  showCOMPONENT: false,
}));
