<script lang="ts">
	import './Works.css';

	interface WorksProps {
		title: string;
	}

	const {title}: WorksProps = $props();
</script>

<section class="Works">
	<h2>{title}</h2>
</section>
