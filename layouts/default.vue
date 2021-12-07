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
export default { components: { AppFooter } };
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
*,
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  padding: 0;
  margin: 0;
  background-color: #161618;
  color: #fff;
  font-family: "Poppins", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #fff;
}
.cta-purple {
  all: unset;
  
  background-color: #7353ba;
  color: #fff;
  border-radius: 1.2em;

  transition: .3s ease;
  cursor: pointer;
}
.cta-white {
  all: unset;

  color: #7353ba;
  background-color: #fff;
  border-radius: 1.2em;
  
  transition: .3s ease;
  cursor: pointer;
}

.cta-white:hover,
.cta-purple:hover {
  transform: scale(1.1);
}
</style>
