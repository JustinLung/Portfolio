<script lang="ts">
	// import MetaTags from '$components/features/MetaTags.svelte';
	import About from '$components/shared/About/About.svelte';
	import CardStack from '$components/shared/CardStack/CardStack.svelte';
	import Experience from '$components/shared/Experience/Experience.svelte';
	
	export let data;
	console.log(data);
</script>

<!-- <MetaTags pageTitle="About" currentUrl="/about" pageDescription="This is the about page" /> -->
<About
	title={data.about.title}
	intro={data.about.intro}
	description={data.about.description}
	src={data.about.image.url}
	alt={data.about.image.alt}
/>
<Experience title={data.about.experienceTitle} experiences={data.about.experience}/>
<CardStack title={data.about.cardStackTitle} cardImages={data.about.cardStackImages}/>
