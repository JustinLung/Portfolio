import { fetchDatoCMS } from "$lib/util/dato";

export async function load() {
    const query = `
    
        query ProjectsPage {
            allWorks {
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
        }
  `;
  const data = await fetchDatoCMS<any>(query);
  return { projects: data.allWorks };
}