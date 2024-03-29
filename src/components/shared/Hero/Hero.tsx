import { Link } from "../Link/Link";
import s from "./Hero.module.css";
import cn from "clsx";

interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <section className={cn(s.Hero, "container")}>
      <h1>
        <span>Hi There, I'm</span>
        <span>Justin Lung.</span>
      </h1>
      <p>Building magical and accessible web experiences is my passion</p>
    </section>
  );
}
