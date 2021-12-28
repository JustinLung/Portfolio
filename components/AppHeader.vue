<template>
  <header>
    <h1>Portfolio</h1>
    <nav>
      <ul class="nav-list">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/#work">Works</nuxt-link></li>
        <li><nuxt-link to="/#about">About</nuxt-link></li>
        <li>
          <nuxt-link to="/#contact" class="cta-purple">Contact</nuxt-link>
        </li>
      </ul>
      <div
        id="hamburger"
        class="hamburger-menu"
        @click="hamburgerOpen = !hamburgerOpen"
        v-bind:class="{ hamburger__open: hamburgerOpen }"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </div>
      <div class="overlay" v-bind:class="{ overlay__open: hamburgerOpen }">
        <ul class="overlay__list">
          <li>
            <a href="#" @click="hamburgerOpen = !hamburgerOpen">Home</a>
          </li>
          <li>
            <a href="#work" @click="hamburgerOpen = !hamburgerOpen">Works</a>
          </li>
          <li>
            <a href="#about" @click="hamburgerOpen = !hamburgerOpen">About</a>
          </li>
          <li>
            <a href="#contact" @click="hamburgerOpen = !hamburgerOpen"
              >Contact</a
            >
          </li>
          <li>
            <ul class="inside">
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
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data: () => {
    return {
      hamburgerOpen: false,
    };
  },
};
</script>
<style scoped>
header {
  padding: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  flex-grow: 1;
}
.nav-list {
  padding: 0;
  margin: 0;
  display: flex;
}
.nav-list li {
  margin-right: 3rem;
  font-size: 1.125rem;
}

.nav-list li:nth-of-type(1) {
  margin-left: auto;
}
.nav-list li:nth-of-type(4) {
  margin: 0;
}

h1 {
  position: relative;
  z-index: 1001;
}
header nav > .hamburger-menu {
  position: relative;
  margin-left: auto;
  margin-right: 0.5em;
  z-index: 100;
  width: 30px;
  height: 18px;
  display: none;
  cursor: pointer;
  z-index: 1001;
}

.hamburger-menu .hamburger-line {
  width: 30px;
  height: 2px;
  background-color: var(--color-white);
  position: absolute;
}

.hamburger-menu .hamburger-line:first-child {
  top: 0;
  transition: top 0.3s 0.3s, transform 0.3s;
}

.hamburger-menu .hamburger-line:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s 0.3s;
}

.hamburger-menu .hamburger-line:last-child {
  bottom: 0;
  transition: bottom 0.3s 0.3s, transform 0.3s;
}

.hamburger__open .hamburger-line:first-child {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  transition: top 0.2s, transform 0.2s 0.2s;
}

.hamburger__open .hamburger-line:nth-child(2) {
  opacity: 0;
  transition: opacity 0s 0.2s;
}

.hamburger__open .hamburger-line:last-child {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
  transition: bottom 0.3s, transform 0.2s 0.2s;
}

.cta-purple {
  padding: 0.5em 2em;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: var(--dark-purple);
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: inset(0 0 100% 0);
  transition: clip-path 0.4s ease-out;
}

.overlay__list {
  position: relative;
  z-index: 1001;
}

.overlay__list > li {
  font-size: 2.5rem;
  text-align: center;
}

.overlay__open {
  clip-path: inset(0);
}

.inside {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: solid 1px var(--color-white);
  margin-top: 1em;
}

@media (max-width: 48em) {
  header {
    width: 100%;
    padding: 1.5em;
  }

  header nav > .hamburger-menu {
    display: block;
    margin-right: 0;
  }

  h1 {
    font-size: 1.8rem;
  }
  .nav-list {
    display: none;
  }
}
</style>
