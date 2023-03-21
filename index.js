//variables we use to store data temporarily in the computer
let firstName = 'Cristina';
let lastName = 'Syversen';
console.log(firstName, lastName)

//constants 
const interestRate = 0.3;
console.log(interestRate);

//primitive stirng, number, boolean, undefined
//reference types objects, array and functions

let name = 'Cristina'; //string literal
let age = 30; // number literal
let isApproved = false //boolean literal
let selectedColor = null; // to clear the value of a variable

//java script is a dynamic language
// two types of programing languages

//object

let person = {
    name: 'Cristina',
    age: 30
};

//dot notation 

person.name = 'Tina';

//bracet notation

person['name'] = 'Mary'

console.log(person);

//arrays

let selectColor = ['red', 'blue'];
console.log(selectColor.length);

//functions

function greet(name, lastName) { //name is a we have at the time of declaration
    console.log('hello' + ' ' + name + ' ' + lastName); //body of function
}

greet('john', 'smith');// name here which is john is an argument is the actual supply value of that parameter
