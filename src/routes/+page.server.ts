import type { PageServerLoad } from './$types';
import { client } from '$lib/vendors/utils';

export const load: PageServerLoad = async () => {
	const query = `
    query Projects {
      projects(first: 2) {
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
