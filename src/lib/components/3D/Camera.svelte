<script lang="ts">
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import { OrbitControls, PerspectiveCamera } from '@threlte/core';
	import AxesHelper from './helpers/AxesHelper.svelte';
</script>

<PerspectiveCamera fov={100} position={{ x: 5, y: 5, z: 3 }}>
	<OrbitControls maxPolarAngle={DEG2RAD * 80} autoRotate={true} enableZoom={false} />
</PerspectiveCamera>
