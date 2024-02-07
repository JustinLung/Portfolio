<script lang="ts">
	import Divider from './Divider.svelte';
</script>

<footer>
	<div class="container">
		<p class="title">Let's Work Togheter</p>
		<div class="main-content">
			<ul class="contact-list">
				<li class="list-title">Contact me</li>
				<li>justinlung77@gmail.com</li>
				<li>+31646021197</li>
			</ul>
			<ul class="social-list">
				<li><span class="">Instagram</span></li>
				<li><span class="">Linkedin</span></li>
				<li><span class="">Github</span></li>
			</ul>
		</div>
		<Divider />
		<div class="outer-content">
			<div>
				<p>&#169; {new Date().getFullYear()} Justin Lung · All Rights Reserved</p>
			</div>
			<div><p>Creative Frontend Developer</p></div>
		</div>
	</div>
</footer>

<style lang="postcss">
	footer {
		background-color: var(--dark);
		.title {
			font-family: 'FKScreamer';
			text-transform: uppercase;
			font-weight: 700;
			font-size: clamp(4.3rem, calc(4.17rem + 0.67vw), 4.84rem);
			margin-bottom: 10rem;
		}

		.list-title {
			font-weight: 700;
			text-transform: uppercase;
			margin-bottom: 0.5rem;
		}

		.container {
			.main-content {
				display: flex;
				justify-content: space-between;

				flex-direction: column-reverse;
				gap: 1.5rem;
				@media (--md) {
					flex-direction: row;
					align-items: center;
					margin-bottom: 1.5rem;
				}
			}
		}

		.social-list {
			display: flex;
			gap: 0.5rem;
		}

		.contact-list {
			display: grid;
			gap: 0.5rem;
			margin-bottom: 1.5rem;
			@media (--md) {
				margin-bottom: 0;
			}
		}

		.outer-content {
			margin-top: 1.5rem;
			display: grid;
			gap: 0.5rem;

			p {
				font-size: 0.8rem;

				@media (--md) {
					font-size: 1rem;
				}
			}
			@media (--md) {
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
