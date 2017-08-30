/**
 * Created by srddrag on 7/6/17.
 */

// Hoisting - program load order - ensuring that every line of code can execute when its needed

function getMysteryNumber() {

    function chooseMystery() {
        return 12;
    }

    return chooseMystery();

    function chooseMystery() {
        return 7;
    }
}

getMysteryNumber();

// What will happen is that the first chooseMystery() that returns 12 will get hoisted to the top
// Then the second chooseMystery() that returns the 7 will hoist next - and override the first function with its value
// resulting in a return value of 7.


///////////////

// Function expressions are never hoisted! They are treated as assignments.

function getPysteryNumber() {

    var choosePystery = function () {
            return 12;
    }

    return choosePystery();

    var choosePystery = function () {
            return 7;
    }
}

getPysteryNumber();

// What will happen is that the first variable var choosePystery will get hoisted to the top as undefined.
// Then the second variable will get hoisted to the top as undefined and overrride the first variable
// the first choosePystery = function returning 12 will execute/
// then return choosePystery(); will return that value (12)
// resulting in the second choosePystery = function returning the value 7 to be unreachable!

//////////////////

function getPysteryNumber() {

    return choosePystery();

    var choosePystery = function () {
        return 12;
    }

    var choosePystery = function () {
        return 7;
    }
}

getPysteryNumber();

// What will happen is that the first variable var choosePystery will get hoisted to the top as undefined.
// Then the second variable will get hoisted to the top as undefined and overrride the first variable.
// return choosePystery(); will be called.
// and return the variable which at this point is undefined
// resulting in an error.



// Declared functions over function expression