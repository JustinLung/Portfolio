
<script>
	import Link from '$components/shared/Link/Link.svelte';
	import '$lib/components/shared/Contact/Contact.css';
	import { socials } from '$lib/util/links';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';

	let success = false;

	onMount(() => {
		gsap.from('.contact', {
			opacity: 0,
			y: 50,
			duration: 0.2,
			ease: 'expo.out'
		});

		gsap.utils.toArray('.contact__aside *').forEach((el, i) => {
			gsap.from(el, {
				opacity: 0,
				y: 30,
				duration: 0.3,
				delay: 0.2 + i * 0.1,
				ease: 'expo.out'
			});
		});

		gsap.from(['.contact__aside', '.contact__form'], {
			opacity: 0,
			y: 30,
			stagger: 0.3,
			duration: 1,
			delay: 0.3,
			ease: 'expo.out'
		});

		gsap.utils.toArray(['.input', '.textarea', '.button']).forEach((el, i) => {
			gsap.from(el, {
				opacity: 0,
				y: 10,
				duration: 0.3,
				delay: 0.5 + i * 0.1,
				ease: 'expo.out'
			});
		});
	});
</script>

<section class="contact container">
	<aside class="contact__aside">
		<h2>Any Ideas?</h2>
		<p>
			Ready to bring something amazing to life? If you have an idea in mind, hit the button and
			let’s make it happen. Can’t wait to build something extraordinary together!
		</p>
		<ul class="contact__info">
			<li>
				<Link href="mailto:justinlung77@gmail.com" class="underline link" style="color: var(--white)">
					justinlung77@gmail.com
				</Link>
			</li>
			<li>
				<Link href="tel:+31646021197" class="underline link" style="color: var(--white)">
					+31 646021197
				</Link>
			</li>
			{#each socials as social}
				<li>
					<Link href={social.url} class="underline link" style="color: var(--white)">
						{social.name}
					</Link>
				</li>
			{/each}
		</ul>
	</aside>
	<!-- Enhance the form to submit via server actions -->
	<form method="POST" class="contact__form" use:enhance={({ result }) => {
		result.then(({ success }) => {
			if (success) {
				success = true;
			}
		});
	}} use:enhance>
		<div class="contact__form-group">
			<div class="contact__form-group-item">
				<label for="first-name">First Name</label>
				<input name="first-name" type="text" placeholder="First Name" class="input" required />
			</div>
			<div class="contact__form-group-item">
				<label for="last-name">Last Name</label>
				<input name="last-name" type="text" placeholder="Last Name" class="input" required />
			</div>
			<div class="contact__form-group-item email">
				<label for="email">E-mail</label>
				<input name="email" type="email" placeholder="E-Mail" class="input" required />
			</div>
			<div class="contact__form-group-item message">
				<label for="message">Message</label>
				<textarea name="message" placeholder="Your Message" class="textarea" required></textarea>
			</div>
			<button type="submit" class="button">Shoot a message</button>
		</div>
	</form>

	{#if success}
		<p class="success-message">Your message has been sent successfully!</p>
	{/if}
</section>