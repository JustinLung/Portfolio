<script lang="ts">
	import Carousel from '$components/shared/Carousel/Carousel.svelte';

	// import MetaTags from '$components/features/MetaTags.svelte';
	import Hero from '$components/shared/Hero/Hero.svelte';
	import PreFooter from '$components/shared/PreFooter/PreFooter.svelte';
	import TextHighlight from '$components/shared/TextHighlight/TextHighlight.svelte';
	import Works from '$components/shared/Works/Works.svelte';

	export let data;

	console.log(data);
</script>

<!-- <MetaTags pageTitle="Home" currentUrl="/" pageDescription="This is the homepage" /> -->
<Hero title={data.homepage.title} description={data.homepage.subtitle} />
<TextHighlight text={data.homepage.highlightText} />
<Works
	title={data.homepage.featuredProjectTitle}
	description={data.homepage.featuredProjectSubtitle}
	featuredProjects={data.homepage.featuredProjects.flatMap((item: any) => item.project)}
/>
<Carousel title={data.homepage.blogTitle} items={data.homepage.featuredBlogPosts}/>
<PreFooter
	title="Any Ideas?"
	description="Ready to bring something amazing to life? If you have an idea in mind, hit the button and let’s make it happen. Can’t wait to build something extraordinary together!"
/>
