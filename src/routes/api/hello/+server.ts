import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ params, url, request }) => {
	const showError = false;
	if (showError) {
		error(400, {
			message: 'Oops, something went wrong'
		});
	}

	return new Response(String('Hello world!'), {
		status: 200,
		statusText: '',
		headers: {}
	});
};
