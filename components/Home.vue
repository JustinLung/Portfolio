<template>
  <section id="home">
    <div class="circle-container">
      <div class="circle">
        <img src="~assets/hero-img.png" alt="hero-img" />
      </div>
    </div>
    <div class="text-container">
      <h2>
        creative designer <br />
        & developer.
      </h2>
      <p>
        Hi, i’m Justin Lung. A passionate Front End Developer based in the
        Netherlands.
      </p>
      <NuxtLink to="/#works" class="cta-purple">See my works</NuxtLink>
      <NuxtLink to="/#works" class="cta-white">Message me</NuxtLink>
    </div>
  </section>
</template>
<script></script>
<style scoped>
/* HOME SECTION */

section {
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  padding: 2em 0;
}

section .text-container {
  padding: 0 0.5em;
}

section .text-container > h2 {
  font-size: 2rem;
}

section .text-container > p {
  font-size: 1rem;
  margin-bottom: 1.5em;
}

section .cta-purple,
section .cta-white {
  padding: 0.5em 1em;
}

section .circle-container {
  margin: 2em auto;
}

section .circle {
  display: flex;
  justify-content: center;
  align-items: center;
}

section .circle > img {
  max-width: 100%;
  max-height: 100%;
}

@media (min-width: 48em) {
  section {
    max-width: 1440px;
    margin: 0 auto;
  }
}

@media (min-width: 62em) {
  section {
    padding: 0 3em;
    flex-direction: row-reverse;
  }

  section .cta-purple,
  section .cta-white {
    padding: 0.5em 2em;
    font-size: 1.2rem;
  }

  section .cta-white {
    margin-left: 1em;
  }

  section .text-container {
    flex: 1;
    margin: auto;
  }

  section .text-container > h2 {
    font-size: 3rem;
  }

  section .text-container > p {
    font-size: 1.5rem;
  }
  section .circle-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 80em) {

  section .circle > img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
