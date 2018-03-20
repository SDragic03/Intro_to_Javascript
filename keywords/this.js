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