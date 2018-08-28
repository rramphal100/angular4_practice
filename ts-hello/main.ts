import { Point } from './point';

let message;
message = 'abc';

//type assertions - even though message is of type 'any', we can run code that 
//asserts the variable has a string type right now, as shown below.
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');


function log(message){
    console.log(message);
}

let doLog = (message) => console.log(message);

//custom types:
//two ways to set the type of object passed into functions:
//1. in-line type annotation
let drawPoint = (point: { x: number, y: number}) => {
    //...
}

//2. interfaces
interface PointInterface {
    x: number,
    y: number,
    draw: () => void
}

//or classes
class Point_Old {
    private x: number;
    private y: number;

    //the ? next to the parameter names makes that parameter optional!!!
    //i.e. they do not have to be supplied
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    getDistance(pointB: Point_Old) {
        //...
    }
}

//you can create the same class as above with less redundant code
//see point.ts

//classes are generally the better way to go.



//to instantiate and allocate memory: 
let point: Point_Old = new Point_Old(1,2);
point.draw();

let point2: Point = new Point(3,4);
point2.draw();
point2.x = 5;
point2.y = 6;
point2.draw();

// enum Color {Red = 0, Green = 1, Blue = 2};

// let backgroundColor = Color.Red;