import { downloadImages, downloadVideos } from './download.mjs';
import { createImagePaths, createVideoPaths } from './paths.mjs';
import { getImageData, getMediaCount, getVideoData } from './utils.mjs';

// Videos
export async function getVideos() {
	try {
		console.log('Fetching videos...');
		const count = await getMediaCount('video');
		const videos = await getVideoData(count, 'video');
		const paths = createVideoPaths(videos);
		await downloadVideos(paths);
	} catch (error) {
		console.log(error);
	}
}

export async function getImages() {
	try {
		console.log('Fetching images');
		const count = await getMediaCount('image');
		const images = await getImageData(count);
		const paths = createImagePaths(images);
		await downloadImages(paths);
	} catch (error) {
		console.log(error);
	}
}
