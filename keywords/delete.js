// delete - removes a property from an object
var fighter = {
    firstname: "Bruce",
    lastname: "Lee"
}

console.log(fighter.firstname); // output: "Bruce"

delete fighter.firstname;

console.log(fighter.firstname); // undefined

// if property does not exist, delete will not have any effect and will return true
console.log(delete fighter.firstname); // true

// creates the property adminName on the global scope
adminName = 'xyz';

// creates the property fighterCount on the global scope
// Since we are using var, this is marked as non-configurable. The same is true of let and const.
var fighterCount = 43;

fighterDetails = {
    name: 'Bruce Lee',
    age: 32,
    occupation: 'Martial Artist'
};

// adminName is a property of the global scope.
// It can be deleted since it is created without var.
// Therefore, it is configurable.
console.log(delete adminName);       // returns true

// since var was used.
// fighterCount is not configurable and cannot be deleted
console.log(delete fighterCount);       // returns false

// delete can be used to remove properties from objects
console.log(delete fighterDetails.name); // returns true

// Even when the property does not exists, it returns "true"
console.log(delete fighterDetails.speed); // returns true

// delete does not affect built-in static properties
console.log(delete Math.PI); // returns false

// fighterDetails is a property of the global scope.
// Since it defined without "var", it is marked configurable
console.log(delete fighterDetails);   // returns true