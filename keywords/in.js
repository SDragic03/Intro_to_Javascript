// in - returns true if the specified property is in the specified object or its prototype chain.

// Arrays
var vehicles = ['Honda', 'Nissan', 'Toyota', 'Ford', 'Dodge'];
console.log(0 in vehicles); // returns true
console.log(3 in vehicles); // returns true
console.log(6 in vehicles); // returns false
console.log('Ford' in vehicles); // returns false (you must specify the
                                 // index number, not the value at that index)
console.log('length' in vehicles); // returns true (length is an Array property)
console.log(Symbol.iterator in vehicles); // returns true (arrays are iterable)

// Predefined objects
console.log('PI' in Math);         // returns true

// Custom objects
var mycar = {make: 'Honda', model: 'Civic', year: 2018};
console.log('make' in mycar);  // returns true
console.log('model' in mycar); // returns true

delete mycar.model;
console.log('model' in mycar);  // returns false

mycar.make = undefined;
console.log('make' in mycar);  // returns true