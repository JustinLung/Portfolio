<script lang="ts">
	import MetaTags from '$components/features/MetaTags.svelte';
	import About from '$components/shared/About/About.svelte';
	import CardStack from '$components/shared/CardStack/CardStack.svelte';
	import Carousel from '$components/shared/Carousel/Carousel.svelte';
</script>

<MetaTags pageTitle="About" currentUrl="/about" pageDescription="This is the about page" />
<About />
<CardStack />
