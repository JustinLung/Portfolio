<script lang="ts">
	import Link from '$components/shared/Link/Link.svelte';
	import { socials } from '$lib/util/links';
	import './Footer.css';

	// let timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
	// let currentTime: string = new Date().toLocaleTimeString('en-US', {
	// 	timeZone,
	// 	hour: '2-digit',
	// 	minute: '2-digit',
	// 	hour12: true
	// });

	// // Update time every second
	// const updateTime = () => {
	// 	currentTime = new Date().toLocaleTimeString('en-US', {
	// 		timeZone,
	// 		hour: '2-digit',
	// 		minute: '2-digit',
	// 		hour12: true
	// 	});
	// };

	// setInterval(updateTime, 1000);
</script>

<footer class="footer">
	<div class="footer__top container">
		<span class="footer__top-title">Let's Work Together</span>
		<div class="footer__top-contact">
			<a href="mailto:justinlung77@gmail.com" class="footer_top-contact-link underline">justinlung77@gmail.com</a>
			<a href="tel:+31646021197" class="footer_top-contact-link underline">+31 6 46021197</a>
		</div>
	</div>
	<div class="footer__bottom container">
		<p>© 2021 Justin-Lung. All rights reserved.</p>
		<ul class="footer__bottom-socials">
			{#each socials as social}
				<li>
					<Link href={social.url} underline class="footer__bottom-socials-link underline"
						>{social.name}</Link
					>
				</li>
			{/each}
		</ul>
	</div>
</footer>
