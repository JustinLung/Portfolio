import { fetchDatoCMS } from "$lib/util/dato";

export async function load() {
    const query = `
    
        query HomePage {
            homepage {
                title
                subtitle
                highlightText
                featuredProjects {
                    project {
                        title
                        tags {
                            tag
                        }
                        image {
                            url
                            title
                            alt
                        }
                    }
                }
                featuredProjectTitle
                featuredProjectSubtitle
                blogTitle
                featuredBlogPosts {
                image {
                    url
                    title
                    alt
                }
                title
                }
            }
        }
  `;
  const data = await fetchDatoCMS<any>(query);
  return { homepage: data.homepage };
}