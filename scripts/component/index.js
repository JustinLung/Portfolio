const fs = require("fs");
const path = require("path");

const argument = process.argv[2];

if (!argument) {
  console.log("Please provide a valid component");
  process.exit();
}

let componentName = argument.split("/");
componentName = componentName[componentName.length - 1];

const dir = path.resolve(__dirname, `../../src/components/shared/${argument}`);

let template = fs.readFileSync(
  path.resolve(__dirname, "./Template.tsx"),
  "utf8"
);

template = template.replaceAll("COMPONENT", componentName);

let cssTemplate = fs.readFileSync(
  path.resolve(__dirname, "./COMPONENT.module.css"),
  "utf8"
);

cssTemplate = cssTemplate.replaceAll("COMPONENT", componentName);

if (fs.existsSync(dir)) {
  console.log(`directory ${dir} already exists. Please rename your component`);
} else {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `/${componentName}.tsx`), template);
  fs.writeFileSync(path.join(dir, `/${componentName}.module.css`), cssTemplate);
}
