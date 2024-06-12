import { Divider } from "../Divider/Divider";
import s from "./PreFooter.module.css";
import cn from "clsx";

interface PreFooterProps {}

export function PreFooter(props: PreFooterProps) {
  return (
    <section className={cn(s.PreFooter)}>
      <div className={s.content}>
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>
            <a href="/">INSTAGRAM</a>
          </li>
          <li>
            <a href="/">LINKEDIN</a>
          </li>
          <li>
            <a href="/">GITHUB</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
