//data types
//let javascriptisFun = 'grdhggjh'
//console.log(javascriptisFun)

// console.log(typeof true)
// console.log(typeof 23)
// console.log(typeof 'Jonas')
// console.log(typeof javascriptisFun)


//let year;
// console.log(year)
// console.log(typeof year)

// year = 1989;
// console.log(typeof year)

// console.log(typeof null)

/// let const and var

// let age = 30;
// console.log(age)
// age = 33
// console.log("second use", age)

// const birthYear = 1989;
// birthYear = 1990;

// console.log(birthYear)

// var job = "programmer"
// job = "teacher"
// console.log(job)

//Basic operators

///Math operators
//const now = 2037
// const ageNishank = now - 1989
// const ageJonas = now - 1990
// console.log('ageJonas' + ageJonas, ageNishank)


///Assignment operators
// let x = 10 + 5; //15
// x += 10; // 25
// x *=4; // 100
// x++; //101
// x--; //100
// console.log(x)

//comparison operators

// console.log(ageJonas > ageNishank)
// console.log(ageJonas >= 18)

// const isFullAge = ageJonas >= 18
// console.log(isFullAge)


// const now = 2037;

//Coding challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height ** 2 (mass / (height * height)). 
mass is in kg and height is in meter.

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula 
3. Create a boolean variable 'markHiigherBMI' containing information about whether mark has a higher BMI than John

Test Data 1: Mark weight 78 kg and is 1.69 m tall. John weight is 92 kg and is 1.95 m tall
Test Data 2: Mark weight 95 kg and is 1.88 m tall. John weight is 85 kg and is 1.76 m tall
*/



// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);*/


//String and Template literals

// const firstName = 'Nishak';
// const job = 'teacher';
// const birthYear = 1989;
// const year = 2037;

// const nishank = "I'm" + firstName + ', a' + (year - birthYear) + ' year old ' + job + '!'; //String Literal
// console.log(nishank)

// const nishakNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}` //template literal


//Taking decisions if / else statements
// const age = 22
// if (age >= 18) {
//     console.log('Nishank can start driving')
// } else {
//     console.log('Nishank is too young to drive')
// }

//coding challenge 2
// do the first challenge by taking the help of if and else statement

///Switch case

// const day = 'sunday';
// switch (day) {
//     case 'monday':
//     console.log('plan course structure')
//     break;
//     case 'tuesday':
//     console.log('prepare theory part')
//     break;
//     case 'wednesday':
//     case 'thursday':
//     console.log('write code example')
//     break;
//     case 'friday':
//     console.log('record videos')
//     break;
//     case 'saturday':
//     case 'sunday':
//     console.log('enjoy the weekend')
//     break;
//     default:
//     console.log('not a valid day')
// }

////ternary operators (conditional operators)
// const age = 33;
//  age >= 25 ? console.log('I like to drink wine') : console.log('I like to drink milk')

// const drink = age >= 25 ? 'wine' : 'water';
// console.log(drink)

// coding challenge 3

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. 
In his country, 
it's usual to tip 15% if the bill value is between 50 and 300. 
If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. 
Create a variable called 'tip' for this. 
It's not allowed to use an if/else statement (If it's easier for you, 
you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, 
and the final value (bill + tip). Example: 
'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/