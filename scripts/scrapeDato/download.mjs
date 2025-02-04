import fs from 'fs';
import path from 'path';

export async function downloadVideos(paths) {
	paths.forEach(async ([localPath, downloadUrl, props]) => {
		const fileName = path.basename(localPath);
		if (fs.existsSync(localPath)) {
			console.log(`File ${fileName} already exists. Skipping download.`);
			return;
		}

		console.log(`Downloading ${downloadUrl}... as ${localPath}`);
		const response = await fetch(downloadUrl);

		if (!response.ok) {
			console.log(response.statusText);
			throw new Error(`Failed to fetch ${downloadUrl}`);
		}
		// Get buffers
		const arrayBuffer = await response.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		await fs.promises.writeFile(localPath, buffer);
	});
}

export async function downloadImages(paths) {
	paths.forEach(async ([localPath, downloadUrl]) => {
		const fileName = path.basename(localPath);
		if (fs.existsSync(localPath)) {
			console.log(`File ${fileName} already exists. Skipping download.`);
			return;
		}
		console.log(`Downloading ${downloadUrl}... as ${localPath}`);
		const response = await fetch(downloadUrl);

		if (!response.ok) {
			console.log(response.statusText);
			throw new Error(`Failed to fetch ${downloadUrl}`);
		}

		// Get buffers
		const arrayBuffer = await response.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);
		await fs.promises.writeFile(localPath, buffer);
	});
}
