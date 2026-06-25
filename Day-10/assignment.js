// Question 1
// Print Pattern
11
12
21
22

for(let i = 1; i <= 2; i++)
{
    for(let j = 1; j <= 2; j++)
    {
        console.log(i + "" + j);
    }
}









// Question 2
// Print Pattern
111
222
333

for(let i = 1; i <= 3; i++)
{
    let result = "";

    for(let j = 1; j <= 3; j++)
    {
        result = result + i;
    }

    console.log(result);
}






// Question 3
// // Find Smallest Number Using Nested Loops
// let numbers = [45, 12, 78, 23, 9, 56];


let numbers = [45, 12, 78, 23, 9, 56];

let smallest = numbers[0];

for(let i = 0; i < numbers.length; i++)
{
    for(let j = 0; j < numbers.length; j++)
    {
        if(numbers[j] < smallest)
        {
            smallest = numbers[j];
        }
    }
}

console.log(smallest);






// Question 4
// Print All Pairs


for(let i = 1; i <= 3; i++)
{
    for(let j = 1; j <= 3; j++)
    {
        console.log(i, j);
    }
}





// Question 5
// Print 1 to 20 Using While Loop

let i = 1;

while(i <= 20)
{
    console.log(i);
    i++;
}





// Question 6
// Print 20 to 1 Using While Loop

let i = 20;

while(i >= 1)
{
    console.log(i);
    i--;
}









// Question 7
// Sum of Numbers 1 to 10



let i = 1;
let sum = 0;

while(i <= 10)
{
    sum = sum + i;
    i++;
}

console.log(sum);







// Question 8
// Count Even Numbers Between 1 and 50

let i = 1;
let count = 0;

while(i <= 50)
{
    if(i % 2 === 0)
    {
        count++;
    }

    i++;
}

console.log(count);





// Question 9
// Student Object

const student = {
    name: "Rahul",
    age: 20,
    course: "BCA",
    city: "Mumbai"
};

console.log(student);
console.log(student.name);
console.log(student.course);




// Question 10
// Company Object

const company = {
  name: "Tech Solutions",
  employees: 100,
  location: "Mumbai",
  departments: ["HR", "Development", "Sales"]
};

console.log(company.name);
console.log(company.location);
console.log(company.departments[2]);




// Bonus 1
// Mobile Object

const mobile = {
    brand: "Samsung",
    model: "S25",
    price: 85000
};

console.log(mobile.brand);

console.log(mobile["brand"]);



// Bonus 2
// Object Function


const person = {
  name: "Rahul",
  age: 25,

  greet: function ()
  {
      return this.name;
  }
};

console.log(person.greet());




// Bonus 3
// Biggest Number Using Nested Loops
// let numbers = [12, 34, 56, 78, 90, 23, 45]

let biggest = numbers[0];

for(let i = 0; i < numbers.length; i++)
{
    for(let j = 0; j < numbers.length; j++)
    {
        if(numbers[j] > biggest)
        {
            biggest = numbers[j];
        }
    }
}

console.log(biggest);



// Bonus 4
// Print Star Pattern

for(let i = 1; i <= 5; i++)
{
    let star = "";

    for(let j = 1; j <= i; j++)
    {
        star = star + "*";
    }

    console.log(star);
}



