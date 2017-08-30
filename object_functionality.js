/**
 * Created by srddrag on 8/1/17.
 */

// Properties can also be functions!
// Object's function properties are often called its methods

var aquarium = {
        Nemo: {type: "fish", species: "clownfish", length: 3.7},
        Malin: {type: "fish", species: "clownfish", length: 4.1},
        Dory: {type: "fish", species: "blue tang", length: 6.2},
        Peach: {type: "echinoderm", species: "starfish", length: 5.3},
        "Coral Castle": {type: "environment", material: "coquina", moves: false},
        "Dragon Statue": {type: "enviornment", material: "plastic", moves: false},
        // We can add a new property to our aquarium that takes the name of our
        // addCritter function. Then we build an anonymous function.
        // The container parameter now disappears since we are making the function
        // belong to the container
        addCritter: function (name, type, species, length) {
            // THE VERY USEFUL "THIS" KEYWORD!
            // This always refers top the owner Object of the function in which the "this" is used...
            // When called with "this", addCritter says: Hey aquarium! Make a new
            //property called name and assign it to a new Object with these properties!
            this[name] = {type: type, species: species, length: length};
        }
};

//function addCritter(container, name, type, species, length) {
  // container[name]  = {type: type, species: species, length: length};
//}

function addToy(container, name, type, material, moves) {
    container[name] = {type: type, material: material, moves: moves};
}

// Now we can add a critter using the object aquarium and calling the function within it
aquarium.addCritter("Bubbles,", "fish", "yellow tang", 5.6);

// Building a function on the fly!
aquarium.takeOut = function(name) {
    // We can do this to keep track of the properties name
    // The first [name] finds the desired Object in the aquarium using the parameter as a property name - the parameter
    // The .name creates a new property IN the Object that we want to remove! This is not the same as the functions
    // parameter!
    // The third name is the functions parameter which assigns the old property name
    // to the newly created name ".name" property in the removed Object.
    this[name].name = name;

    // We create a temp variable that will help us hold on to the Object that we remove.
    // This way we still have access to it outside of the aquarium.
    var temp = this[name];
    delete this[name]; // Removes the property from the Owner object, in this case, the aquarium
    return temp; // This way we can still have a reference to the removed Object.
};

var fishOutOfWater = aquarium.takeOut("Marlin");

console.log(fishOutOfWater);

// We can remove toys as well
var toy = aquarium.takeOut("Dragon Statue");
console.log(toy);

// Generic Objects don't have a native length like Arrays and Strings do, so we can't use that in a loop
// format in order to get to each property

// Enumeration with the for-in loop

aquarium.countFish = function () {
    var numFish = 0;
    for (key in this) {
        if (this[key].type == "fish") {
            numFish++;
        }
    }
    return numFish;
}

var rockSpearguns = {
    Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
    Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
    Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
    Firefork: {barbs: 6, weight: 8, heft: "overhand"},
    "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

rockSpearguns["listGuns"] = function() {
    for (var property in this) {
        if (this[property]["heft"] != undefined) {
            console.log("Behold! " + property + ", with " +
                this[property]["heft"] + " heft!");
        }
    }
};

rockSpearguns["listGuns"]();
