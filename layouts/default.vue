<template>
  <div>
    <AppHeader />
    <main>
      <Nuxt />
    </main>
  </div>
</template>
<script>
export default {};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
*,
html {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  background-color: #161618;
  color: #fff;
  font-family: "Poppins", sans-serif;
}
a {
  text-decoration: none;
  color: #fff;
}
.cta-purple {
  background-color: #7353ba;
  color: #fff;
  border-radius: 1.2em;
  border: none;
}
.cta-white {
  background-color: #fff;
  border-radius: 1.2em;
  color: #7353ba;
}
</style>
