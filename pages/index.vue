<template>
  <div>
    <section id="home">
      <div>
        <h2>
          creative designer <br />
          & developer.
        </h2>
        <p>
          Hi, i’m Justin Lung. A passionate Front End Developer <br> based in the
          Netherlands.
        </p>
        <NuxtLink to="/#works" class="cta-purple">See my works</NuxtLink>
        <NuxtLink to="/#works" class="cta-white">Message me</NuxtLink>
      </div>
      <div class="circle">
        <img src="../static/assets/hero-img.png" al4t="hero-img" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'layout',
    mode: 'out-in'
  }
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

main {
  padding: 0 3em;
}

#home {
  display: flex;
  align-items: center;
  background: red;
}

h2 {
  font-size: 3rem;
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
}
.circle > img {
  max-width: 70%;
  max-height: 70%;
}
</style>
