<template>
  <section id="contact">
    <h2>Connect with me</h2>
    <ul>
      <li>
        <a href="https://www.instagram.com/justinlung_/" target="_blank"
          >Instagram</a
        >
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/justin-lung-1a0753127/"
          target="_blank"
          >Linkedin</a
        >
      </li>
      <li>
        <a href="https://github.com/JustinLung" target="_blank">Github</a>
      </li>
    </ul>
    <a href="mailto:justinlung77@gmail.com" class="cta-purple"
      >Send me a message</a
    >
  </section>
</template>
<style scoped>
section > h2 {
  text-align: center;
  font-size: 2rem;
  margin-top: 1.5em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 1.5em 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
}

ul > li {
  font-size: 1.5rem;
}

li > a {
  text-decoration: underline !important;
}

li > a:hover {
  color: var(--purple);
}

.cta-purple {
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5em 2em;
  margin: 0 auto;
}

@media (prefers-color-scheme: light) {
  .cta-purple:hover {
    color: var(--color-black);
  }
}

@media (min-width: 48em) {
  section {
    padding: 3em 0;
  }

  section > h2 {
    font-size: 2.5rem;
  }

  ul {
    flex-direction: row;
  }

  ul > li {
    margin: 0.5em;
  }
}
</style>
