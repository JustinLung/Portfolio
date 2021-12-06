<template>
    <div>
        <h1>Slug</h1>
        <p>{{this.slug}}</p>
    </div>
</template>

<script>
  export default {
    async asyncData({ params }) {
      const slug = params.slug // When calling /abc the slug will be "abc"
      return { slug }
    }
  }
</script>