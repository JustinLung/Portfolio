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
  mounted() {
    const animate = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    });

    animate.forEach((entry) => {
      observer.observe(entry);
    });
  },
};
</script>
<style>

</style>
