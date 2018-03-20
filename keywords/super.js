// super - used to access and call functions on an object's parent
class Rectangle {
    constructor(height, width) {
        this.name = 'Rectangle';
        this.height = height;
        this.width = width;
    }
    sayName() {
        console.log('Hello, I am a', this.name + '.');
    }
    get area() {
        return this.height * this.width;
    }
    set area(value) {
        this.height = this.width = Math.sqrt(value);
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length); // using super, we are calling the parent class constructor, providing width and height to the parent
        this.name = 'Square';
        this.height;
    }
}

var square = new Square(5);
console.log(square.area); // 25
console.log(square.sayName()); // Hello, I am a Square.

// using super.prop in object literals
var firstObject= {
    consoleLog() {
        console.log('I am logging to the console');
    }
};

var secondObject = {
    borrowingMethod() {
        super.consoleLog();
    }
};

//  set the prototype of secondObject to firstObject, so that super is able to find consoleLog() on firstObject.
Object.setPrototypeOf(secondObject, firstObject);
console.log(secondObject.borrowingMethod()); // logs "I am logging to the console"