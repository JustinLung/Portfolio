<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<Hero job="Merlin" href="https://level30wizards.com/" />
<Projects>
	<ProjectCard
		title="Scrollbook"
		description="Real, organic and arabica. A brand that communicates coffee real value."
		src="/images/hero.jpeg"
		alt="Project"
	/>
	<ProjectCard
		title="Scrollbook"
		description="Real, organic and arabica. A brand that communicates coffee real value."
		src="/images/hero.jpeg"
		alt="Project"
	/>
	<ProjectCard
		title="Scrollbook"
		href="/"
		description="Real, organic and arabica. A brand that communicates coffee real value."
		src="/images/hero.jpeg"
		alt="Project"
	/>
</Projects>