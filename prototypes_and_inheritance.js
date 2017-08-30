// Prototypes are like blue prints - inheritance

// Inheritance - passing down properties

// A Prototype is like a blueprint Object for the Object we are trying to create

// Example - ARRAY Prototype, STRING Prototype, NUMBER Prototype, FUNCTION Prototype

// Prototype chain:

// OBJECT PROTOTYPE - contains hasOwnProperty() so it lets the string calling it use it
// ^
// STRING PROTOTYPE - does not contain hasOwnProperty() so it asks its parent
// ^
var myString = "I am secretly a child of the String prototype";
myString.hasOwnProperty();

// OBJECT PROTOTYPE - The prototype chain stopped because function stopped at the STRING PROTOTYPE
// ^
// STRING PROTOTYPE - charAt is contained with this prototype and allows myString to use it
// ^
var myString = "I am secretly a child of the String prototype";
myString.charAt();

// Adding Inheritable Properties to Prototypes - Like Extension methods

String.prototype    // This dot notation finds the prototype for all String values everywhere

// To add our function, we us dot notation and name the new property,
// this will make it inheritable by all Strings
String.prototype.countAll = function (letter) {
   var letterCounter = 0;

   for (var i = 0; i < this.length; i++) {
// "this" always refers to the calling object
     if (this.charAt(i).toUpperCase() == letter.toUpperCase()) {
        letterCounter++;
     }
   }
   return letterCounter;
}


var witch = "I'll get you, my pretty... and your little dog, too!";

witch.countAll("I"); // returns 2


//////////// Overriding Prototypal Methods //////////////////////////

var x = 4;

var y = "4";

// The "value" in valueOf() return the primitive type associated to the object
x.valueOf();    // returns 4

y.valueOf();    // returns the string "4";

x.valueOf() == y.valueOf(); // returns true -  because == uses type coercion! Turns a number contained within a string into
                            // an actual number.

x.valueOf() === y.valueOf(); // returns false -  DOES NOT ignore the type of the value and gives us a more detailed
                             // interpretation of equality.

var a = [3, "blind", "mice"];

a.valueOf(); // returns [ 3, "blind", "mice" ]

var Tornado = function() {

}
