<template>
  <div>
    <section id="home">
      <h2>
        <span>Creative</span> Designer <br />
        & Developer.
      </h2>
      <p>
        Hi, i’m Justin Lung. A passionate Front End Developer <br />
        based in the Netherlands.
      </p>
      <NuxtLink to="/#work" class="cta-purple">See my works</NuxtLink>
      <NuxtLink to="/#contact" class="cta-white">Message me</NuxtLink>
    </section>
    <figure>
      <img src="~assets/visuals/hero-img.png" alt="" />
    </figure>
    <div class="socials-container">
      <ul>
        <li>
          <a href="https://instagram.com/justinlung_" target="_blank"
            ><img src="~assets/icons/instagram-logo.svg" alt="Instagram"
          /></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/justin-lung-1a0753127/?originalSubdomain=nl"
            target="_blank"
            ><img src="~assets/icons/linkedin-logo.svg" alt="Linkedin"
          /></a>
        </li>
        <li>
          <a href="https://instagram.com/justinlung_" target="_blank"
            ><img src="~assets/icons/github-logo.svg" alt="github"
          /></a>
        </li>
      </ul>
      <a href="#work" class="arrow-container">
        <p>SCROLL DOWN</p>
        <a href="#work"><img src="~assets/icons/arrow.svg" alt="arrow" /></a>
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
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column-reverse;
  padding: 1em 0;
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
  margin-top: 5em;
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
  div:first-child {
    padding-top: 10em;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    cursor: pointer;
  }

  .arrow-container > p {
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  .arrow-container a > img {
    transition: 0.3s ease;
  }

  .arrow-container a > img:hover {
    transform: translateY(10px);
  }
}
</style>
