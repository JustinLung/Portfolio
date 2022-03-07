<template>
  <footer>
    <section class="footer-wrapper">
      <h3>Portfolio</h3>
      <ul>
        <li class="footer-title">Menu</li>
        <li><NuxtLink to="/" class="underline">Home</NuxtLink></li>
        <li><NuxtLink to="/#work" class="underline">Work</NuxtLink></li>
        <li><NuxtLink to="/#about" class="underline">About</NuxtLink></li>
        <li><NuxtLink to="/#contact" class="underline">Contact</NuxtLink></li>
      </ul>
      <ul>
        <li class="footer-title">Social</li>
        <li>
          <a
            href="https://instagram.com/justinlung_"
            class="underline"
            target="_blank"
            rel="noreferrer"
            >Instagram</a
          >
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/justin-lung-1a0753127/?originalSubdomain=nl"
            class="underline"
            target="_blank"
            rel="noreferrer"
            >Linkedin</a
          >
        </li>
        <li>
          <a
            href="https://github.com/JustinLung"
            class="underline"
            target="_blank"
            rel="noreferrer"
            >Github</a
          >
        </li>
      </ul>
    </section>
    <section class="footer-copyright-wrapper">
      <h3>©Justin Lung 2021</h3>
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

.footer-copyright-wrapper h3 {
  font-size: 1.2rem;
  font-weight: normal;
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
