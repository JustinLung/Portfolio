import { optimize, loadConfig } from 'svgo';
import { __dirname } from './../constants.js';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

performance.mark('iconStart');

const config = await loadConfig();

const iconPath = path.join(__dirname, '/src/icons');
const iconFiles = await fs.promises.readdir(iconPath, { recursive: true, encoding: 'utf8' });
const template = await fs.promises.readFile(path.join(import.meta.dirname, './template.svelte'), {
	encoding: 'utf-8'
});

const componentPath = path.join(__dirname, '/src/lib/components/icons');

if (!fs.existsSync(componentPath)) {
	fs.mkdirSync(componentPath, {
		recursive: true
	});
} else {
	fs.rmSync(componentPath, { recursive: true, force: true });
	fs.mkdirSync(componentPath, {
		recursive: true
	});
}

async function processIcons() {
	const processedIcons = iconFiles.map((file) => {
		const filePath = path.resolve(iconPath, file);
		const stats = fs.statSync(filePath);
		if (!stats.isFile()) {
			return false;
		}

		return new Promise((resolve, reject) => {
			try {
				const svg = fs.readFileSync(String(filePath), { encoding: 'utf-8' });
				const needsConvert = !filePath.includes('preserve-color');

				config.plugins[0].params.overrides.convertColors.currentColor = needsConvert;

				const result = optimize(svg, config);
				const componentString = `
				    ${template}
				    ${result.data.replace(/<svg([^>]*)>/, (match, attributes) => `<svg${attributes} {...rest}>`)}
				    `;

				const filename = path.basename(file).replace('.svg', '');
				const _filename = pascalCase(filename) + 'Icon';

				const output = path.join(componentPath, `${_filename}.svelte`);

				fs.promises
					.writeFile(output, componentString, {
						encoding: 'utf-8'
					})
					.then(() => {
						console.log('Generated component:', _filename);
						resolve();
					});
			} catch (error) {
				console.log(error);

				reject();
			}
		});
	});

	return await Promise.allSettled(processedIcons.filter(Boolean));
}

function runPrettierOnFolder(folderPath) {
	return new Promise((resolve, reject) => {
		const process = spawn('pnpm', ['prettier', folderPath, '--write']);
		process.on('close', resolve);
		process.stderr.on('data', (err) => reject(err));
	});
}

await processIcons();

// Run prettier once on the entire components folder
await runPrettierOnFolder(componentPath);

performance.mark('iconEnd');
const measure = performance.measure('scriptTime', 'iconStart', 'iconEnd');

const formattedDuration = new Intl.NumberFormat('en-US', {
	style: 'unit',
	unit: 'second',
	unitDisplay: 'long',
	maximumFractionDigits: 2
}).format(measure.duration / 1000);
console.log(`\nFinished in ${formattedDuration}`);

function pascalCase(str) {
	return str
		.replace(/[_\-\s]+/g, ' ')
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join('');
}
