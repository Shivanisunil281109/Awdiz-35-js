
// 1. every()

// Question 1: Check if Every Number is Less Than 50

const numbers = [10,20,30,40];
const output = numbers.every((num) => num < 50);
console.log(output, "output");


// Question 2: Check if Every Student is Eligible to Vote

const ages = [18,22,25,16,30];
const output = ages.every((age) => age >= 18);
console.log(output, "output");




// // 2. fill()
// Question 1: Replace All Elements with 0

const numbers =[1,2,3,4,5];
const output = numbers.fill((0));
console.log(output,"output");


// Question 2: Replace Only "B" and "C" with "X"

const letters = ["A","B","C","D","E"];
const output = letters.fill("X",1,3);
console.log(output, "output");




// 3. findLast()

// Question 1: Find the Last Number Greater Than 50

const numbers = [12,45,78,23,90,35];
const output = numbers.findLast((num)=> num>50);
console.log(output,"output");


// Question 2: Find the Last Even Number

const numbers = [5,8,11,14,17,20];
const output = numbers.findLast((num) => num % 2 === 0);
console.log(output, "output");




// 4. findLastIndex()

// Question 1: Find the Index of the Last Number Greater Than 35

const numbers=[10,20,30,40,50,60];
const output =numbers.findLastIndex((num)=>num>35);
console.log(output,"output");

// Question 2: Find the Index of the Last Even Number

const numbers = [1,3,5,8,7,10];
const output = numbers.findLastIndex((num) => num % 2 === 0);
console.log(output, "output");




// 5. includes()
// Question 1: Check Whether "React" Exists

const technologies = ["HTML","CSS","Javasript"];
const output = technologies.includes("React");
console.log(output,"output");

// Question 2: Check Whether 300 Exists

const numbers = [100,200,300,400];
const output = numbers.includes(300);
console.log(output, "output");




// 6. join()
// Question 1: Join Names using " | "

const players = ["Virat","Rohit","Rahul"];
const output = players.join(" | ");
console.log(output, "output");

// Question 2: Join Letters without Separator

const letters = ["M","E","R","N"];
const output = letters.join("");
console.log(output, "output");




// 7. lastIndexOf()
// Question 1: Find the Last Index of "apple"

const fruits = ["apple","banana","apple","orange","apple"]
const output = fruits.lastIndexOf("apple");
console.log(output,"output");

// Question 2: Find the Last Index of 20

const numbers = [10,20,30,20,40,20];
const output = numbers.lastIndexOf(20);
console.log(output, "output");




// 8. reverse()
// Question 1: Reverse the Array

const numbers = [1,2,3,4,5];
const output = numbers.reverse();
console.log(output, "output");

// Question 2: Reverse the Technologies

const technologies = ["HTML","CSS","JavaScript"];
const output = technologies.reverse();
console.log(output, "output");




// 9. slice()
// Question 1: Extract "C" and "D"

const letters = ["A","B","C","D","E"];
const output = letters.slice(2,4)
console.log(output, "output");



// Question 2: Extract Last Three Elements

const numbers = [10,20,30,40,50,60];
const output = numbers.slice(-3);
console.log(output, "output");





// 10. splice()
// Question 1: Insert "Feb" at the Correct Position


const months = ["Jan","Mar","Apr"];
const output = months.splice(1,0,"Feb");
console.log(months, "months");

// Question 2: Replace "PHP" with "JavaScript"

const technologies = ["HTML","CSS","PHP"];
const output = technologies.splice(2,1,"JavaScript");
console.log(technologies, "technologies");



// 11. toString()
// Question 1: Convert [1,2,3,4,5] into String

const numbers = [1,2,3,4,5];
const output = numbers.toString();
console.log(output, "output");

// Question 2: Convert Technologies Array into String

const technologies = ["HTML","CSS","JavaScript"];
const output = technologies.toString();
console.log(output, "output");