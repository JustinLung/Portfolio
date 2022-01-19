<template>
  <div>
    <section class="header">
      <div></div>
      <h2>{{ this.title }}</h2>
      <img
        :src="projectImage(this.image)"
        alt="project image"
        class="work-image"
      />
    </section>
    <ul class="tags-container">
      <li class="cta-purple" v-for="skill in this.skills" :key="skill">
        {{ skill }}
      </li>
    </ul>
    <main>
      <p>{{ this.description }}</p>
      <ul>
        <li>
          <a
            :href="this.githubLink"
            target="_blank"
            rel="noreferrer"
            class="github-link"
            >View Github Repository</a
          >
        </li>
        <li>
          <a :href="this.liveLink" target="_blank" rel="noreferrer"
            >🌐 View Live Version</a
          >
        </li>
      </ul>
      <figure></figure>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $content }) {
    const projectParam = params.project; // When calling /abc the slug will be "abc"
    const project = await $content("projects").search(projectParam).fetch();
    const {
      title,
      description,
      githubLink,
      liveLink,
      image,
      createdAt,
      updatedAt,
      skills,
    } = project[0];
    return {
      title,
      description,
      githubLink,
      liveLink,
      image,
      createdAt,
      updatedAt,
      skills,
    };
  },
  methods: {
    projectImage(image) {
      return require(`~/assets/${image}`);
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.header div {
  position: absolute;
  top: 0;
  width: 100%;
  height: 90%;
  background-color: var(--light-purple);
  /* clip-path: circle(60em at 50% -80%); */
  transform: scaleX(1.3);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  z-index: -1;
}

.header img {
  width: 22em;
}

h2 {
  font-size: 2rem;
  padding-bottom: 0.5em;
}

figure {
  width: 100%;
  height: 20em;
  background-color: var(--purple);
  border-radius: 0.5em;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.5em;
  gap: 0.5em;
}

.tags-container li {
  padding: 0.5em 1em;
}

.tags-container li:nth-child(even) {
  background-color: var(--color-white);
  color: var(--purple);
}

main {
  font-size: 1.2rem;
  padding: 0 1em;
}

p {
  padding: 2rem 0;
  max-width: 35em;
  margin-inline: auto;
  text-align: center;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin-inline: auto;
  margin-bottom: 1rem;
  color: var(--light-purple);
}

.github-link::before {
  content: "";
  background-image: url("~assets/icons/github-logo.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.5em;
}

a:hover {
  color: var(--purple);
}

a:hover::before {
  filter: brightness(70%);
}

@media (min-width: 48em) {
  .header {
    height: 70vh;
  }

  main {
    padding: 0 3em;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    text-align: left;
  }

  p {
    font-size: 1.3rem;
  }

  a {
    font-size: 1.5rem;
  }

  figure {
    height: 35em;
  }

  .header img {
    width: 45em;
  }

  .tags-container {
    gap: 1em;
  }
}
</style>
