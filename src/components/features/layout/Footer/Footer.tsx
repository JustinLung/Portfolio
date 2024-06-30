import { Github, Instagram, Linkedin } from "@/components/icons";
import s from "./Footer.module.css";
import cn from "clsx";
import { Divider } from "@/components/shared/Divider/Divider";
import Button from "@/components/shared/Button/Button";

export function Footer() {
  return (
    <footer className={s["footer"]}>
      <div className="container">
        <p className={s["title"]}>Let's Work Togheter</p>
        <div className={s["main-content"]}>
          <ul className={s["contact-list"]}>
            <li className={s["list-title"]}>Contact me</li>
            <li>
              <a href="mailto:justinlung77@gmail.com">justinlung77@gmail.com</a>
            </li>
            <li>
              <a href="tel:+31646021197">+31646021197</a>
            </li>
          </ul>
          <ul className={s["social-list"]}>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            </li>
          </ul>
        </div>
        <Divider />
        <div className={s["outer-content"]}>
          <div>
            <p>
              &#169; {new Date().getFullYear()} Justin Lung · All Rights
              Reserved
            </p>
          </div>
          <div>
            <p>Creative Frontend Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
