// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const result = Number(numberOne) + Number(numberTwo);

console.log(result);

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const result2 = Number(anotherNumberOne) + Number(anotherNumberTwo);

console.log(result2.toFixed(2));


// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals


result3 = (one+two+three)/3

console.log(result3.toFixed(5));


// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters[2]);



// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const string1 = fact.slice(0,17)
const string2 = fact.charAt(17).toUpperCase();
const string3 = fact.slice(18)

const factResult = string1+string2+string3

console.log(factResult);

// --------------------------------------



