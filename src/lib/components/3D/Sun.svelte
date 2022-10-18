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
		background: blue;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
