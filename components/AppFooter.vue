<template>
  <footer>
    <section class="footer-wrapper">
      <h3>Portfolio</h3>
      <ul>
        <li class="footer-title">Menu</li>
        <li><nuxt-link to="/#">Home</nuxt-link></li>
        <li><nuxt-link to="/#work">Work</nuxt-link></li>
        <li><nuxt-link to="/#about">About</nuxt-link></li>
        <li><nuxt-link to="/#contact">Contact</nuxt-link></li>
      </ul>
      <ul>
        <li class="footer-title">Social</li>
        <li><a href="">Instagram</a></li>
        <li><a href="">Linkedin</a></li>
        <li><a href="">Github</a></li>
      </ul>
    </section>
    <section class="footer-copyright-wrapper">
      <p>©Justin Lung 2021</p>
    </section>
  </footer>
</template>
<script></script>
<style scoped>
footer {
  background-color: #000;
  width: 100%;
  height: auto;
  position: relative;

  padding: 2em;
  margin-top: 2em;
}

h3 {
  font-size: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 1em 0;
}

ul > li:first-child {
  font-size: 1.2rem;
  font-weight: bold;
}

.footer-copyright-wrapper {
  max-width: 750px;
  margin: 0 auto;
  color: #fff;
  border: 0;
  border-top: 0.1em;
  border-style: solid;
  padding: 2em 0;
}

@media (min-width: 48em) {
  .footer-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-wrapper > ul {
    font-size: 1.2rem;
  }

  .footer-wrapper > ul:nth-child(3) {
    margin-left: 2em;
  }

  .footer-wrapper > h3 {
    font-size: 1.7rem;
    margin-right: 2em;
  }
}
</style>
