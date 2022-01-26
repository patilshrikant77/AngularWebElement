const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/ngWebElement/runtime.js",
    "./dist/ngWebElement/polyfills.js",
    // "./dist/ngWebElement/scripts.js",
    "./dist/ngWebElement/main.js",
  ];
  await fs.ensureDir("elements");
  await concat(files, "elements/calc.js");
  await fs.copyFile("./dist/ngWebElement/styles.css", "elements/styles.css");
  //await fs.copy("./dist/ngWebElement/assets/", "elements/assets/");
})();
