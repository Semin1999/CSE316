
// variables - let (not var)
function func () {
    // aVar should exist for the whole function
    let a = 0;
    console.log("aVar before while: " + aVar);
    while (a < 10) {
	// aLet exists from here to the next close brace
	var aVar = 5;
	let aLet = 6;
	console.log(a);
	a = a + 1;
    }

    console.log(aVar);
//    console.log(aLet);
}

// func();



// constnts
const pi = 3.14;

// pi = 3.5;   // Bad. This will not work

// types [primitive, reference]
// primitive - number, string, boolean, undefined, null

// reference - Object, arrays, functions
let a = 5;
let b = 6.6;
let st = "This is a string";
let isRaining = true;


// arrays
let myArray = [1, 2, 3, 4, 5]

a = 0;
while (a < myArray.length) {
    console.log(myArray[a]);
    a = a + 1;
}

// operators
// +, *, -, /, %, **
let myPow = a ** 3;
console.log("a, myPow: " + a + ", " + myPow);

// objects
// dot notation, bracket notation
let person = {
    name: 'John',
    age: 40
}

console.log("Name: " + person.name + ", age: " + person.age);
console.log("Name: " + person['name'] + ", age: " + person['age']);

let field = 'name';

console.log("Field of person: " + person[field]);



// functions - parameters, arguments



// Assignment [strict/lose equality]
// Compound
a += 3;
console.log( "New a: " + a);

// Relationals (>, <, >=, <=)

// Equality (==, ===, !=, !==)
let x = 5;
let y = '5';
let z = 5;

if (x === y) {
    console.log("Cool!");
} else if (x == y) {
    console.log("Not bad");
}
if (x === z) {
    console.log("Okay");
} 

// Ternary
console.log("x==y: This is " + (x == y) ? 'True' : 'Not True');

// bitwise operators

// Conditionals [if/else, switch/case]

let res1 = 24;
// logical operators [&&, ||, !]
if ((x >= 5) && (res1 < 22)) {
    console.log("Both are true");
} else if ((x >= 5) || (res1 < 22)) {
    console.log("At least 1 is true");
}

// Iteration [while, do...while, for...]

z = 11;
do {
    console.log("z = " + z);
    z += 1;
} while (z < 10);


// Iteration (for...in[objects, arrays], for...of [arrays, >=es6])
let statelist = ["New York", "New Jersey", "California", "Colorado"];

for (stateidx in statelist) {
    console.log(statelist[stateidx]);
}
for (state of statelist) {
    console.log(state);
}

for (field in person) {
    console.log(field);
    console.log(person[field]);
}


// break, continue

// objects in detail
//   buiding : factory functions, constructor functions

function createCircle(radius, x, y) {
    return {
	radius,
	center: {x: x, y: y},
	draw() {
	    console.log('drawing: radius: ' + radius);
	}
    }
}

let c1 = createCircle(5, 0, 0);
let c2 = createCircle(10, 15, 7);

console.log("C1:");
c1.draw();
console.log("C2:");
c2.draw();

function Circle(radius, x, y) {
    this.radius = radius;
    this.center = {x: x, y: y};
    this.draw = function() {
	console.log('draw');
    }
}

let c3 = new Circle(1, 0, 0);
let c4 = new Circle(10, 1, 1);

console.log(c3);
console.log(c4);
c3.draw();
c4.draw();

// Builtin objections: Math, String, Date

// Arrays: indexOf, lastIndexOf, push, unshift, splice(), find(predicate)
/// pop(), shift(), 

// sorting, testing element (every(), some())

// filter, map, reduce

// rest operator, default values

// getters and setters

//try...catch




