<template>
  <div>
    <section id="home">
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
      <div class="circle-container">
        <div class="circle">
          <img src="../static/assets/hero-img.png" alt="hero-img" />
        </div>
      </div>
    </section>
    <section id="about">
      <div class="circle-container">
        <div class="circle">
          <img src="../static/assets/about-img.png" alt="about-img" />
        </div>
      </div>
      <div class="text-container">
        <h2>About me</h2>
        <p>
          My name is Justin Lung I am 19 years old, born and raised in a small
          country called The Netherlands. Currently studying at Amsterdam
          University of Applied Sciences.
        </p>
        <p>
          I started as a Front End Developer in 2018. Since then I have been
          dedicating my life to build beautiful digital products made with
          Vue.js and Svelte. I’m never done with learning new things and hope to
          learn more along the road.
        </p>
        <NuxtLink to="/" class="cta-purple">Resume</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  transition: {
    name: "layout",
    mode: "out-in",
  },
};
</script>
<style>
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-active {
  opacity: 0;
}

/* HOME SECTION */

#home {
  /* Positioning */

  /* Box-model */
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 2em 0;
  padding: 0 0.5em;
  /* Typography */

  /* Visual */

  /* Misc */
  
}

#home .text-container,
#home .circle-container {
  flex: 1;
}

#home .text-container {
  margin: auto;
}

#home .circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#home div > h2 {
  font-size: 2rem;
  margin-bottom: 0;
}

#home div > p {
  font-size: 1rem;
}

#home .cta-purple,
#home .cta-white {
  padding: 0.5em 1.2em;
  font-size: 1rem;
}

#home .circle {
  background: #7353ba;
  width: 25vw;
  height: 25vw;
  border-radius: 50%;

  display: none;
  justify-content: center;
  align-items: center;

  margin-top: 2em;
}

#home .circle > img {
  max-width: 70%;
  max-height: 70%;
}

@media (min-width: 30em) {
  #home div > h2 {
    font-size: 2.5rem;
  }
  #home div > p {
    font-size: 1.3rem;
  }
}

@media (min-width: 50em) {
  #home div > h2 {
    font-size: 3.2rem;
  }
}

@media (min-width: 60em) {
  #home {
    max-width: 1440px;
    margin: 0 auto;
    flex-direction: row;
  }

  #about {
    flex-direction: row;
  }

  #home .text-container {
    margin-left: 3em;
  }

  #home .circle {
    display: flex;
  }
}
</style>
