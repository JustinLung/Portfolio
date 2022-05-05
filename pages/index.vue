<template>
  <div>
    <Home />
    <Works />
    <About />
    <Contact />
  </div>
</template>

<script>
export default {
  transition: {
    name: "layout",
    mode: "out-in",
  },
};
</script>
