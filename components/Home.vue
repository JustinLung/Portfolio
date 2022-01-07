<template>
  <div>
    <section id="home">
      <h2>
        Creative Designer <br />
        & Developer.
      </h2>
      <p>
        Hi, i’m Justin Lung. A passionate Front End Developer <br />
        based in the Netherlands.
      </p>
      <nuxt-link to="/#work" class="cta-purple">See my works</nuxt-link>
      <nuxt-link to="/#contact" class="cta-white">Message me</nuxt-link>
    </section>
    <figure>
      <img src="~assets/hero-img.png" alt="" />
    </figure>
    <div class="socials-container">
      <ul>
        <li>
          <a href="https://instagram.com/justinlung_" target="_blank"
            ><img src="~assets/instagram-logo.svg" alt="Instagram"
          /></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/justin-lung-1a0753127/?originalSubdomain=nl"
            target="_blank"
            ><img src="~assets/linkedin-logo.svg" alt="Linkedin"
          /></a>
        </li>
        <li>
          <a href="https://instagram.com/justinlung_" target="_blank"
            ><img src="~assets/github-logo.svg" alt="github"
          /></a>
        </li>
      </ul>
      <div class="arrow-container">
        <p>SCROLL DOWN</p>
        <a href="#work"><img src="~assets/arrow.svg" alt="arrow" /></a>
      </div>
    </div>
  </div>
</template>
<script></script>
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
}

section > p {
  font-size: 1.1rem;
  margin: 1em 0;
}

.cta-purple,
.cta-white {
  padding: 0.3em 1em;
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

  .arrow-container a > img {
    transition: 0.3s ease;
  }

  .arrow-container a > img:hover {
    transform: translateY(10px);
  }
}
</style>
