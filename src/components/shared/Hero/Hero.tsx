import s from "./Hero.module.css";
import cn from "clsx";

interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <section className={s.hero}>
      <p>Creative Frontend Developer</p>
      <h1>Justin Lung</h1>
    </section>
  );
}
