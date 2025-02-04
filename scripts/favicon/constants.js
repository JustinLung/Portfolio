import path from 'path';
import { publicRoute, __dirname } from '../constants.js';

export const faviconFolder = path.join(__dirname, `${publicRoute}/favicons`);
export const faviconComponent = path.join(
	__dirname,
	'/src/lib/components/features/Favicons.svelte'
);
