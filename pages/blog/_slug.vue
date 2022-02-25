<template>
  <article>
    <nuxt-content :document="article"></nuxt-content>
    <NuxtLink to="/blog">👈 Return to Blog</NuxtLink>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();
    return { article };
  },
};
</script>
<style scoped>

h1 {
  margin-bottom: 2rem !important;
}

article {
  padding: 10em 1.5em 3em;
}

a {
  font-size: 1.2rem;
}

@media (min-width: 45em) {
  article {
    padding: 8em 3em;
  }
  
  a {
    margin-top: 2rem !important;
  }
}
</style>
