//BUILT IN MODULES
//PATH module

const path = require("path");

// show the racine sep
console.log(path.sep);

//show folder and subfolder and file to have the whole path
const filePath = path.join("/content", "sub-folder", "test.txt");
console.log(filePath);

//show the file
const base = path.basename(filePath);
console.log(base);

//absolute path
const absolute = path.resolve(__dirname, "content", "sub-folder", "text.txt");
console.log(absolute);
