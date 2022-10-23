import type { PageServerLoad } from './$types';
import { client } from '$lib/vendors/utils';

export const load: PageServerLoad = async () => {
	const query = `
        query Timelines {
                timelines {
                    link
                    title
                    timeEnd
                    timeStart
                    description
                }
            }`;
	const data = await client({ query, fetch: fetch });
	return {
		timelines: data.timelines
	};
};
