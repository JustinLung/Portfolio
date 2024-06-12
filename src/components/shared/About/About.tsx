import Image from "next/image";
import s from "./About.module.css";
import cn from "clsx";

interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <section className={s.about}>
      <div className={s.content}>
        <h2>About</h2>
        <p className={s.contentText}>
          <span>
            I'm Justin Lung, a 23-year-old creative coder based in the vibrant
            city of Amsterdam. My passion lies in crafting accessible animations
            using GSAP and Framer Motion, bringing digital experiences to life
            with a touch of creativity and innovation. I'm an avid fan of modern
            web development frameworks like Next.js and SvelteKit, constantly
            exploring their potentials to push the boundaries of what's possible
            on the web.
          </span>
          <span>
            I graduated from Mediacollege Amsterdam as a Software Developer in
            2020, and more recently, I earned an Associate Degree in Frontend
            Development and Design from the University of Applied Sciences in
            Amsterdam in 2023. My academic journey has equipped me with a solid
            foundation in both theoretical knowledge and practical skills,
            enabling me to excel in the dynamic field of web development and
            animation.
          </span>
          <span>
            Beyond the screen, I have a strong passion for fitness and
            powerlifting. I believe in maintaining a balanced lifestyle, and the
            gym is where I channel my energy and stay motivated. Powerlifting
            has taught me discipline, perseverance, and the importance of
            setting and achieving goals, qualities that I bring into my
            professional life as well. Whether it's coding the next interactive
            web project or hitting a new personal record at the gym, I'm driven
            by a desire to learn, grow, and create.
          </span>
        </p>
      </div>
      <div className={s.sticky}>
        <Image
          src="/images/profile.JPG"
          alt="Justin"
          width={1920}
          height={1080}
          className={s["about-image"]}
        />
      </div>
    </section>
  );
}
