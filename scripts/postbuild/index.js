import { generateRobots } from '../robots/index.js';
import { generateSitemap } from '../sitemap/index.js';

async function postbuild() {
	await generateSitemap();
	await generateRobots();
}

postbuild();
