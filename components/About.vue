<template>
  <section id="about">
    <div class="about-wrapper">
      <div class="blob-container">
        <div class="blob">
          <img src="~assets/visuals/memoji.png" alt="Justin Memoji" />
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
          Vue.js and Svelte. (I've also started learning React! 🎉) I’m never
          done with learning new things and hope to learn more along the road.
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

.about-wrapper {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.about-wrapper .cta-purple {
  display: inline-block;
  font-size: var(--font-size-xs);
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
  width: 20rem;
  height: 20rem;
  border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
  background: linear-gradient(
    209deg,
    rgba(56, 51, 67, 1) 0%,
    rgba(115, 83, 186, 1) 48%,
    rgba(149, 110, 236, 1) 100%
  );

  animation: morph 3.75s linear infinite;
}

.about-wrapper .blob > img {
  max-width: 70%;
  max-height: 70%;
  width: 100%;
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
    font-size: var(--font-size-l);
  }

  .about-wrapper .text-container > p {
    font-size: var(--font-size-xs);
  }
  .about-wrapper .blob-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-wrapper .blob {
    width: 25rem;
    height: 25rem;
  }
}
</style>
