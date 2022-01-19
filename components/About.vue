<template>
  <section id="about">
    <div class="about-wrapper">
      <div class="circle-container">
        <div class="circle">
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
<script></script>
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
  font-size: 1.2rem;
  padding: 0.5em 3em;
  margin: 1em auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.about-wrapper .circle-container {
  margin: 2em auto;
}

.about-wrapper .circle {
  background: var(--purple);
  width: 85vw;
  height: 85vw;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.about-wrapper .circle > img {
  max-width: 70%;
  max-height: 70%;
  animation: up-and-down infinite alternate ease 2s;
}

@keyframes up-and-down {
  from {
    transform: translateY(-2em);
  }

  to {
    transform: translateY(2em);
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
  .about-wrapper .circle-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-wrapper .circle {
    width: 40vw;
    height: 40vw;
  }
}

@media (min-width: 80em) {
  .about-wrapper .circle {
    width: 25vw;
    height: 25vw;
  }
}
</style>
