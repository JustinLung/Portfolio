<template>
    <div>
      <section class="project-image-section">
        
      </section>

        <h1>{{this.title}}</h1>
        <p>{{this.description}}</p>
    </div>
</template>

<script>
  export default {
    async asyncData({ params, $content }) {
      const projectParam = params.project // When calling /abc the slug will be "abc"
      const project = await $content('projects').search(projectParam).fetch()
      const {title, description, createdAt, updatedAt} = project[0]
      return { title, description, createdAt, updatedAt }
    }
  }
</script>
<style scoped>

div {
  padding: 0 1em;
}
</style>