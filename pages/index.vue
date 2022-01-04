<template>
  <main>
    <Home />
    <Works />
    <About />
    <Contact />
  </main>
</template>

<script>
import Home from "../components/Home.vue";
import Works from "~/components/Works.vue";
export default {
  transition: {
    name: "layout",
    mode: "out-in",
  },
  components: { Home, Works },
};
</script>
