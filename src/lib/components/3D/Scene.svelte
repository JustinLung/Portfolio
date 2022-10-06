<script lang="ts">
	import { AmbientLight, DirectionalLight } from '@threlte/core';
	import Camera from './Camera.svelte';
	import AxesHelper from './helpers/AxesHelper.svelte';
</script>

<Camera />
<DirectionalLight shadow position={{ x: 3, y: 10, z: 10 }} />
<DirectionalLight position={{ x: -3, y: 10, z: -10 }} intensity={0.2} />
<AmbientLight intensity={0.2} />
