<script lang="ts">
	import PreFooter from '$components/shared/PreFooter/PreFooter.svelte';
	import Projects from '$components/shared/Projects/Projects.svelte';

	export let data;
	const projects = data.projects.flatMap((p: { project: any; }) => p.project);

	console.log(projects);
</script>

<Projects title="Projects" projects={projects}/>
<PreFooter
	title="Any Ideas?"
	description="Ready to bring something amazing to life? If you have an idea in mind, hit the button and let’s make it happen. Can’t wait to build something extraordinary together!"
/>

