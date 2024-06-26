import s from "./Hero.module.css";
import cn from "clsx";

interface HeroProps {
  title: string;
  subtext: string;
}

export function Hero(props: HeroProps) {
  const { title, subtext } = props;
  return (
    <section className={s.hero}>
      <p>{subtext}</p>
      <h1>{title}</h1>
    </section>
  );
}
