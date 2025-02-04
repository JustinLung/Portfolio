import fs from 'fs';
import path from 'path';
import { __dirname } from '../constants.js';

const argument = process.argv[2];

if (!argument) {
	console.log('Please provide a valid name');
	process.exit();
}

let stateName = argument.split('/');
stateName = stateName[stateName.length - 1];

function lowercaseFirstLetter(string) {
	return string.charAt(0).toLowerCase() + string.slice(1);
}

const fileDir = path.join(__dirname, `/src/lib/state/${lowercaseFirstLetter(stateName)}.ts`);

let template = fs.readFileSync(path.resolve(import.meta.dirname, './Template.ts'), 'utf8');

template = template.replaceAll('STATE', stateName);

if (fs.existsSync(fileDir)) {
	console.log(`File ${fileDir} already exists. Please rename your state`);
} else {
	fs.writeFileSync(fileDir, template);
}
