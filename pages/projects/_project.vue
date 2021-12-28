<template>
  <div>
    <section>
      <h2>{{ this.title }}</h2>
    </section>
    <p>{{ this.description }}</p>
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

h2 {
  font-size: 2.5rem;
}
p {
  font-size: 1.3rem;
}
</style>
