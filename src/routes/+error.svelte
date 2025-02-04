<script lang="ts">
	import { page } from '$app/state';
	import ErrorPage from '$components/shared/ErrorPage/ErrorPage.svelte';
</script>

<ErrorPage status="404" description="Oops! Looks like this page is lost. " />
