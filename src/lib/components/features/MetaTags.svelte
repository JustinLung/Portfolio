<script lang="ts">
	import { PUBLIC_DOMAIN_URL, PUBLIC_ENVIRONMENT_NAME } from '$env/static/public';

	interface MetaTagsProps {
		pageTitle: string;
		pageDescription: string;
		currentUrl: string;
		image?: any;
		noIndex?: boolean;
	}

	const {
		pageTitle,
		pageDescription,
		currentUrl,
		image,
		noIndex = false
	}: MetaTagsProps = $props();
	const _currentUrl = PUBLIC_DOMAIN_URL + currentUrl;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<meta charset="UTF-8" />

	<title>{pageTitle}</title>
	<meta name="title" content={pageTitle} />
	<meta name="description" content={pageDescription} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={_currentUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:image" content={image?.url || '/logo.png'} />
	<meta property="og:image:secure_url" content={image?.url || '/logo.png'} />
	<meta property="og:image:type" content={image?.mimeType || 'image/jpeg'} />
	<meta property="og:image:width" content={image?.width || '2400'} />
	<meta property="og:image:height" content={image?.height || '1565'} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={_currentUrl} />
	<meta property="twitter:title" content={pageTitle} />
	<meta property="twitter:description" content={pageDescription} />
	<meta property="twitter:image" content={image?.url || '/logo.png'} />

	<link rel="canonical" href={_currentUrl} />
	{#if noIndex}
		<meta name="robots" content="noindex" />
	{/if}

	{#if PUBLIC_ENVIRONMENT_NAME === 'production'}
		<meta
			name="robots"
			content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
		/>
	{/if}
</svelte:head>
