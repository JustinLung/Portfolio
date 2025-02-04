import path from 'path';
import fs from 'fs';
import { faviconFolder } from './constants.js';
import { client } from '../client.js';

export async function getFavicon() {
	const faviconQuery = await client.request({
		document: `
      query favicon {
        _site {
          favicon {
            url(imgixParams:{fm:png, w: 512, h: 512})
          }
        }
      }
    `
	});

	const file = await download(faviconQuery._site.favicon.url);
	return file;
}

async function download(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			console.log(response.status, response.statusText);
			throw new Error(`Failed to fetch ${url}`);
		}

		const arrBuffer = await response.arrayBuffer();
		const buffer = Buffer.from(arrBuffer);
		if (!fs.existsSync(faviconFolder)) {
			fs.mkdirSync(faviconFolder);
		} else {
			fs.rmSync(faviconFolder, { recursive: true, force: true });
			fs.mkdirSync(faviconFolder);
		}

		const localPath = path.join(faviconFolder, 'favicon-base.png');

		await fs.promises.writeFile(localPath, buffer);
		return localPath;
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}
