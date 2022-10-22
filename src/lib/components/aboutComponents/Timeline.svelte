<script lang="ts">
	import Spacer from '../Spacer.svelte';
</script>

<section>
	<h2>Work & Studies</h2>
	<a href="https://fdnd.nl/">
		<span>University of Applied Sciences</span>
		<Spacer />
		<div>
			<span>AD FDND</span>
			<span>2021-2023</span>
		</div>
	</a>
	<a href="https://enginebranding.nl/">
		<span>Mediacollege Amterdam</span>
		<Spacer />
		<div>
			<span>MBO-4 Software Developer</span>
			<span>2017-2020</span>
		</div>
	</a>
	<a href="https://gumgum.com/">
		<span>JustPremium B.V.</span>
		<Spacer />
		<div>
			<span>Intern Frontend Developer</span>
			<span>2019-2020</span>
		</div>
	</a>
	<a href="https://enginebranding.nl/">
		<span>Engine Branding & Identity</span>
		<Spacer />
		<div>
			<span>Intern Frontend Developer</span>
			<span>2019-2019</span>
		</div>
	</a>
</section>

<style>
	section {
		max-width: 55rem;
		margin: 2rem auto;
	}
	a {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-content: stretch;
		align-items: flex-start;
		text-decoration: none;
		color: var(--color-white);
		margin-top: 0.5rem;
		font-size: var(--font-size-normal);
	}

	div {
		color: var(--color-grey);
	}

	span:last-child {
		margin-left: 1rem;
	}

	@media (max-width: 70rem) {
		a {
			flex-wrap: wrap;
			justify-content: flex-start;
			align-content: flex-start;
			align-items: flex-start;
		}
	}
</style>
