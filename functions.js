// function with default parameters
function defaultParams(text = 'default text', number = 3) { // if no values are passed values will default to
    console.log("Logging: " + number + " times");           // to what is being assigned instead of undefined
    for (let i = 0; i < number; i++) {
        console.log(text);
    }
}

defaultParams();
// Logging: 3 times
// default text
// default text
// default text

// passing in undefined still defaults to the default values:
defaultParams(undefined, undefined);
// Logging: 3 times
// default text
// default text
// default text

// text is set to '' & number is now null
defaultParams("", null);
// Logging: null times

defaultParams('more text', 5);
// Logging: 5 times
// more text
// more text
// more text
// more text
// more text

function defaultArray(value, array = []) {
    array.push(value);
    return array;
}

// a new object is created each time the function is called since it gets evaluated at call time
console.log(defaultArray(2)); // [ 2 ]
console.log(defaultArray(4)); // [ 4 ]
console.log(defaultArray(6)); // [ 6 ]

// anonymous functions

// function scope