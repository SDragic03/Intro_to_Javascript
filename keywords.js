//debugger

// invokes any available debugging functionality when the keyword is executed

function enableDebugger() {
    // ... doing stuff
    debugger; // execution pauses here and debugger functionality is invoked
              // resulting in the same behavior as when a breakpoint is set
}

// this
    // this is an referent to an object
    // this keyword is used for precision and to make our code unambiguous
    // it tells us that we are referring to a specific object
    // it also contains the value of the object

    // this is assigned the value of the object that invoked the this function

// using this in the global scope
var firstName = 'John', lastName = 'Wick';

function showFullName() {
    console.log(this.firstName + " " + this.lastName);
}

var person = {
    firstName: 'Bruce',
    lastName: 'Lee',
    showFullName: function() {
        console.log("What is This referring to?" + this);
        console.log(this.firstName + " " + this.lastName); // The
    }
};

showFullName(); // John Wick

// window.showFullName(); // John Wick

// person.showFullName(); // Bruce Lee

// this and context
var anotherPerson = {
    firstName: 'Chuck',
    lastName: 'Norris'
};

// invoking showFullName() with a different object and utilizing apply we can change the context of this
person.showFullName.apply(anotherPerson); // Chuck Norris

// this inside closure
var user = {
    tournament: "World Championship",
    data: [
        {name: 'Bruce Lee', age: 32},
        {name: 'Chuck Norris', age: 78},
        {name: 'Tony Jaa', age: 42}
    ],

    clickHandler: function () {
        var that = this; // maintaining this inside anonymous functions
        this.data.forEach(function (person) { // this" refers to the user {} so the data property works
            console.log("What is This referring to?" + this);
            // "this" no longer refers to the user {}...
            // console.log(person.name + " is fighting at " + this.tournament); // undefined - this variable is accessible only by the function itself, not by inner functions
            console.log(person.name + " is fighting at " + that.tournament);
        })
    }
};

user.clickHandler();

// this and method assigned to a variable
// data variable is a global variable
var data = [
    {name: 'A. Smith', age: 2000},
    {name: 'Neo', age: 32}

];

var user2 = {
    data: [ // property of user2 {}
        {name: 'Bruce Lee', age: 37},
        {name: 'Tony Jaa', age: 22}
    ],
    showData: function(event) {
        var randomNumber = ((Math.random() * 2 | 0) + 1) -1; // 0 || 1

        console.log(this.data[randomNumber].name + " " + this.data[randomNumber].age);
    }
};

// if we do the following:
// var showUserData1 = user2.showData(user2);
// showUserData1(); // we wil still get values from the global data [], not from the data [] in the user2 {}

// to avoid this, we can specifically set the this value with the bind method
var showUserData2 = user2.showData.bind(user2);
showUserData2(); // the value from the user2 {}, because this is bound to the user2 {}


// this when borrowing methods
var gameController = {
    scores: [5, 10, 13, 14, 16],
    averageScore: null,
    players: [
        {name: 'Bruce', playerID: 123, age: 27},
        {name: 'Chuck', playerID: 456, age: 29}
    ]
};

var appController = {
    scores: [23, 12, 11, 16, 12],
    averageScore: null,
    average: function () {
        var sumOfScores = this.scores.reduce(function (previous, current, index, array) {
            return previous + current;
        });

        this.averageScore = sumOfScores / this.scores.length;
    }
};

// gameController.averageScore = appController.average(); // undefined
// console.log(gameController.averageScore); // undefined

// We borrow the appController’s average() method and
// set the value of “this” explicitly to the gameController {}
appController.average.apply(gameController, gameController.scores);
console.log(gameController.averageScore); // 11.6
console.log(appController.averageScore); // null

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

var name = 'XYZ';

// We can access this global property using:
// Object.getOwnPropertyDescriptor(window, 'name');

// output: Object {value: "XYZ",
//                  writable: true,
//                  enumerable: true,
//                  configurable: false}

// Since "name" is added using with the
// var keyword, it is marked as "non-configurable"
// this applies to let and const as well

// console.log(delete name);   // return false

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

// new - creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
function Owner(name, age) {
    this.name = name;
    this.age = age;
}

var firstOwner = new Owner('Surge', 27);
var skyline = new Car('Nissan', 'R34', 1998, firstOwner);
var nsx = new Car('Acura', 'NSX', 2005, firstOwner);

console.log(firstOwner.name + " owns the " + skyline.model);
console.log(firstOwner.name + " owns the " + nsx.model);

// super

// in - returns true if the specified property is in the specified object or its prototype chain.

// Arrays
var vehicles = ['Honda', 'Nissan', 'Toyota', 'Ford', 'Dodge'];
0 in vehicles        // returns true
3 in vehicles        // returns true
6 in vehicles        // returns false
'bay' in vehicles    // returns false (you must specify the
                  // index number, not the value at that index)
'length' in vehicles // returns true (length is an Array property)
Symbol.iterator in vehicles // returns true (arrays are iterable

// Predefined objects
'PI' in Math          // returns true

// Custom objects
var mycar = {make: 'Honda', model: 'Civic', year: 2018};
console.log('make' in mycar);  // returns true
console.log('model' in mycar); // returns true

delete mycar.model;
console.log('model' in mycar);  // returns false

mycar.make = undefined;
console.log('make' in mycar);  // returns true