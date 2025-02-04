import path from 'path';
import fs from 'fs';
import { imageFolder, videoFolder } from './constants.mjs';

export function createVideoPaths(videoData) {
	// Check if video folder exists
	if (!fs.existsSync(videoFolder)) {
		fs.mkdirSync(videoFolder);
	}

	const paths = videoData.reduce((acc, { id, filename, url, size }) => {
		const _fileName = `${id}-${filename}`;
		const localPath = path.join(videoFolder, _fileName);
		acc.push([localPath, url]);

		return acc;
	}, []);

	return paths;
}

export function createImagePaths(imageData) {
	// Check if image folder exists
	if (!fs.existsSync(imageFolder)) {
		fs.mkdirSync(imageFolder);
	}

	const paths = imageData.reduce((acc, { filename, url, id }) => {
		const _fileName = `${id}-${filename}`;
		const localPath = path.join(imageFolder, _fileName);
		acc.push([localPath, url]);

		return acc;
	}, []);

	return paths;
}
