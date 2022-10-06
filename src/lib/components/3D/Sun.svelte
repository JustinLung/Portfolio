<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Model from './Model.svelte';
	import Scene from './Scene.svelte';
</script>

<div>
	<Canvas>
		<Scene />
		<Model />
	</Canvas>
</div>

<style>
	div {
		width: 100%;
		height: 100vh;
		background: black;
	}
</style>
