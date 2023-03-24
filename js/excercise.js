//excercise one
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

//excercise two
//write a fucntion that two number and returns the maximum of two
let numbers = twoNumbers(1, 2);
console.log(numbers);

function twoNumbers(number1, number2) {
    return (number1 > number2) ? number1 : number2;
}

//excercise three
//divisible by 3 => Fizz
//divisible by 5 => Buzz
//divisible by both 3 and 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//not a number => 'not a number'
const output = fizzBuzz(false);
console.log(output)

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return 'not a number';

    if ((input % 3) === 0 && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';



    return input;
}
