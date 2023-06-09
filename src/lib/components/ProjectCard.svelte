<script lang="ts">
	import { fadein } from '$lib/actions/fadeIn';

	export let title: string;
</script>

<article use:fadein={{ loop: true, stagger: 1, delay: .3 }}>
	<h2>{title}</h2>
</article>
