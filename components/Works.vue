<template>
  <section id="work">
    <h2 class="work-title">Latest projects</h2>
    <div class="work-container">
      <section
        v-for="(project, index) in this.works"
        :key="index"
        class="project"
      >
        <figure class="thumbnail">
          <img
            :src="projectImage(project.image)"
            alt="project image"
            class="work-image"
          />
        </figure>
        <h3>{{ project.homeTitle }}</h3>
        <p>
          {{ project.homeDescription }}
        </p>
        <NuxtLink :to="project.path" class="cta-white">🚀 See More</NuxtLink>
      </section>
    </div>

    <h3 class="github-text">
      And many more projects can be found on my
      <a
        href="https://github.com/JustinLung"
        target="_blank"
        class="github-link"
        rel="noreferrer"
        >Github!</a
      >
    </h3>
  </section>
</template>
<script>
export default {
  data: () => ({
    works: [],
  }),
  async fetch() {
    try {
      this.works = await this.$content("projects").fetch();
      this.works.reverse();
    } catch (err) {
      console.log(err);
    }
  },
  fetchOnServer: false,
  methods: {
    projectImage(image) {
      return require(`~/assets/${image}`);
    },
  },
};
</script>
<style scoped>
#work {
  padding: 0 1em;
  margin-top: 5em;
}

#work .work-container {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr;
}

.work-title {
  text-align: center;
}

h3 {
  font-size: var(--font-size-s);
}

.work-container section > p {
  font-size: var(--font-size-xs);
  margin-bottom: 0.3em;
}

.github-text {
  margin: 4em 0;
  font-size: var(--font-size-md);
  text-align: center;
}

.github-link {
  color: var(--purple);
}

.thumbnail {
  background-color: var(--purple);
  width: 100%;
  height: 25em;
  border-radius: 0.5em;

  margin: 1em 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.work-image {
  width: 90%;
}

.cta-white {
  margin-top: 0.7em;
  padding: 0.3em 2em;
}

@media (min-width: 45em) {
  #work {
    max-width: 1440px;
    margin: 3em auto;
  }
  .work-title {
    text-align: left;
    font-size: var(--font-size-md);
  }

  #work .work-container {
    grid-template-columns: 1fr 1fr;
    gap: 2em;
  }

  .work-container > section:nth-child(2),
  .work-container > section:nth-child(4) {
    margin-top: 3em;
  }

  .thumbnail {
    width: 100%;
    height: 25em;
  }

  .work-container section > p {
    margin-bottom: 1em;
  }

  .cta-white {
    padding: 0.5em 2.3em;
  }
}

@media (min-width: 60em) {
  #work {
    padding: 3em 3em;
  }
}
</style>
