<template>
  <header>
    <h1>Portfolio</h1>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/#work">Works</nuxt-link></li>
        <li><nuxt-link to="/#about">About</nuxt-link></li>
        <li>
          <nuxt-link to="/#contact" class="cta-purple">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {};
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
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
}
ul li {
  margin-right: 3rem;
  font-size: 1.125rem;
}
ul li:nth-of-type(1) {
  margin-left: auto;
}
ul li:nth-of-type(4) {
  margin: 0;
}
.hamburger-menu {
  position: relative;
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
  background-color: white;
  position: absolute;
}
.hamburger-line:first-child {
  top: 0;
  transition: top 0.3s 0.3s, transform 0.3s;
}
.hamburger-line:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s 0.3s;
}
.hamburger-line:last-child {
  bottom: 0;
  transition: bottom 0.3s 0.3s, transform 0.3s;
}
.cta-purple {
  padding: 0.5em 2em;
}
@media (max-width: 50em) {
  header {
    padding: 1.5em .5em;
  }

  h1 {
    font-size: 1.8rem;
  }
  nav ul {
    display: none;
  }
}
</style>
