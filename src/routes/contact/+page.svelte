<script context="module" lang="ts">
	import { enhance } from '$app/forms';
	import { z } from 'zod';
	export const prerender = false;

	let name = '';
	let email = '';
	let message = '';
	let success = false;
	let error = '';

	const schema = z.object({
		name: z.string().min(2, 'Name is too short'),
		email: z.string().email('Invalid email'),
		message: z.string().min(10, 'Message is too short')
	});

	async function handleSubmit(event: Event) {
		event.preventDefault();
		error = '';
		success = false;

		const validation = schema.safeParse({ name, email, message });
		if (!validation.success) {
			error = validation.error.errors[0].message;
			return;
		}

		try {
			const res = await fetch('/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, message })
			});

			// Check if the response is valid and handle accordingly
			const result = await res.json();
			console.log('Received result from server:', result);

			if (result.success) {
				success = true;
				name = email = message = ''; // Clear form fields
			} else {
				error = result.error || 'Unexpected response from server';
			}
		} catch (err) {
			console.error('Error:', err);
			error = 'Network error, please try again!';
		}
	}
</script>

<section class="contact">
	<aside>
		<p>
			Ready to bring something amazing to life? If you have an idea in mind, hit the button and
			let’s make it happen. Can’t wait to build something extraordinary together!
		</p>
	</aside>
	<h2>Any Ideas?</h2>

	<!-- Enhance the form to submit via server actions -->
	<form method="POST" class="space-y-4">
		<input name="name" type="text" placeholder="Your Name" class="input" required />
		<input name="email" type="email" placeholder="Your Email" class="input" required />
		<textarea name="message" placeholder="Your Message" class="textarea" required></textarea>
		<button type="submit" class="btn">Send</button>

		{#if success}
			<p class="text-green-500">Message sent successfully!</p>
		{/if}

		{#if error}
			<p class="text-red-500">{error}</p>
		{/if}
	</form>
</section>
