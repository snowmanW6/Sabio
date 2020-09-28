
/* ===================================================================
HOISTING TEST SECTION

Within a linear top-down flow of code, will that particular function 
be hoisted to the top ready for cally before it is declared?


=================================================================== */

// speakExp();  //speakExp is not a function // cannot be hoisted
// speakArrow(); //speakArrow is not a function // cannot be hoisted 

console.log(speakExp); // gives undefined
console.log(speakArrow);   //  gives undefined
// console.log(something);   // something is not defined

speak(); // hoisted - Declared Functions hoist to the top

// ============== END OF HOISTING TEXT SECTION ========================


// ---------------- Declared Function -------------------------------
function speak() {
    console.log("Hello", this);
};


// ---------------- Function Expression -------------------------------
var speakExp = function () {
    console.log("Hello speakExp", this);
};

speakExp();  // now it can be called


// ---------------- Arrow Function -------------------------------
// Why? Allows "this" to access the global context versus the functions limited scope

var speakArrow = () => {
    console.log("Hello speakArrow", this);
};

speakArrow();

// Can be condensed to this:
var speakArrow2 = () => console.log("Hello speakArrow2", this);

speakArrow2();


// ------------------ Looking at return values and parameters  -------
// through the different functional flavors:

var quickReturn = function () {
    return 8;
}
// can be condensed to:    /// implied return
var quickReturn2 = () => 8;

var quickReturn3 = payload => payload + 8;

var quickReturn4 = (a, b) => a + b;



//  ------------------ Anonymous Function Expression
// Why??
// AKA: Immediately Invoked Function Expression
// It is a way to setup the environment properly without "dirtying"
// up the global namespace with another function.
// It hides and protects your variables, actions from being tinkered with.

// Basically functions hiding within an expression that don't need to be named.
// But they must exist within () or be operated initiated (versions D and E).

// version A
(
    function () {
        console.log("Hi");
    }()
);

// version B
(function () {
    alert("Parentheses around the function");
})();

// version C
(function () {
    alert("Parentheses around the whole thing");
}());

// version D
!function () {
    alert("Bitwise NOT operator starts the expression");
}();

// version E
+function () {
    alert("Unary plus starts the expression");
}();



// ----------- Declared Function: Functional Object Contructor ; 
// Invoking a Function with a Function Constructor
function Vehicle(name, maker) {     // function declaration with two parameters ready for arguments
    this.name = name;
    this.maker = maker;
}

let car1 = new Vehicle('Fiesta', 'Ford');       // function call with two arguments passed
let car2 = new Vehicle('Santa Fe', 'Hyundai');

console.log(car1.name);    //Output: Fiesta
console.log(car2.name);    //Output: Santa Fe


// function as a method, within an object declaration
var myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName();         // Will return "John Doe"

// ---------------- More bells and whistles ....
// Examine this object constructor:

function Aircraft(name = ""
    , manuf = "unknown"         // example of paramter with default value
    , engineCount = 0
    , isManned = true
) {
    Aircraft.entityName = "aircraft";  // STATIC value; 
    // not passed on automatically by inheritance

    this.name = name;
    this.manufacturer = manuf;
    this.engineCount = engineCount;
    this.isManned = isManned;
    this.id = 0;

    this.entityName = function () { // a function within the function
        return Aircraft.entityName;
    }
}

// There's a lot going on here.  On the parameters side, if an argument is not supplied 
// by the function call, there is a default parameter value ready to fill it.  
// That being said, you can't skip paramters and hope it works.  Parameters are applied
// in the order they are called.

// Note the property "entityName" .... it is the same for every Aircraft object. It is STATIC.
// Normally you would have to reference by calling the object type directly:

let aircraftName = Aircraft.entityName;
console.log(aircraftName);

// But, you can build this functionality back into the object to retrieve that static value.
// And you won't have to worry about trying to figure out what the object type is to be able
// to retrieve the object's "entityName" property value.


/* ===================================================================
TOO MANY ARGUMENTS SECTION

Within a linear top-down flow of code, will that particular function 
be hoisted to the top ready for cally before it is declared?


=================================================================== */v
// excess arguments example

let fName = "Mark";
let lName = "Twain";
let age = 86;
var myPerson = buildPerson(fName, lName, age, "Author", "555 SE Winding Rd"); // arguments
console.log(myPerson);

function buildPerson(fName, lName, age) // parameters // order matters
{
    return {            // returns a newly created object
        firsName: fName,    // a key value pair
        lastName: lName,
        age: age,
        next: arguments[3]  // excess arguments can be referenced using 
        // zero-based array indexing of "arguments" parameter

    };  // end of object declaration and end of return call.
}


// ============== END OF EXCESS ARGUMENTS SECTION ========================


// ------------ CLOSURE    - INVOKED but accessible, variables private 
var add = (function () {
    var counter = 0;
    return function () { counter += 1; return counter }
})();

add();
add();
add();
            // the counter is now 3