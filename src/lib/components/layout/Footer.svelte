<script lang="ts">
	import { fadein } from '$lib/actions/fadeIn';
	import { socials } from '$lib/data/links';
</script>

<footer>
	<p>
		&#169; {new Date().getFullYear()} — Justin Lung. All rights reserved.
	</p>
	<ul>
		{#each socials as social}
			<li>
				<a class="social" href={social.href} target="_blank" rel="noopener noreferrer"
					>{social.title}</a
				>
			</li>
		{/each}
	</ul>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		text-transform: uppercase;
		max-width: 85rem;
		margin: 0 auto;
		padding: 1.5rem 1rem;
		font-size: 0.875rem;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.75rem;

		padding: 1.5rem 1rem;
	}

	a::after {
		content: "";
		display: block;
		width: 0%;
		height: 1px;
		background-color: var(--raisin-black);
		transform-origin: left;
		transition: .3s width ease-out;
	}

	a:hover::after {
		width: 100%;
	}

	@media (max-width: 55rem) {
		footer {
			flex-direction: column-reverse;
		}

		ul {
			padding: 0;
		}
	}
</style>
