<script lang="ts">
	import { innerHeight, innerWidth } from 'svelte/reactivity/window';
	import './DesignHelper.css';
	import CommandIcon from '$components/icons/CommandIcon.svelte';

	interface DesignHelperProps {}

	const {}: DesignHelperProps = $props();

	let showHelper = $state(true);
	let showGrid = $state(true);

	const toggle = (e: KeyboardEvent) => {
		if (e.key.toLowerCase() === 'd') {
			showHelper = !showHelper;
		}

		if (e.key.toLocaleLowerCase() === 'g') {
			showGrid = !showGrid;
		}
	};
</script>

<svelte:window onkeydown={toggle} />
<div class={'design-helper'} data-show={String(showHelper)}>
	<div>
		Toggle Overlay:{' '}
		<kbd style="margin-left: 1rem">D</kbd>
	</div>
	<ul>
		<li>
			<label>
				<input
					type="checkbox"
					defaultChecked={showGrid}
					onchange={() => {
						showGrid = !showGrid;
					}}
				/>
				Show Grid
				<kbd style="margin-left: 1rem">G</kbd>
			</label>
		</li>
		<li>width: {innerWidth.current}</li>
		<li>height: {innerHeight.current}</li>
		<li>
			current media: <span class="media"></span>
		</li>
	</ul>
</div>
{#if showGrid}
	<div class={'helper-grid grid'}>
		{#each { length: 14 } as _}
			<div></div>
		{/each}
	</div>
{/if}
