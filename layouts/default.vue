<template>
  <div>
    <AppHeader />
    <main>
      <Nuxt />
    </main>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from "~/components/AppFooter.vue";
export default {
  components: { AppFooter },
};
</script>
<style></style>
