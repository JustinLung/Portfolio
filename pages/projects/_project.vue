<template>
  <div>
    <section>
      <h2>{{ this.title }}</h2>
    </section>
    <main>
      <p>{{ this.description }}</p>
      <section>
        <h3>Skills Used</h3>
        <div class="tag-container"></div>
      </section>
      <figure>
      </figure>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $content }) {
    const projectParam = params.project; // When calling /abc the slug will be "abc"
    const project = await $content("projects").search(projectParam).fetch();
    const { title, description, createdAt, updatedAt } = project[0];
    return { title, description, createdAt, updatedAt };
  },
  methods: {
    projectImage(image) {
      return require(`~/assets/${image}`);
    },
  },
};
</script>
<style scoped>

div {
  padding: 1.5em;
}

h2 {
  font-size: 2rem;
  padding-bottom: .5em;
}

h3 {
  font-size: 1.2rem;
  margin-top: 1em;
}

figure {
  width: 100%;
  height: 20em;
  background-color: var(--purple);
  border-radius: 0.5em;
}

@media(min-width: 48em) {
  div {
    padding: 3em;
  }

  h2 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.3rem;
  }

  figure {
    height: 35em;
  }
}

</style>
