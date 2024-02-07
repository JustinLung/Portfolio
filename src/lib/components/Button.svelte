<script lang="ts">
	import { onMount } from 'svelte';

	export let secondary = false;
	const primary = !secondary;

	const { class: classes, ...rest } = $$restProps;
	export let href: string | null = null;
	const component = href ? 'a' : 'button';
</script>

<svelte:element
	this={component}
	class="cta border-underline {primary ? 'button-primary' : 'button-secondary'} {classes}"
	rel={href?.includes('http') ? 'noopener noreferrer' : undefined}
	target={href?.includes('http') ? '_blank' : undefined}

	{href}
	{...rest}
>
	<slot />
</svelte:element>

<style>
    button {
        
    }
</style>