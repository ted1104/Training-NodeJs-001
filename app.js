//MODULES : encapsulated code (only share minimum)
//CommonJS every file is module (by defautl)

const names = require("./4-name");
const { sayHi } = require("./5-utils");
const { items, singlePerson } = require("./6-alternative-flavor");

sayHi(names.john);
sayHi(names.peter);
console.log(items);
// sayHi("Teddy");
// sayHi(peter);
// sayHi(john);

// console.log(sayHi);
