import { client } from './client.mjs';
import { getCount, getImagesQuery, getVideosQuery } from './queries.mjs';

export async function getMediaCount(mimeType) {
	const countQuery = await client.request({
		document: getCount(mimeType)
	});
	const count = countQuery._allUploadsMeta.count;
	return count;
}

async function getAllMedia(query, count) {
	let requests = [];
	let skip = 0;
	do {
		const q = query(skip);
		const req = await client.request(q);
		requests.push(...req.allUploads);
		skip++;
	} while (requests.length < count);
	const data = await Promise.all(requests);
	return data;
}

export async function getVideoData(count) {
	const data = await getAllMedia(getVideosQuery, count);
	return data;
}

export async function getImageData(count) {
	const data = await getAllMedia(getImagesQuery, count);
	return data;
}
