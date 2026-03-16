import Image from "next/image";
import s from "./About.module.css";
import cn from "clsx";
import { AboutRecord } from "@lib/generated/sdk";
import { motion } from "framer-motion";
import { easeOutExpo } from "@/utils/transitions";
import { container } from "@/components/features/layout/Header/Header";

interface AboutProps {
  data: AboutRecord;
}

const experience = [
  {
    href: "https://ma-web.nl/",
    title: "Mediacollege Amsterdam",
    experience: "MBO-4 Software Developer 2017-2020",
  },
  {
    href: "https://enginebranding.nl/",
    title: "Engine Branding & Identity",
    experience: "Intern Frontend Developer 2019-2019",
  },
  {
    href: "https://gumgum.com/",
    title: "JustPremium B.V.",
    experience: "Intern Frontend Developer 2019-2020",
  },
  {
    href: "https://fdnd.nl/",
    title: "University of Applied Sciences",
    experience: "AD FDND 2021-2023",
  },
  {
    href: "https://merlin.studio/",
    title: "Merlin Studio",
    experience: "Junior Frontend Developer 2023-2024",
  },
  {
    href: "https://endeavour.nl/",
    title: "Endeavour",
    experience: "Junior Shopify Developer 2024-present"
  }
];

export function About(props: AboutProps) {
  const { data } = props;
  return (
    <section className={s.about}>
      <motion.div
        className={s.sticky}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.2 } }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: easeOutExpo }}
      >
        <Image
          src={data.image?.url as string}
          alt={data.image?.alt as string}
          width={1920}
          height={1080}
          className={s["about-image"]}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.2 } }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: easeOutExpo }}
        className={s.content}
      >
        <h2>{data.aboutContent?.title}</h2>
        <p className={s.contentText}>
          <span>
  I'm Justin Lung, a 25-year-old front-end developer based in the
  vibrant city of Amsterdam. My focus lies in modern web development
  and building scalable, responsive web interfaces with a strong
  emphasis on performance and accessibility. I enjoy translating
  design concepts into functional digital experiences and crafting
  interactive interfaces that feel smooth and intuitive for users.
</span>
<span>
  I graduated from Mediacollege Amsterdam as a Software Developer in
  2020, and later earned an Associate Degree in Frontend Development
  and Design from the University of Applied Sciences in Amsterdam in
  2023. My work primarily involves technologies such as JavaScript,
  TypeScript, HTML, and CSS, alongside modern frameworks including
  React (Next.js) and Svelte (SvelteKit). I also work with animation
  libraries like GSAP and Framer Motion, and regularly develop within
  e-commerce environments using Shopify Liquid, GraphQL, and Tailwind
  CSS.
</span>
<span>
  Outside of development, I have a strong passion for fitness and
  powerlifting. Consistent training has taught me discipline,
  perseverance, and the importance of long-term progress. These same
  principles influence my approach to development, where continuous
  learning, experimentation, and refinement play a key role in
  improving both technical skills and the quality of the work I
  produce.
</span>
        </p>

        <div className={s["experience-container"]}>
          <h2>Experience</h2>
          {experience.map((project, i) => (
            <div key={i} className={s.experience}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(s.maxWidth, s.projectTitle)}
              >
                {project.title}
              </a>
              <span className={s.alignRight}>{project.experience}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
