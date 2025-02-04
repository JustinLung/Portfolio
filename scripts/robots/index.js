import robotstxt from 'generate-robotstxt';
import dotenv from 'dotenv';
import { __dirname } from '../constants.js';
import path from 'path';
import fs from 'fs';

dotenv.config({
	path: path.join(__dirname, './.env')
});

const isProd = process.env.PUBLIC_ENVIRONMENT_NAME === 'production';

async function generateRobots() {
	const content = await robotstxt({
		policy: [
			{
				userAgent: '*',
				allow: isProd ? '/' : undefined,
				disallow: !isProd ? '/' : undefined
			}
			// {
			// userAgent: '*'
			// allow: '',
			// disallow: ''
			// crawlDelay: 2,
			// }
		],
		sitemap: `${process.env.DOMAIN}/sitemap.xml`,
		host: process.env.DOMAIN
	});

	const robotsFile = path.join(__dirname, '/.vercel/output/static/robots.txt');

	await fs.promises.writeFile(robotsFile, content, {
		encoding: 'utf-8'
	});
	console.log('Generated robots.txt');
}

export { generateRobots };
