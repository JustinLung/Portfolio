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
  </div>
</template>
<script></script>
<style scoped>
div {
  display: flex;
  flex-direction: column-reverse;
}
#home {
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

img {
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
    max-width: 90%;
    max-height: 90%;
  }
}

@media (min-width: 62em) {
  div {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }
}
</style>
