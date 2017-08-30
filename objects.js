/**
 * Created by srddrag on 7/25/17.
 */

// What is an object? - Objects are "containers" of related information
//  - Multiple pieces of data, called properties, are grouped within an Object

// Because an Object contains multiple bits of info, its often called a "composite value"

// Object literal

var booksArray = ["Great Expectations", "The Remains of the Day", "Peter Pan"];
var myBox = {height: 6, width: 8, length: 10, volume: 480,      // An Object
            material: "cardboard", contents: booksArray         // Objects can contain variables!
            };

myBox.length; // Getting a specific properties value

myBox.length = 12; // Reassigning a specific property a new value

myBox.volume = myBox.length * myBox.width * myBox.height;

myBox.contents.push("On The Road"); // Adds the new string to the booksArray variable, modifies the existing variable

// Even after an object has been created, properties can continue to be added

myBox.weigh = 24;

// A second way to accessing or creating properties - we can use brackets on Object in similar fashion to accessing
// array indices

myBox["volume"];
myBox["material"];  // Accessed since props already exist

myBox["destination1"] = "Orlando";  //  Created and assigned since it did not exist!
myBox["destination2"] = "Miami";    //  Same


// Since the brackets use or check for an exactly matching string, we can also create properties with spaces
// and characters in their names

myBox["# of stops"] = 2;    // CAN ONLY USE SPACES LIKE THIS WITH THE BRACKETS METHOD

// CANNOT DO -

//console.log(myBox."# pf stops");

console.log(myBox["# of stops"]);

// Brackets enable dynamic property access - brackets take in expressions allowing us to avoid hard-coding every
// property access


for(var i = 1; i <= myBox["# of stops"]; i++) {
   console.log( myBox["destination" + i]);  // We can place string-based expressions in the brackets to construct
                                            // specific property names
}

//  function that creates Book objects and adds them to our Box object
function addBook(box, name, writer){
    box["# of Books"]++;
    box["book" + box["# of Books"]] = {title: name, author: writer};
}

addBook(myBox, "Great Expectations", "Charles Dickens");
addBook(myBox, "Peter Pan", "J. M. Barrie");

// Will look like this:

//  book1: {title: "Great Expectations", author: "Charles Dickens"}
//  book2: {title: "Peter Pan", author: "J. M. Barrie"}

// Referencing objects within objects

console.log(myBox.book1.title);
// OR
console.log(myBox["book2"]["author"]);

