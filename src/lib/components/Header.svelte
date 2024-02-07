<script lang="ts">
	import Button from './Button.svelte';

	let menu = false;

	function openMenu() {
		menu = !menu;

		menu ? document.body.classList.add('freeze') : document.body.classList.remove('freeze');
	}
</script>

<header class="container">
	<a href="/">PORTFOLIO</a>
	<Button on:click={openMenu}>{!menu ? 'MENU' : 'CLOSE'}</Button>
</header>

<style lang="postcss">
	header {
		font-family: 'FKScreamer';
		text-transform: uppercase;
		font-weight: 700;
		font-size: 2rem;

		display: flex;
		justify-content: space-between;
	}
</style>
