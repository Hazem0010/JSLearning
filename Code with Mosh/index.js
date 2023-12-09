// This is my first JavaScript code!
console.log('Hello Hazem!');

// Declare a variable
let firstName = 'Hazem';
console.log(firstName);

let middleName, lastName;
middleName = 'Magdy';
lastName = 'Hanafy'
console.log(firstName + ' ' + middleName + ' ' + lastName);

// Non changable variable, using const keyword
const intresetRate = 0.3;
// Will through an error
/* intresetRate = 1.2; */
console.log(intresetRate);

//#region Types of data in JavaScript:
/**
 * Primitives / Value Types:
    * String
    * Number
    * Boolean
    * undefined
    * null
* 
* Reference Types
    * Object
    * Array
    * Function
*/

//#region Primitives / Value Types:
let myName = 'Hazem'; // String Literal
console.log( myName + ', Type: ' + typeof(myName));

let age = 34; //Numer Literal
console.log( age + ', Type: ' + typeof(age));

let height = 180.6; //Numer Literal
console.log( height + ', Type: ' + typeof(height));

let isApproved = true; // Boolean Literal (true, false)
console.log( isApproved + ', Type: ' + typeof(isApproved));

/*
The default value of a variable is undefined
let finalResult = undefined; === let finalResult;
both have value and type = undefined
*/
let finalResult = undefined;
console.log( finalResult + ', Type: ' + typeof(finalResult));

let selectedColor = null;
console.log( selectedColor + ', Type: ' + typeof(selectedColor));
//#endregion

//#region Reference Types:
// 1- Object Literal
let person = {
    name: 'Hazem',
    age: 34
};
console.log(person);
console.log(typeof(person));

// Access Object's property:
/* Dot Notation (More consice and cleaner, should be the default way) */
person.name = 'Arwa';
console.log(person.name);
person.age = '5';
console.log(person.age);

/* Bracket Notation */
person['name'] = 'Madiha';
person['age'] = 25;
console.log(person['name'] + ', ' + person['age']);

// Using Dynamic Bracket Notation
let userProperty = 'name';
person[userProperty] = 'Gihan';
console.log(person[userProperty]);

// 2- Array
let selectedColors = ['red', 'blue'];  // Array Literal
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = 'green';
console.log(selectedColors);
/* Arrays can stores diferent data types in the same array */
selectedColors[3] = 46;
selectedColors[4] = undefined;
console.log(selectedColors);
console.log(typeof(selectedColors));

// 3- Function
/* Prototype of a JavaScript function:
function_keyword function_name(parameter) {
    function_body
}
*/
// Performing a task
function greeting(firstName, lastName='') {
    console.log('Hello ' + firstName + ' ' + lastName);
}

// Call a function
greeting('Hazem', 'Magdy');
greeting('Arwa');

// calculate a value
function square(number)
{
    return number * number;
}
console.log(square(2));

let squareResult = square(3);
console.log(squareResult);
//#endregion

//#endregion
