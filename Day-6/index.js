//  1.push
// Question 1

// Add Elements to Array using push()

const fruits =[];
fruits.push("apple");
fruits.push("Mango");
fruits.push("Banana");
console.log(fruits);



// Question 2
//  Add Elements and Access Array Element

const cities = ["mumbai"]
cities.push("Pune");
cities.push("Delhi");
console.log(cities[1]);




// 2.pop()

// // Question 1

// Remove Last Element using pop()

const numbers =[10,20,30,40,50];
const lastElement = numbers.pop();
console.log( lastElement );
console.log(numbers);


// Question 2

// Remove Multiple Elements from End of Array

const colors = ["Red", "Blue", "Green"];

const lastElement = colors.pop();
const secondLastElement = colors.pop();

console.log(lastElement);
console.log(secondLastElement);
console.log(colors);




// // 3. shift()

// // Question 1

// shift method

const players = ["Virat", "Rohit", "Rahul"];
const firstPlayer = players.shift();
console.log(players, firstPlayer);

const numbers = [100, 200, 300, 400];

const firstElement = numbers.shift();
console.log(numbers, firstElement);




// 4. unshift()

// Question 1: Add 1 at the Beginning

 const numbers =[2,3,4]
 numbers.unshift(1);
 console.log(numbers);

Question 2: Add "A" at the Start

const alphabets =["B","C","D"];
alphabets.unshift("a");
console.log(alphabets);




// 5. map()

// Question 1: Create Squares of Numbers

const numbers = [1,2,3,4,5,];
const squarenumbers = numbers.map((numbers)=>numbers*numbers);
console.log( squarenumbers,"squarenumbers" );
console.log( numbers,"numbers" );



// Question 2: Add 10% Tax to Pricesconst prices = [100,200,300];


const prices = [100,200,300];

const taxIncludedPrices = prices.map((price) => price * 1.10);

console.log(taxIncludedPrices, "taxIncludedPrices");
console.log(prices, "prices");




// 6. filter()

// Question 1: Get All Even Numbers

// Filter Even Numbers

const numbers = [1,2,3,4,5,6,7,8];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers, "evenNumbers");

// Question 2: Get Numbers Greater Than 20

const numbers = [12,45,7,89,23];
const greaterThanTwenty = numbers.filter((num)=> num>20);
console.log (greaterThanTwenty,"greaterThanTwenty");




// 7. filter() with Objects

// Question 1: Find All Active Employees

const employees = [
  { name: "Amit", active: true },
  { name: "Riya", active: false },
  { name: "John", active: true },
];

const activeEmployees = employees.filter((employee) => employee.active);

console.log(activeEmployees, "activeEmployees");


// Question 2: Find All Available Products

const products = [
  { name: "Laptop", available: true },
  { name: "Mobile", available: false },
  { name: "TV", available: true },
];
const availableProducts = products.filter((product)=>product.available);
console.log( availableProducts ,"availableProducts ");




// 8. reduce() - 
// Question 1:   Sum of Numbers

const numbers = [5,10,15,20];
const addition = numbers.reduce((acc,number)=>acc+number,0);
console.log(addition,"addition");

// Question 2: Find the Total of [100, 200, 300, 400]

const amounts = [100,200,300,400];
const totalAmount = amounts.reduce((acc,amount)=>acc+amount,0);
console.log(totalAmount,"totalAmount");




// 9. reduce() - Cart Total 

Question 1: Calculate the Total Bill of Cart Items

const cart = [500,1200,800];

const totalprice = cart.reduce((acc,price) => acc + price, 0);

console.log(totalprice, "totalprice");


// Question 2 :  Calculate Total Salary

const salaries = [25000,30000,40000];
const totalsalary = salaries.reduce((acc,salary)=>acc+salary,0);
console.log( totalsalary);





// 10. reduce() - Count Elements

// Question 1: Count the Number of Elements in [1,2,3,4,5,6] 



const numbers = [1,2,3,4,5,6];
const totalElemetsCounts  = numbers.reduce((acc)=>acc+1,0);
console.log(totalElemetsCounts, "totalElemetsCounts");


// Question 2: Count the Number of Students

const students = ["A","B","C","D"];

const totalStudentsCount = students.reduce((acc) => acc + 1, 0);

console.log(totalStudentsCount, "totalStudentsCount");




// 11. Ternary Operator (? :)
// Question 1: Check Whether 10 is Greater Than 5

// condition ? true : false;

console.log(10 > 5 ?  "yes": "No")


// Question 2: Check Whether num = 15 is Even or Odd


const num =15;
console.log(num % 2 === 0 ? "even": "odd")





// 12. reduce() - Find Maximum Value

// Question 1: Find the Largest Number in [5, 12, 8, 20, 3]

const numbers = [5,12,8,20,3];
const max = numbers.reduce((acc,num)=> acc>num ? acc:num);
console.log(max, "max");


// Question 2: Find the Maximum Marks from [67, 89, 45, 98, 76]


const marks = [67,89,45,98,76];
const maxMarks = marks.reduce((acc,mark) => acc > mark ? acc : mark);
console.log(maxMarks, "maxMarks");




// 13. forEach()

// Question 1: Print Double of Every Number

const numbers = [2,4,6,8];
numbers.forEach((num) => console.log(num * 2));


// Question 2: Print Square of Each Number

const numbers = [1,2,3,4];
numbers.forEach((num)=> console.log(num*num));




// 14. at()
// Question 1: Print First Element

const technologies = ["HTML","CSS","JavaScript"];
console.log(technologies.at(0));


// Question 2: Print Last Element

const numbers = [10,20,30,40];
console.log(numbers.at(-1));





// 15. concat()
// Question 1: Combine [1,2,3] and [4,5,6]
const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = array1.concat(array2);

console.log(array3, "array3");


// Question 2: Combine ["HTML","CSS"] and ["JS","React"]
const frontend = ["HTML","CSS"];
const framework = ["JS","React"];
const technologies = frontend.concat(framework);

console.log(technologies, "technologies");




// 16. find()
// Question 1: Find the First Number Greater Than 50

const numbers = [10,25,60,80,40];
const biggerThan = numbers.find((num) => num > 50);

console.log(biggerThan, "biggerThan");


// Question 2: Find the First Even Number

const numbers = [1,3,5,8,10];

const evenNumber = numbers.find((num) => num % 2 === 0);

console.log(evenNumber, "evenNumber");




// 17. findIndex()
// Question 1: Find the Index of the First Number Greater Than 20

const numbers = [5,10,25,30,15];

const output = numbers.findIndex((num) => num > 20);

console.log(output);


// Question 2: Find the Index of the First Odd Number


const numbers = [2,4,6,7,8];
const output = numbers.findIndex((num) => num % 2 === 1);
console.log(output);




// 18. Array Index Access []
// Question 1: Print the First Country

const countries = ["India","USA","Japan"];
console.log(countries[0]);

// Question 2: Print the Third Element

const numbers = [100,200,300,400];
console.log(numbers[2]);