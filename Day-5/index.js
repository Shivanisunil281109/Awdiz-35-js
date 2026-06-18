
// push method

var students =[];
console.log(students);
students.push("virat");
students.push("Rohit");
students.push("Rahul");
console.log(students);
console.log(students [0]);





//  pop method
var numbers =[1,2,3,4];

const lastElement = numbers.pop();
 const secondlastElement = numbers.pop();
console.log(numbers,lastElement,secondlastElement);




// shift method

const numbers =[1,2,3,4];
const firstElement = numbers.shift();
numbers.shift;
console.log(numbers,firstElement);




// unshift method

const numbers =[1,2,3,4];
numbers.unshift(0);
console.log(numbers);


const numbers =[1,2,3,4];
numbers.unshift(0);          
numbers.unshift(5);
console.log(numbers);





// map method

const numbers =[1,2,3,4]; 
const updatNumbers = numbers.map((number)=> number+number);

console.log(  updatNumbers ," updatNumbers");
console.log(numbers,"numbers");
   



//  map method

const products =[100,500,1000];
const gstIncludeprice = products.map((price) => {return price*1.18});
console.log(gstIncludeprice," gstIncludeprice");



 
// filter

// Filter Odd Numbers
const numbers = [1,2,3,4,5,6,7,8,9];
const oddNumber= numbers.filter((num) => num % 2 === 1);
console.log(oddNumber,"oddNumber");


// Filter Active Players

const studentsData = [
  { name: "Virat", active: false },
  { name: "Kane", active: false },
  { name: "Rahul", active: true },
];

const activePlayers = studentsData.filter((player) => player.active);

console.log(activePlayers, "activePlayers");






//  Reduce
// Reduce - return a single value 

var numbers=[1,2,3,4,5,];
const addition=numbers.reduce((acc,number)=>  acc+number,0);
console.log (addition,"addition");


const cart=[100,300,34567];
    const totalprice = cart.reduce((acc,price)=> acc+price,);
    console.log(totalprice,"totalprice");





// count Total Elements (total length)


const numbers = [2345,6,4,5,6,7,8,3,2,4];
const totalElemetsCounts = numbers.reduce((acc)=>acc+1,0);
console.log(totalElemetsCounts);



const numbers = [1,6,4,5,6,7,8,3,2,4];
const totalElemetsCounts = numbers.reduce((acc)=>acc+1,0);
console.log(totalElemetsCounts);






// condition ? true:false;
console.log(2>3 ? "true": "false kdfjjddkj" );





// Find Minimum Value using reduce()

const numbers=[3,6,10,2,64];
const max = numbers.reduce((acc,num)=> acc > num ? acc:num);



// Find Minimum Value using reduce()

const numbers = [3,6,10,2,64];

const max = numbers.reduce((acc,num)=> (acc < num ? acc: num));
console.log (max,"max");





// forEach() method

const numbers =[1,2,3,4];

numbers.forEach((num)=>console.log (num*2));



// at() method 

const numbers=["Awdiz",2,3,4,5];
console.log(numbers.at(0));



// concat() method 

const array1 = [1,2,3,];
const array2 = [4,5,6];
const array3 = array1.concat(array2);
console.log(array3,"array");



// find() method

const numbers = [1,2,32,4,5,56,6,6];
const biggerThan =numbers.find((num)=>num>5); 
console.log ( biggerThan,"biggerThan");



// findIndex() method

const number = [3,4,6,7,8,3,2,5,7,434];

const output = number.findIndex((num)=> num >10);
console.log(output);