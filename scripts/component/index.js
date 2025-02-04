import fs from 'fs';
import path from 'path';
import { __dirname } from '../constants.js';

const argument = process.argv[2];

if (!argument) {
	console.log('Please provide a valid component');
	process.exit();
}

let componentName = argument.split('/');
componentName = componentName[componentName.length - 1];

const dir = path.join(__dirname, `/src/lib/components/shared/${argument}`);

let template = fs.readFileSync(path.resolve(import.meta.dirname, './Template.svelte'), 'utf8');

template = template.replaceAll('COMPONENT', componentName);

let cssTemplate = fs.readFileSync(path.resolve(import.meta.dirname, './COMPONENT.css'), 'utf8');

cssTemplate = cssTemplate.replaceAll('COMPONENT', componentName);

if (fs.existsSync(dir)) {
	console.log(`directory ${dir} already exists. Please rename your component`);
} else {
	fs.mkdirSync(dir, { recursive: true });
	fs.writeFileSync(path.join(dir, `/${componentName}.svelte`), template);
	fs.writeFileSync(path.join(dir, `/${componentName}.css`), cssTemplate);
}
