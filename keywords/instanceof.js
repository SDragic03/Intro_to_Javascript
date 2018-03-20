// instanceof - returns whether the prototype property of a constructor appears anywhere in the prototype chain of an object.
var str = 'This is a string';
var myStr = new String();
var newStr = new String('String created with constructor');
var myDate = new Date();
var myObj = {};

console.log(str instanceof String); // returns false, checks the prototype chain, finds undefined
console.log(str instanceof Object); // returns false
console.log(myStr instanceof String); // returns true
console.log(newStr instanceof String); // returns true

console.log(myObj instanceof Object);    // returns true, despite an undefined prototype
console.log(({})  instanceof Object);    // returns true, same case as above

console.log(myStr instanceof Date);   // returns false

console.log(myDate instanceof Date);     // returns true
console.log(myDate instanceof Object);   // returns true
console.log(myDate instanceof String);   // returns false

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

var myCar = new Car('Toyota', 'Supra', 1998);
var supra1 = myCar instanceof Car;
console.log(supra1); // returns true

var supra2 = myCar instanceof Object;
console.log(supra2); // returns true