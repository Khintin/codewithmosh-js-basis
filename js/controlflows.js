//if else
// Hour
//If the hour is 6am and 12pm: Good Morning!
//If it is between 12pm and 6pm; Good Afternoon!
//Otherwise: Good Evening!

let hour = 9;

if (hour >= 6 && hour < 12)
    console.log('Good Morning!');
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon!');
else
    console.log('Good Evening!');


//switch case

let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Modarator User');
        break;

    default:
        console.log('Unknown User');
}

if (role === 'guest')
    console.log('Guest User');
else if (role === 'moderator')
    console.log('Modarator User');
else console.log('Unknown User');

//loops - for, while, do while, for in, for of
//for loops
for (let i = 0; i < i < 5; i++) {
    console.log('Hello World', i);
}

//displaying odd numbers
for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
}

//displaying odd number backward
for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
}


//while loop
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

//do.. while loop always executed only once
//let i = 0;
//do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
//} while (i <= 5);


//infinite loops
//let i = 0;
// while (i = 5) {
//   console.log(i);
//   i++;
//}

//for...of loop
const colors = ['red', 'green', 'blue'];
for (let color of colors)
    console.log(color);


//break and continue
let v = 1;
while (v <= 10) {
    //if (v === 5) break;
    if (v % 2 === 1) {
        v++;
        continue;
    }
    console.log(v);
    v++;
}