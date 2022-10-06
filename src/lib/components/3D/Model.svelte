<script lang="ts">
	import { GLTF } from '@threlte/extras';
	import type { GLTF as tGLTF } from 'three/examples/jsm/loaders/GLTFLoader';

	let gltf: tGLTF | undefined;
</script>

<GLTF
	bind:gltf
	url="/assets/models/sun.glb"
	position={{ z: 0, x: 0, y: 0 }}
	scale={0.5}
	castShadow
	receiveShadow
/>
