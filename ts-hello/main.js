let message;
message = 'abc';
//type assertions - even though message is of type 'any', we can run code that 
//asserts the variable has a string type right now, as shown below.
let endsWithC = message.endsWith('c');
let alternativeWay = message.endsWith('c');
function log(message) {
    console.log(message);
}
let doLog = (message) => console.log(message);
//custom types:
//two ways to set the type of object passed into functions:
//1. in-line type annotation
let drawPoint = (point) => {
    //...
};
//or classes
class Point {
    //the ? next to the parameter names makes that parameter optional!!!
    //i.e. they do not have to be supplied
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log("X: " + this.x + ", Y: " + this.y);
    }
    ;
    getDistance(pointB) {
        //...
    }
}
//you can create the same class as above with less redundant code
class Point2 {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    ;
    draw() {
        console.log("X: " + this._x + ", Y: " + this._y);
    }
    //you can use properties, like defined below, to set constraints on how you
    //get and set values for variables
    //get and set are reserved property words in TypeScript 
    //without a set property or a setter method, you cannot assign a value
    //to a private var, for example.
    set x(value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');
        this._x = value;
    }
    set y(value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');
        this._y = value;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
}
//classes are generally the better way to go.
//to instantiate and allocate memory: 
let point = new Point(1, 2);
point.draw();
let point2 = new Point2(3, 4);
point2.draw();
point2.x = 5;
point2.y = 6;
point2.draw();
// enum Color {Red = 0, Green = 1, Blue = 2};
// let backgroundColor = Color.Red;
