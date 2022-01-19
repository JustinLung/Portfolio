<template>
  <footer>
    <section class="footer-wrapper">
      <h3>Portfolio</h3>
      <ul>
        <li class="footer-title">Menu</li>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/#work">Work</NuxtLink></li>
        <li><NuxtLink to="/#about">About</NuxtLink></li>
        <li><NuxtLink to="/#contact">Contact</NuxtLink></li>
      </ul>
      <ul>
        <li class="footer-title">Social</li>
        <li>
          <a
            href="https://instagram.com/justinlung_"
            target="_blank"
            rel="noreferrer"
            >Instagram</a
          >
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/justin-lung-1a0753127/?originalSubdomain=nl"
            target="_blank"
            rel="noreferrer"
            >Linkedin</a
          >
        </li>
        <li>
          <a
            href="https://github.com/JustinLung"
            target="_blank"
            rel="noreferrer"
            >Github</a
          >
        </li>
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
  color: var(--color-white);
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
