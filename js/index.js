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

//functions is a set of statements that either perform a task, or calculates

//function s task
function greet(name, lastName) { //name is a we have at the time of declaration
    console.log('hello' + ' ' + name + ' ' + lastName); //body of function
}

greet('john', 'smith');// name here which is john is an argument is the actual supply value of that parameter

//calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));

//operators

//arithmatic operator
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(x % y);
console.log(x ** y);

//increment (++) will be totalt plus 1 
console.log(x++);

//decrement (--)
console.log(--x);

//assignment operator
x = x + 5;
x += 5;

x = x * 3;
x *= 3;

//comparisson operator
let z = 1;

//relational operator
console.log(z > 0);
console.log(z >= 1);
console.log(z < 1);
console.log(z <= 1);

//equality
console.log(z === 1);
console.log(z !== 1);


//strict equality (type + value)
console.log(1 === 1);
console.log('1' === 1);

//lose equality
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

//ternary operator
// if a costumer has more than 100 points 
// they are a gold customer, otherwise
// they are a silver customer

let points = 120;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

//logical operators
//logical AND (&&)
//returns TRUE if both operands are True
console.log(true && true);
console.log(false && true);

//logical OR (||)
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
console.log('Eligible', eligibleForLoan);

//not (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);

//logocal operator with non booleans
//falsy- undifined, 0, null, false, '', nan

let userCOlor = '';
let defaultColor = 'blue';
let currentColor = userCOlor || defaultColor;

console.log(currentColor);

//bitwise operator
// 1 = 0000001
// 2 = 0000010
// 3 = 0000011
// R = 0000000

console.log(1 | 2); //bitwise OR
console.log(1 & 2); //bitsie AND


//read, write, execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

//precedence operator

let xx = 2 + 3 * 4;
console.log(xx);

let cc = (2 + 3) * 4;
console.log(cc)