import s from "./COMPONENT.module.css";
import cn from "clsx";

interface COMPONENTProps {}

export function COMPONENT(props: COMPONENTProps) {
  return (
    <article className={cn(s.COMPONENT)}>
      <p></p>
    </article>
  );
}
