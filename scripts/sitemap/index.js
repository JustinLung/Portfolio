import dotenv from 'dotenv';
import { createSitemap } from 'svelte-sitemap/src/index.js';
import { __dirname } from '../constants.js';
import path from 'path';

dotenv.config({
	path: path.resolve(__dirname, './.env')
});

async function main() {
	await createSitemap(process.env.DOMAIN || 'https://merlin.studio', {
		outDir: path.resolve(__dirname, '.vercel/output/static'),
		resetTime: true,
		changeFreq: 'monthly',
		ignore: [],

		// Useful logs
		debug: true
	});

	console.log('Generated sitemap');
}

export { main as generateSitemap };
