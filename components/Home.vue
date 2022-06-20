<template>
  <div>
    <section id="home">
      <h2 class="home-heading">
        <span>Creative</span> Designer <br />
        & Developer.
      </h2>
      <p class="home-text">
        👋 Hi, i’m Justin Lung. A passionate Front End Developer based in the
        Netherlands.
      </p>
      <NuxtLink to="/#work" class="cta cta-purple cta-home"
        >See my works</NuxtLink
      >
      <NuxtLink to="/#contact" class="cta cta-white cta-home"
        >Message me</NuxtLink
      >
    </section>
    <figure>
      <img
        src="~assets/visuals/hero-img.png"
        alt="hero-image"
        class="hero-image"
      />
    </figure>
    <div class="socials-container">
      <ul>
        <li>
          <a href="https://instagram.com/justinlung_" target="_blank"
            ><img
              src="~assets/icons/instagram-logo.svg"
              alt="Instagram"
              rel="noreferrer"
          /></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/justin-lung-1a0753127/?originalSubdomain=nl"
            target="_blank"
            ><img
              src="~assets/icons/linkedin-logo.svg"
              alt="Linkedin"
              rel="noreferrer"
          /></a>
        </li>
        <li>
          <a href="http://github.com/justinlung" target="_blank"
            ><img
              src="~assets/icons/github-logo.svg"
              alt="github"
              rel="noreferrer"
          /></a>
        </li>
      </ul>
      <a href="#work" class="arrow-container">
        SCROLL DOWN
        <img src="~assets/icons/arrow.svg" alt="arrow" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ctaHover: false,
    };
  },
  mounted: function () {
    let tl = gsap.timeline({
      defaults: { ease: "power.4inOut", duration: 2 },
    });

    tl.from(".home-heading", {
      duration: 1,
      delay: 1,
      y: 200,
      skewY: 10,
      opacity: 0,
      stagger: { amount: 0.5 },
    })
      .to(
        ".home-text",
        {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%",
          opacity: 1,
          duration: 1,
        },
        "-=1"
      )
      .from(".cta, .hero-image", { duration: 0.5, opacity: 0 }, "-=1");
  },
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column-reverse;
  padding: 1em 0;
  max-width: 1440px;
  margin: auto;
}

br {
  display: none;
}

.socials-container {
  position: absolute;
  display: none;
}

#home {
  position: relative;
  padding: 0 1em;
  text-align: center;
}

section > h2 {
  font-size: 1.7rem;
  cursor: default;
  opacity: 1;
}

h2 span:hover {
  cursor: pointer;
  color: var(--purple);
}

section > p {
  font-size: 1.1rem;
  margin: 1em 0;
  cursor: default;
  max-width: 26em;
  margin-inline: auto;
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  opacity: 0;
}

.cta {
  opacity: 1;
}

.cta-purple,
.cta-white {
  padding: 0.5em 1em;
}

.cta-purple {
  margin-right: 0.5em;
}

figure {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5em auto 2em;

  overflow: hidden;
  width: 25rem;
  height: 25rem;
  border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
  background: rgb(56, 51, 67);
  background: linear-gradient(
    209deg,
    rgba(56, 51, 67, 1) 0%,
    rgba(115, 83, 186, 1) 48%,
    rgba(149, 110, 236, 1) 100%
  );

  animation: morph 3.75s linear infinite;
}

figure > img {
  margin: 2em auto;
  width: 16em;
  pointer-events: none;
}

@media (min-width: 48em) {
  div:first-child {
    padding: 10em 3em 0;
  }
  section > h2 {
    font-size: 3rem;
  }

  section > p {
    font-size: 1.5rem;
  }

  section .cta-purple,
  section .cta-white {
    padding: 0.5em 2em;
    font-size: 1.2rem;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

@media (min-width: 62em) {
  div {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #home {
    text-align: left;
  }

  br {
    display: block;
  }

  .socials-container {
    display: block;
    right: 2.5em;
  }
  .socials-container ul > li {
    margin: 1em 0;
  }

  .arrow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    cursor: pointer;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  .arrow-container > img {
    transition: 0.3s ease;
  }

  .arrow-container > img:hover {
    transform: translateY(10px);
  }
}
</style>
