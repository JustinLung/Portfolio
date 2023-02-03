import type { PageServerLoad } from './$types';
import { client } from '$lib/vendors/utils';

export const load: PageServerLoad = async () => {
  const query = `
       query Projects {
          projects(orderBy: publishedAt_DESC) {
            title
            description 
            githubLink
            projectLink
            image {
              url
            }
            projectTags{
              title
            }
          }
        }`;
  const data = await client({ query, fetch: fetch });
  return {
    projects: data.projects
  };
};
