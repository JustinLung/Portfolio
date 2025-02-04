import { dev } from '$app/environment';

const widths = [640, 828, 1200, 1920, 3840];
const quality = 90;

interface Image {
	url: string;
	filename?: string;
	id?: string;
}

export function optimize(args: Image) {
	const { url: src } = args;
	if (dev) return getLocalSource(args);

	return widths
		.slice()
		.sort((a, b) => a - b)
		.map((width, i) => {
			const url = `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
			const descriptor = i < widths.length - 1 ? ` ${width}w` : '';
			return url + descriptor;
		})
		.join(', ');
}

const localFolder = '/images/cms';
function getLocalSource(args: Image) {
	const { url, filename, id } = args;

	if (!filename || !id) return url;

	return `${localFolder}/${id}-${filename}`;
}
