<template>
  <div>
    <section id="blog">
      <h2>🎉 Welcome To My Blog!</h2>
      <p>
        For all my blogposts about my latest projects or projects where I am
        currently working on.
      </p>
      <NuxtLink to="/" class="cta-white">Return Home</NuxtLink>
      <NuxtLink to="/#work" class="cta-white">View Projects</NuxtLink>
    </section>
    <section id="articles">
      <h2>Blog Posts</h2>
      <div class="articles">
        <div class="article" v-for="article of articles" :key="article">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <div class="article-inn">
              <img :src="require(`~/assets/resources/${article.img}`)" alt="" />
              <div class="detail">
                <h3>{{ article.title }}</h3>
                <p>{{ article.description }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Blog",
  transition: {
    name: "layout",
    mode: "out-in",
  },
  async asyncData({ $content, params }) {
    const articles = await $content("blog", params.slug)
      .only(["title", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
    };
  },
};
</script>
<style scoped>
#blog {
  background-color: var(--light-purple);
  padding: 10em 1.5em;
}

#blog h2 {
  font-size: 2rem;
}

#blog p {
  font-size: 1.2rem;
  max-width: 30em;
  margin-bottom: 1em;
}

.cta-white {
  color: var(--purple);
  padding: 0.5em 1.7em;
}

.cta-white:hover {
  color: var(--white);
}

#articles {
  height: auto;
  padding: 3em 1.5em 0;
}

#articles h2 {
  font-size: 1.8rem;
  padding-bottom: 0.5em;
}

.articles {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
}

#articles .article {
  padding: 2em;
  border-radius: 0.5em;
  background-color: var(--light-purple);
}

#articles img {
  width: 100%;
  border-radius: 0.5em;
}

a {
  color: var(--white);
}

@media (min-width: 50em) {
  .cta-white {
    padding: 0.5em 2em;
  }
  #blog {
    padding: 15em 3em;
  }

  #blog h2 {
    font-size: 2.5rem;
  }

  #blog p {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  #articles {
    padding: 5em 3em;
  }

  .articles {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 65em) {
  .articles {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
