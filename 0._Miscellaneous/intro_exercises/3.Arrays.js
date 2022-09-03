// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a", "b", "c"];
// show b in the console 

console.log("The letter b: ",letters[1])
// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it without touching the line above.  

const friend1 = {
	name: "Ross"
};

const friend2 = {
	name: "Phoebe"
};

const friend3 = {
	name: "Joey"
};

friends.push("\nAll the friends: ",friend1,friend2,friend3)

// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

const result = significantMathNumbers.indexOf(1729);

console.log("\nIndex of number: ",result);

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(2, 0, "hamburger", "soda", "pizza");

console.log("\nDiet: ",diet);


// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 


diet.pop();

console.log("\nLast removed: ",diet);


// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

//const dinnerTray = [];

dinnerTray = [...diet];


console.log("\nNew list: ",diet);

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

console.log("\nEvery second char:")

for (let i = 0; i <= 7; i++) {
    if (i%2!=0){
        console.log(lettersExpanded[i]);
    }
}


// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

console.log("\nIncluded numbers:");

for (let i = 0; i <= 8; i++) {
    const element = numbers[i];
    if (0>element || element>6){
        console.log(element);
    }
    else{
        discardedNumbers.push(element);
    }
}

console.log("\nDiscarded numbers: ",discardedNumbers);

// --------------------------------------


