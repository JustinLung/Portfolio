import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import dotenv from 'dotenv';

dotenv.config({
	path: './.env'
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			runtime: 'nodejs22.x',
			images: {
				sizes: [640, 828, 1200, 1920, 3840],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 300,
				remotePatterns: [
					{
						protocol: 'https',
						hostname: 'www.datocms-assets.com',
						port: ''
					}
				]
			}
		}),

		alias: {
			$components: './src/lib/components',
			$server: './src/lib/server',
			$graphql: './src/lib/graphql',
			$state: './src/lib/components'
		},

		prerender: {
			origin: process.env.PUBLIC_DOMAIN_URL
		}
	}
};

export default config;
