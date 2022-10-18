<script lang="ts">
	import { GLTF } from '@threlte/extras';
	import type { GLTF as tGLTF } from 'three/examples/jsm/loaders/GLTFLoader';
	import { useFrame, Group } from '@threlte/core';
	import { spring } from 'svelte/motion';

	let gltf: tGLTF | undefined;
	let rotation = 0;
	useFrame(() => {
		rotation += 0.005;
	});
	const scale = spring(0.00001);

	scale.set(0.5);
</script>

<Group>
	<GLTF
		bind:gltf
		url="/assets/models/sun.glb"
		interactive
		position={{ z: 0, x: 0, y: 0 }}
		scale={$scale}
		castShadow
		receiveShadow
		rotation={{
			x: rotation,
			y: rotation
		}}
	/>
</Group>
