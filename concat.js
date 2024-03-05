const concat = require("concat");
(async function build() {
  const files = [
    "./dist/micro-angular/runtime.js",
    "./dist/micro-angular/polyfills.js",
    "./dist/micro-angular/main.js",
  ];
  await concat(files, "./dist/micro-angular/micro-angular.js");
});
