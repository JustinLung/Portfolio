<template>
  <section id="about">
    <div class="about-wrapper">
      <div class="blob-container">
        <div class="blob">
          <img src="~assets/visuals/about-img.png" alt="About Image" />
        </div>
      </div>
      <div class="text-container">
        <h2>About Me</h2>
        <p>
          My name is Justin Lung I am 21 years old, born and raised in a small
          country called The Netherlands. Currently studying at Amsterdam
          University of Applied Sciences.
        </p>
        <br />
        <p>
          I started as a Front End Developer in 2018. Since then I have been
          dedicating my life to build beautiful digital products made with
          Vue.js and Svelte. I’m never done with learning new things and hope to
          learn more along the road.
        </p>
        <a href="~assets/cv.pdf" class="cta-purple" download>📄 Resume</a>
      </div>
    </div>
  </section>
</template>
<style scoped>
section {
  background-color: var(--dark-purple);

  width: 100%;
  height: auto;

  padding: 4em 0;
  margin-top: 2em;
}

.observed {
  opacity: 1 !important;
  transition: 0.3s ease;
}

.about-wrapper {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.about-wrapper .cta-purple {
  display: inline-block;
  font-size: 1.2rem;
  padding: 0.5em 3em;
  margin: 1em auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.about-wrapper .blob-container {
  margin: 2em auto;
}

.about-wrapper .blob {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5em auto 2em;

  overflow: hidden;
  width: 25rem;
  height: 25rem;
  border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
  background: var(--purple);
}

.about-wrapper .blob > img {
  max-width: 70%;
  max-height: 70%;
  width: 100%;
}

@keyframes morph {
  0%,
  100% {
    border-radius: 42% 56% 72% 28% / 42% 42% 56% 28%;
  }

  33% {
    border-radius: 72% 28% 48% 48% / 28% 28% 72% 72%;
  }

  66% {
    border-radius: 100% 56% 56% 100% / 100% 100% 56% 56%;
  }
}

.about-wrapper > div:nth-child(2) {
  padding: 0 0.5em;
}

@media (min-width: 48em) {
  .about-wrapper .circle {
    width: 60vw;
    height: 60vw;
  }
}

@media (min-width: 62em) {
  .about-wrapper {
    flex-direction: row;
  }

  .about-wrapper .cta-purple {
    margin: 1em 0;
    padding: 0.5em 3em;
    left: 0;
    transform: translateX(0);
  }

  .about-wrapper .text-container {
    flex: 1;
    margin: auto;
  }

  .about-wrapper .text-container > h2 {
    font-size: 2.2rem;
  }

  .about-wrapper .text-container > p {
    font-size: 1.2rem;
  }
  .about-wrapper .blob-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
