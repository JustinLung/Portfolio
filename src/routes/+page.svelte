<script lang="ts">
	import MetaTags from '$components/features/MetaTags.svelte';
	import Hero from '$components/shared/Hero/Hero.svelte';
	import PreFooter from '$components/shared/PreFooter/PreFooter.svelte';
	import TextHighlight from '$components/shared/TextHighlight/TextHighlight.svelte';
	import Works from '$components/shared/Works/Works.svelte';
	const { data } = $props();
	console.log(data);
</script>

<MetaTags pageTitle="Home" currentUrl="/" pageDescription="This is the homepage" />
<Hero title="Justin-Lung" description="Creative Frontend Developer" />
<TextHighlight text="Building magical and accessible web experiences is my passion." />
<Works
	title="Featured Projects"
	description="a selection of my magically crafted works made with passion."
/>
<PreFooter
	title="Any Ideas?"
	description="Ready to bring something amazing to life? If you have an idea in mind, hit the button and let’s make it happen. Can’t wait to build something extraordinary together!"
/>
