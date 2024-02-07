<script lang="ts">
	import Divider from './Divider.svelte';
</script>

<footer>
	<div class="container">
		<p class="title">Let's Work Togheter</p>
		<div class="main-content">
			<ul>
				<li>Contact me</li>
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
		}

		.container {
			.main-content {
				display: flex;
				justify-content: space-between;
			}
		}

		.social-list {
			display: flex;
			gap: 8px;
		}

		.outer-content {
			@media (--md) {
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
