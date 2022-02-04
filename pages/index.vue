<template>
  <div>
    <Home />
    <Works />
    <About />
    <Contact />
  </div>
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
  mounted() {
    const animate = document.querySelector(".circle");
    const textContainer = document.querySelector(".text-container");
    const contact = document.querySelector("#contact");
    const callbackFunction = function (entries) {
      entries.forEach((entry) => {
        const targetClass = entry.target.classList;
        if (entry.isIntersecting) targetClass.add("observed");
        console.log(entries[0]);
      });
    };

    const observer = new IntersectionObserver(callbackFunction, {
      threshold: 1,
    });

    const contactObserver = new IntersectionObserver(callbackFunction, {
      threshold: .7,
    });

    observer.observe(animate);
    observer.observe(textContainer);
    contactObserver.observe(contact);
  },
};
</script>
