import type { PageServerLoad } from './$types';
import { client } from '$lib/vendors/utils';

export const load: PageServerLoad = async () => {
	const query = `
    query Projects {
      projects {
       title
        description 
        githubLink
        projectLink
          image {
            url
         }
      }
}`;
	const data = await client({ query, fetch: fetch });
	console.log(data);
	return {
		projects: data.projects
	};
};
