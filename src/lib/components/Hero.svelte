<script lang="ts">
	import Sun from './3D/Sun.svelte';
</script>

<section>
	<h2>Justin Lung</h2>
	<Sun />
</section>

<style>
	section {
		height: 45rem;
		position: relative;
		background: red;
	}

	h2 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
