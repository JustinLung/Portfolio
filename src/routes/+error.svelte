<script lang="ts">
	import { page } from '$app/stores';
</script>

<section>
	<h1>Whoops, Something went wrong.</h1>
	{#if $page.status === 404}
		<p>The page you are looking for was moved, removed, renamed or might never exited</p>
		<span>{$page.status}</span>
		<a href="/">Go back to home page</a>
	{:else}
		<p>
			It looks like there is something wrong in our end. Please come back later to check our status.
		</p>
		<span>{$page.status}</span>
	{/if}
</section>

<style>
	section {
		min-height: 82vh;
		max-width: 55rem;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	h1 {
		font-size: var(--font-size-xl);
	}

	p {
		font-size: var(--font-size-sm);
		max-width: 35rem;
	}

	span {
		font-size: var(--font-size-4xl);
	}
</style>
