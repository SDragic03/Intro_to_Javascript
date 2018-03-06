let vehicles = ["Ford", "Chevrolet","BMW"];

vehicles.push("KIA"); // Adding KIA to the end of the array
// [ 'Ford', 'Chevrolet', 'BMW', 'KIA' ]

vehicles.pop(); // Removing KIA from the end of the array
// [ 'Ford', 'Chevrolet', 'BMW' ]

let copyVehicles = vehicles.slice(); // makes a copy of the array
// [ 'Ford', 'Chevrolet', 'BMW' ]
// [ 'Ford', 'Chevrolet', 'BMW' ]

vehicles.shift(); // Removing Ford from the front of the array
// [ 'Chevrolet', 'BMW' ]

vehicles.unshift("Ford"); // Adding Ford to the front of the array
// [ 'Ford', 'Chevrolet', 'BMW' ]

vehicles.push('General Motors'); // ["Ford", "Chevrolet", "BMW", "General Motors"]

let vehiclePosition = vehicles.indexOf('General Motors'); // finding the index of an
                                                          // item in the array
                                                          // 3

let startingPosition = vehicle.indexOf("BWM"); // 2
let removeVehicle = vehicles.splice(startingPosition, 2); // removing 2 items from
                                                          // the startingPosition 
                                                          // onwards to the end
                                                          // of the array
                                                          
// vehicles = // ['Ford", "Chevrolet']
// removeVehicle = ['BMW', 'General Motors']

let numbers = [2, 4, 6, 8]; // array with numbers inside it

// map working with a function requiring one argument
let doubles = numbers.map(function(number) { // creating a new array called doubles with the results of calling
    return number * 2;                       // a provided function on every element in the numbers array
});

console.log(doubles);
console.log(numbers);

// doubles = [4, 8, 12, 16]
// numbers = same

// creates a new array with the results of calling a provided function on every element using fat arrow
let multiplied = numbers.map(x => x * 2 );
// [4, 8, 12, 16]

console.log(multiplied);

// getting full name from object with map
let persons = [
    {firstName: "Bob", lastName: "Bobbing"},
    {firstName: "Rob", lastName: "Robbing"},
    {firstName: "Dan", lastName: "Smith"}];

function getFullName(person) {
    let fullName = [person.firstName, person.lastName].join(" ");
    return fullName;
}

console.log(persons.map(getFullName));

//reduce
let sum = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
}, 0);

console.log(sum); // 6

let sumWithArrow = [0, 1, 2, 3].reduce(( accumulator, currentValue ) => accumulator + currentValue, 0);
console.log(sumWithArrow); // 6

//concat
let startingLetters = ['a', 'b', 'c'];
let endingLetters = ['x', 'y', 'z'];
let odds = [1, 3, 5,];
let evens = [2, 4, 6];

console.log(startingLetters.concat(endingLetters));
// [ 'a', 'b', 'c', 'x', 'y', 'z' ]

let oddsAndEvens = odds.concat(evens);

console.log(oddsAndEvens);

// oddsAndEvens = [ 1, 3, 5, 2, 4, 6 ];

console.log(startingLetters.concat(oddsAndEvens));

// [ 'a', 'b', 'c', 1, 3, 5, 2, 4, 6 ]

// concatenating values to an array
let alphaNumeric = startingLetters.concat(2, [4, 6]);

console.log(alphaNumeric);

// alphaNumeric = [ 'a', 'b', 'c', 2, 4, 6 ]

// concatenating nested arrays
let nest1 = [[4]];
let nest2 = [2, [8]];

let nests = nest1.concat(nest2);

console.log(nests);

// nests = [ [ 4 ], 2, [ 8 ] ]