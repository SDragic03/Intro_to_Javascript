// new - creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
function Owner(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

var firstOwner = new Owner('Surge', 27);
var skyline = new Car('Nissan', 'R34', 1998, firstOwner);
var nsx = new Car('Acura', 'NSX', 2005, firstOwner);

console.log(firstOwner.name + " owns the " + skyline.model);
console.log(firstOwner.name + " owns the " + nsx.model);