//MODULES : encapsulated code (only share minimum)
//CommonJS every file is module (by defautl)

const names = require("./4-name");
const sayHi = require("./5-utils");

sayHi(names.john);
sayHi(names.peter);
// sayHi("Teddy");
// sayHi(peter);
// sayHi(john);

// console.log(sayHi);
