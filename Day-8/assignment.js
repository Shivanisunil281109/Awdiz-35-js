
// For Loop - Question 1
// Print numbers from 1 to 20 using a for loop.

for(let i = 1; i <= 20; i++){
    console.log(i);
}



// For Loop - Question 2
// Print numbers from 50 to 100

for(let i = 50; i <= 100; i++){
    console.log(i);
}



// For Loop - Question 3
// Print all even numbers between 1 and 50

for (let i=1; i<=50; i++){

    if(i % 2 ===0){
        console.log(i);
    }
}



// For Loop - Question 4
// Print all odd numbers between 1 and 50

for(let i = 1; i <= 50; i++){

    if(i % 2 === 1){
        console.log(i);
    }

}





// For Loop - Question 5
// Find the sum of numbers from 1 to 100

let sum =0;
for (i=1; i<=100; i++){

    sum = sum + i;
}
console.log(sum,"sum");





// For Loop - Question 6
// Count how many numbers are divisible by 5 between 1 and 100

let count = 0;

for(let i = 1; i <= 100; i++){

    if(i % 5 === 0){
        count++;
    }
}
console.log(count, "count");




// For Loop - Question 7
// Print multiplication table of 7

 for (i=1; i<=10; i++){
    console.log("7 *",i,"=",7*i);
 }





// For Loop - Question 8
// Print numbers from 20 to 1 in reverse order.

for ( let i=20; i>=1; i--){
   console.log(i);
}





// For Loop - Question 9

// Find the total count of even and odd numbers between 1 and 200.

let evencount =0;
let oddcount = 0;

for( let i=1; i<=200;i++){
   if(i%2 ===0){
      evencount++;
   }else{
      oddcount++;
   }
}

console.log(evencount,"evencount");
console.log(oddcount,"oddcount");






// For Loop - Question 10
// Print the square of numbers from 1 to 10.

for(let i=1; i<=10;i++){
   console.log(i,"->",i*i);
}





// If-Else practice Questions 10 

// // If-Else - Question 1 
// Check if a number is even or odd.

const number = 15;

if(number % 2 === 0){
    console.log("Even Number");
}else{
    console.log("Odd Number");
}




// If-Else - Question 2
// Problem

// Check whether a person is eligible for a driving license.

// Age > 18  → Eligible
// Age == 18 → Learner License
// Age < 18  → Not Eligible



const  age =20;
if(age>18)
   {
   console.log("Eligible")
}
else if(age===18)
{
console.log("learner Licence")
}
else{
   console.log("Not Eligible");
}



// If-Else - Question 3
// Check whether a student has passed or failed.

const marks = 75;
if (marks>=35){
   console.log("pass");
}else{
    console.log("Fail");
}



// Question 4
// Check whether a number is:

const number = 25;

if(number > 0){
    console.log("Positive Number");
}
else if(number < 0){
    console.log("Negative Number");
}
else{
    console.log("Zero");
}



// Question 5
// Check whether a person can vote.

const age = 21;

if(age >= 18){
    console.log("Can Vote");
}else{
    console.log("Cannot Vote");
}



// Question 6
// Check which number is greater between two numbers.



const num1 = 25;
const num2 = 15;

if(num1 > num2){
    console.log(num1,"is Greater");
}else{
    console.log(num2,"is Greater");
}


// Question 7
// Check whether a year is a leap year or not.

const year = 2024;

if(year % 4 === 0){
    console.log("Leap Year");
}else{
    console.log("Not a Leap Year");
}

var isAssignmentCompleted = true;

if(isAssignmentCompleted){
    console.log("Good Job!");
}else{
    console.log("Please Complete It");
}




// Question 8
// Check whether a user has completed an assignment.

const isAssignmentCompleted = true;

if(isAssignmentCompleted){
    console.log("Good Job!");
}else{
    console.log("Please Complete It");
}



// Question 9
// Check whether a number is divisible by both 3 and 5.


const number = 30;

if(number % 3 === 0 && number % 5 === 0){
    console.log("Divisible by Both 3 and 5");
}else{
    console.log("Not Divisible by Both");
}



// Question 10
// Check whether a user can enter a movie.

const age = 20;

if(age >= 18){
    console.log("Entry Allowed");
}else{
    console.log("Entry Denied");
}



