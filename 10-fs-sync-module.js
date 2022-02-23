//BUILT IN MODULES
//FS MODULE : SYNC

const fs = require("fs");

//reading file
const first = fs.readFileSync("./content/first.txt", "utf8");
const second = fs.readFileSync("./content/second.txt", "utf8");

//writing in file
//flag:'a' signifie que le fichier ne sera override mais on va plutot ajouter le contenu sur l'existant
fs.writeFileSync(
  "./content/result-sync.txt",
  `Hello this is result : ${first}, ${second} `,
  { flag: "a" }
);
console.log(first, second);
