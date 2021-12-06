<template>
  <div>
    <section id="home">
      <div>
        <h2>
          creative designer <br />
          & developer.
        </h2>
        <p>
          Hi, i’m Justin Lung. A passionate Front End Developer <br />
          based in the Netherlands.
        </p>
        <NuxtLink to="/#works" class="cta-purple">See my works</NuxtLink>
        <NuxtLink to="/#works" class="cta-white">Message me</NuxtLink>
      </div>
      <div class="circle">
        <img src="../static/assets/hero-img.png" al4t="hero-img" />
      </div>
    </section>
    <!-- <section id="work">
      <div class="circle">
        <img src="../static/assets/hero-img.png" al4t="hero-img" />
      </div>
      <div>
        <h2>About Me</h2>
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
        <button class="cta-purple">Resume</button>
      </div>
    </section> -->
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

#home {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2em;
}

#home h2 {
  font-size: 3.2rem;
  margin-bottom: 0;
}

#home p {
  font-size: 1.3rem;
}

#home .cta-purple,
#home .cta-white {
  padding: 0.5em 1.2em;
  font-size: 1rem;
}

#home .circle {
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  background: #7353ba;

  display: flex;
  justify-content: center;
  align-items: center;
}

#home .circle > img {
  max-width: 70%;
  max-height: 70%;
}

@media(max-width: 1000px) {
  #home {
    flex-direction: column;
  }

  #home h2 {
    font-size: 2.5rem;
  }

  #home .circle {
    margin: 2em 0;
  }
}

@media(max-width: 130§0px) {
    #home .circle {
      width: 25em;
      height: 25em;
    }
}
</style>
