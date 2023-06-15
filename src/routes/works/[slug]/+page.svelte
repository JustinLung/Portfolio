<script lang="ts">
	import ProjectHeader from '$lib/components/ProjectHeader.svelte';
</script>

<ProjectHeader title="Scrollbook" description="Creative Development"/>
<section>
	<picture>
		<img src="/images/hero.jpeg" alt="Hero" />
	</picture>
</section>

<style>

	picture {
		width: 100%;
		height: 1080px;
	}

	picture img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
</style>
