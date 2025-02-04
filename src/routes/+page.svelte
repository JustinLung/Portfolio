<script lang="ts">
	import MetaTags from '$components/features/MetaTags.svelte';
	import Hero from '$components/shared/Hero/Hero.svelte';
	import Works from '$components/shared/Works/Works.svelte';
	const { data } = $props();
	console.log(data);
</script>

<MetaTags pageTitle="Home" currentUrl="/" pageDescription="This is the homepage" />
<Hero title="Justin Lung" description="Creative Frontend Developer" />
<Works title="Works"/>
