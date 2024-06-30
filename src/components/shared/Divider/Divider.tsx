import s from "./Divider.module.css";
import cn from "clsx";

interface DividerProps {}

export function Divider(props: DividerProps) {
  return <span className={s["divider"]} />;
}
