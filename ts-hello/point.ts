//the export keyword turns this FILE into a module. Each part that has
//the export keyword can be imported into other TypeScript files.

export class Point {
    constructor(private _x?:number, private _y?:number){};

    draw(){
        console.log("X: " + this._x + ", Y: " + this._y);
    }

    //you can use properties, like defined below, to set constraints on how you
    //get and set values for variables

    //get and set are reserved property words in TypeScript 
    //without a set property or a setter method, you cannot assign a value
    //to a private var, for example.
    set x(value:number) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');

        this._x = value;
    }

    set y(value: number) {
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

    //properties like the get and set above, can be used as fields (like variables)
    //instead of only as methods
}