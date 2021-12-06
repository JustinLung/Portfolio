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
        <nuxt-link to="/#works" class="cta-purple">See my works</nuxt-link>
        <nuxt-link to="/#works" class="cta-white">Message me</nuxt-link>
      </div>
      <div class="circle">
        <img src="../static/assets/hero-img.png" al4t="hero-img" />
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
<style>
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
p {
  font-size: 1rem;
}
.cta-purple,
.cta-white {
  padding: 0.5em 1.2em;
  font-size: 1rem;
}
.circle {
  background-color: #7353ba;
  border-radius: 15em;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30em;
  height: 30em;

  margin-left: 10em;
}
.circle > img {
  max-width: 70%;
  max-height: 70%;
}

@media (max-width: 768px) {

  #home h2 {
    font-size: 2rem;
  }

  br {
    display: none;
  }

  #home .circle {
    width: 15em;
    height: 15em;
  }
}

@media (max-width: 992px) {
  #home {
    flex-direction: column;
  }

  #home .circle {
    margin: 2em 0;
  }
}
</style>