// Switch - Question 1
// Fruit Selection

const fruit = "Apple";

switch(fruit){

    case "Apple":
        console.log("Apple");
        break;

    case "Mango":
        console.log("Mango");
        break;

    case "Banana":
        console.log("Banana");
        break;

    default:
        console.log("Fruit Not Available");
}




// Switch - Question 2
// Weekdays

const day = "Monday";

switch(day){

    case "Monday":
        console.log("Monday");
        break;

    case "Tuesday":
        console.log("Tuesday");
        break;

    case "Wednesday":
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}





// Switch - Question 3
// Problem

// Months

const month = "January";

switch(month){

    case "January":
        console.log("January");
        break;

    case "February":
        console.log("February");
        break;

    case "March":
        console.log("March");
        break;

    default:
        console.log("Month Not Found");
}





// Switch - Question 4
// Problem

// Grade System

const grade = "A";

switch(grade){

    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Good");
        break;

    case "C":
        console.log("Average");
        break;

    case "D":
        console.log("Needs Improvement");
        break;

    default:
        console.log("Invalid Grade");
}





// Switch - Question 5
// Problem
// Traffic Signal

const signal = "Green";

switch(signal){

    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Wait");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


// Switch - Question 6
// Problem
// Subjects

const subject = "Math";

switch(subject){

    case "Math":
        console.log("Math Selected");
        break;

    case "Science":
        console.log("Science Selected");
        break;

    case "English":
        console.log("English Selected");
        break;

    default:
        console.log("Subject Not Available");
}




// Switch - Question 7
// Problem
// Payment Method

const payment = "UPI";

switch(payment){

    case "UPI":
        console.log("Payment via UPI");
        break;

    case "Card":
        console.log("Payment via Card");
        break;

    case "Cash":
        console.log("Payment via Cash");
        break;

    default:
        console.log("Payment Method Not Supported");
}




// Switch - Question 8
// Problem
// Season

const season = "Winter";

switch(season){

    case "Summer":
        console.log("Hot Weather");
        break;

    case "Winter":
        console.log("Cold Weather");
        break;

    case "Rainy":
        console.log("Rain Expected");
        break;

    default:
        console.log("Unknown Season");
}





// Switch - Question 9
// Problem
// Menu Options

const option = 2;

switch(option){

    case 1:
        console.log("View Profile");
        break;

    case 2:
        console.log("Edit Profile");
        break;

    case 3:
        console.log("Logout");
        break;

    default:
        console.log("Invalid Option");
}




// Switch - Question 10
// Problem
// Programming Languages

const language = "JavaScript";

switch(language){

    case "JavaScript":
        console.log("Frontend and Backend");
        break;

    case "Python":
        console.log("AI and Data Science");
        break;

    case "Java":
        console.log("Enterprise Applications");
        break;

    default:
        console.log("Language Not Supported");
}





// Bonus Question 1
// Print numbers from 1 to 100 and display:
// Even → if number is even
// Odd  → if number is odd



for(let i = 1; i <= 100; i++){

    if(i % 2 === 0){
        console.log(i,"Even");
    }else{
        console.log(i,"Odd");
    }

}


// Bonus Question 2
// Find how many numbers between 1 and 100 are divisible by 3.
// for loop + if


let count = 0;

for(let i = 1; i <= 100; i++){

    if(i % 3 === 0){
        count++;
    }

}

console.log(count,"count");




// Bonus Question 3
// Print all numbers from 1 to 50 that are divisible by both 2 and 5.


for(let i = 1; i <= 50; i++){

    if(i % 2 === 0 && i % 5 === 0){
        console.log(i);
    }

}



// Bonus Question 4
// Calculate the total sum of all even numbers between 1 and 100.


let total = 0;

for(let i = 1; i <= 100; i++){

    if(i % 2 === 0){
        total = total + i;
    }

}
console.log(total,"total");



// Bonus Question 5
// Print numbers from 1 to 30.

// If divisible by 3 → Print "Fizz"
// Otherwise → Print the number

// for loop + if-else

for(let i = 1; i <= 30; i++){

    if(i % 3 === 0){
        console.log("Fizz");
    }else{
        console.log(i);
    }

}