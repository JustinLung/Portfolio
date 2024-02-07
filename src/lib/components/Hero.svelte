<script lang="ts">
	import { gsap } from 'gsap';
	// import Button from './Button.svelte';
	import { onMount } from 'svelte';
	export let job: string;

	onMount(() => {
		const tl = gsap.timeline();
	});
</script>

