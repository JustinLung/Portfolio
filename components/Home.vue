<template>
  <div>
    <section id="home">
      <h2 class="skew-animation">
        <span>Creative</span> Designer <br />
        & Developer.
      </h2>
      <p class="skew-animation">
        Hi, i'm Justin Lung. A passionate Front End Developer <br />
        based in the Netherlands.
      </p>
      <nuxt-link to="/#work" class="cta-purple opacity">See my works</nuxt-link>
      <nuxt-link to="/#contact" class="cta-white opacity">Message me</nuxt-link>
    </section>
    <figure>
      <img src="~assets/hero-img.png" />
    </figure>
    <div class="socials-container">
      <ul>
        <li>
          <a href="https://instagram.com/justinlung_" target="_blank"
            ><img
              src="~assets/instagram-logo.svg"
              alt="Instagram"
              class="skew-animation"
          /></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/justin-lung-1a0753127/?originalSubdomain=nl"
            target="_blank"
            ><img
              src="~assets/linkedin-logo.svg"
              alt="Linkedin"
              class="skew-animation"
          /></a>
        </li>
        <li>
          <a href="https://github.com/JustinLung" target="_blank"
            ><img
              src="~assets/github-logo.svg"
              alt="github"
              class="skew-animation"
          /></a>
        </li>
      </ul>
      <a href="#work" class="arrow-container">
        <p class="skew-animation">SCROLL DOWN</p>
        <img src="~assets/arrow.svg" alt="arrow" class="skew-animation" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const tl = gsap.timeline();
    tl.from(".skew-animation", {
      duration: 1.8,
      delay: 0.5,
      y: 200,
      skewY: 10,
      stagger: {
        amount: 0.4,
      },
      opacity: 0,
      ease: "power4.out",
    });

    tl.from(".opacity", {
      opacity: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.out",
    });
  },
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column-reverse;
}

.socials-container {
  position: absolute;
  display: none;
}

#home {
  position: relative;
  padding: 0 1em;
  margin-inline: auto;
  text-align: center;
}

section > h2 {
  font-size: 1.7rem;
  cursor: default;
}

h2 > span:hover {
  color: var(--purple);
}

.skew-animation {
  opacity: 1;
}

.opacity {
  opacity: 1;
}

section > p {
  font-size: 1.3rem;
  margin: 0.7em 0;
  cursor: default;
}

br {
  display: none;
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
}

figure > img {
  margin: 2em auto;
  max-width: 75%;
  max-height: 75%;
  animation: up-and-down infinite alternate ease 2s;
  pointer-events: none;
}

@keyframes up-and-down {
  from {
    transform: translateY(-2em);
  }

  to {
    transform: translateY(2em);
  }
}

@media (min-width: 48em) {
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

  figure > img {
    max-width: 90%;
    max-height: 90%;
  }
}

@media (min-width: 62em) {
  br {
    display: block;
  }

  #home {
    text-align: left;
  }

  div {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #home {
    margin: 10em 0;
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
    flex-direction: column;
    gap: 1em;
    cursor: pointer;
  }

  .arrow-container > p {
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  .arrow-container > img {
    transition: 0.3s ease;
    align-self: center;
    width: 70%;
  }

  .arrow-container > img:hover {
    transform: translateY(10px);
  }
}
</style>
