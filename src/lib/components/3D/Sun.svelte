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
		position: absolute;
		top: 0;
		right: 0;
		width: 50%;
		height: 100vh;
	}
</style>
