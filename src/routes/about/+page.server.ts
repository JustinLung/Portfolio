import { fetchDatoCMS } from "$lib/util/dato";

export async function load() {
    const query = `
   query AboutPage {
  about {
    image {
      alt
      url
    }
    title
    intro
    description
    experienceTitle
    experience {
      url
      jobPosition
      startyear
      endyear
      company
    }
    cardStackTitle
    cardStackImages {
      alt
      url
    }
  }
}
  `;
  const data = await fetchDatoCMS<any>(query);
  return { about: data.about };
}