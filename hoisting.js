// Hoisting - variables and function declarations are moved to the top of their scope before code execution
    // hosting only moves the declarations, assignments are left in place

console.log(typeof undefinedVariable); // undefined

console.log(undefinedVariable); // undefined

// Declaration
let declaredVariable;

// Initialisation
declaredVariable = 5;

// Usage
console.log(declaredVariable);

let globalVariable;

function hoisting() {
    globalVariable = 50;

    var confinedVariable = 100;
}

hoisting();

console.log(globalVariable); // 50

// console.log(confinedVariable); // ReferenceError: confinedVariable is not defined

// global variables
                    // variable hoist is declared and move to the top resulting in being
console.log(hoist); // undefined

var hoist = 'It is hoisted!';

// function scoped




