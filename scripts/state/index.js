const fs = require("fs");
const path = require("path");

const argument = process.argv[2];

if (!argument) {
  console.log("Please provide a valid name");
  process.exit();
}

let componentName = argument.split("/");
componentName = componentName[componentName.length - 1];

function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

const fileDir = path.resolve(
  __dirname,
  `../../src/state/${lowercaseFirstLetter(componentName)}.ts`
);

let template = fs.readFileSync(
  path.resolve(__dirname, "./Template.ts"),
  "utf8"
);

template = template.replaceAll("COMPONENT", componentName);

if (fs.existsSync(fileDir)) {
  console.log(`File ${fileDir} already exists. Please rename your state`);
} else {
  fs.writeFileSync(fileDir, template);
}
