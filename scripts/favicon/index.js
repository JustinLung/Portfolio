import { spawn } from 'child_process';
import { favicons } from 'favicons';
import fs from 'fs';
import path from 'path';
import { faviconComponent, faviconFolder } from './constants.js';
import { __dirname } from '../constants.js';
import { getFavicon } from './getFavicon.js';
import dotenv from 'dotenv';

dotenv.config({
	path: path.join(__dirname, './env')
});

const configuration = {
	path: '/favicons', // Path for overriding default icons path. `string`
	appName: process.env.COMPANY_NAME, // Your application's name. `string`
	appShortName: process.env.COMPANY_NAME, // Your application's short_name. `string`. Optional. If not set, appName will be used
	appDescription: process.env.COMPANY_NAME, // Your application's description. `string`
	developerName: process.env.COMPANY_NAME, // Your (or your developer's) name. `string`
	developerURL: process.env.PUBLIC_DOMAIN_URL, // Your (or your developer's) URL. `string`
	dir: 'auto', // Primary text direction for name, short_name, and description
	lang: 'en-US', // Primary language for name and short_name
	background: '#fff', // Background colour for flattened icons. `string`
	theme_color: '#fff', // Theme color user for example in Android's task switcher. `string`
	appleStatusBarStyle: 'black-translucent', // Style for Apple status bar: "black-translucent", "default", "black". `string`
	display: 'standalone', // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
	orientation: 'any', // Default orientation: "any", "natural", "portrait" or "landscape". `string`
	scope: '/', // set of URLs that the browser considers within your app
	start_url: '/', // Start URL when launching the application from a device. `string`
	version: '1.0', // Your application's version string. `string`
	logging: false, // Print logs to console? `boolean`
	pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
	loadManifestWithCredentials: false, // Browsers don't send cookies when fetching a manifest, enable this to fix that. `boolean`
	icons: {
		android: true, // Create Android homescreen icon. `boolean` or `{ offset, background }` or an array of sources
		appleIcon: false, // Create Apple touch icons. `boolean` or `{ offset, background }` or an array of sources
		appleStartup: false, // Create Apple startup images. `boolean` or `{ offset, background }` or an array of sources
		favicons: true, // Create regular favicons. `boolean` or `{ offset, background }` or an array of sources
		windows: false, // Create Windows 8 tile icons. `boolean` or `{ offset, background }` or an array of sources
		yandex: false // Create Yandex browser icon. `boolean` or `{ offset, background }` or an array of sources
	}
};

async function main() {
	// Get from DatoCMS
	// const source = await getFavicon();

	const source = await fs.promises.readFile(path.join(__dirname, '/static/logo.png'));
	if (!source) {
		console.log('Failed to get favicon');
		return;
	}
	try {
		const response = await favicons(source, configuration);
		await Promise.all(
			response.images.map(
				async (image) =>
					await fs.promises.writeFile(path.join(faviconFolder, image.name), image.contents)
			)
		);
		await Promise.all(
			response.files.map(
				async (file) =>
					await fs.promises.writeFile(path.join(faviconFolder, file.name), file.contents)
			)
		);

		await fs.promises.writeFile(
			faviconComponent,
			`
      <svelte:head>
        ${response.html.join('\n')}
      </svelte:head>
      `
		);
		const ls = spawn('pnpm', ['prettier', faviconComponent, '--write']);
		ls.stderr.on('data', (err) => {
			throw new Error(err);
		});
	} catch (error) {
		console.log(error);
	}
}

main();
