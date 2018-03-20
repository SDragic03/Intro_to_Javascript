// typeof - returns a string indicating the type of the unevaluated operand.
console.log(typeof 'this is a string');
// expected output: "string"

console.log(typeof 5);
// output: "number"

console.log(typeof false);
// output: "boolean"

console.log(typeof declaredVariable);
// output: "undefined";

console.log(typeof null);
// output: "object"

// All constructor functions while instantiated with 'new' keyword will always be typeof 'object'
var str = new String('String');
var num = new Number(50);

console.log(typeof str); // 'object'
console.log(typeof num); // 'object'

// Function constructor of Javascript

var func = new Function();

console.log(func); // 'function'