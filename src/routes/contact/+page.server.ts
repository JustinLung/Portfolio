import { fail } from '@sveltejs/kit';
import { z } from 'zod';

const schema = z.object({
	name: z.string().min(2, 'Name is too short'),
	email: z.string().email('Invalid email'),
	message: z.string().min(10, 'Message is too short')
});

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const name = formData.get('name') as string;
			const email = formData.get('email') as string;
			const message = formData.get('message') as string;

			// Validate form data using Zod
			const validation = schema.safeParse({ name, email, message });
			if (!validation.success) {
				return fail(400, { error: validation.error.errors[0].message });
			}

			// Send data to Formspree
			const res = await fetch('https://formspree.io/f/mjkgrobl', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, message })
			});

			if (!res.ok) {
				return fail(500, { error: `Form submission failed: ${res.status}` });
			}

			return { success: true };
		} catch (err) {
			console.error('Error:', err);
			return fail(500, { error: 'Unexpected error occurred' });
		}
	}
};