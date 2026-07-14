
// Inheritance using Classes (extends & super())

class Person{
constructor(name,age){
 this.name=name;
 this.age =age;
}

}
class student extends Person{
    constructor(name,age,grade){
super(name,age);
this.grade = grade;
    }
    data() {
        console.log(`Name:${this.name},Age:${this.age},Grade:${this.grade}`);
    }
}

const student1 = new student("Virat",20,"A");
student1.data();










// Encapsulation using Private Fields (#)
class Bank{
    #balance = 0;
    deposite (amount){
        this.#balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    }
}

const bank1 =new Bank();
bank1.deposite(1000);
bank1.deposite(1000);
// console.log(bank1.#balance);










// find maximum and minimum  count of number in Array

const numbers = [1,2,2,3,3,3,4,,4,4,4,5,5,7,7,7,7,7,7,7];

// let obj = {name :"Awdiz", age:20, 1:1, 2:2, 3:3, 4:4, 5:2, 7:7};

function findMaxMinCount(array){ 
// let countMap = {1:1, 2:2, 3:3, 4:4, 5:2 , 7:7};

let countMap={};
let maxCount=-Infinity;
let minCount=Infinity;
let maxElement=null;
let minElement=null;



for(let i =0 ; i<array.length; i++){
if(countMap[array[i]]== undefined){
    countMap[array[i]] =1;
}else {
    countMap[array[i]]+= 1;
}
   
}

// const countMap = {'1':1, '2':2,  '3':3, '4':1};

for(let key in countMap){
    // console.log(key,"key",countMap[key])
   if(countMap[key] > maxCount){
        maxCount = countMap[key];
        maxElement = key;
    }

    if(countMap[key] < minCount){
        minCount = countMap[key];
        minElement = key;
    }
}

 return {countMap,maxCount,minCount,maxElement,minElement};

 }



const output = findMaxMinCount(numbers);
console.log(output,"output");









// DSA Question

// find maximum and minimum  count of number in Array

const numbers = [1,2,2,3,3,3,4,5,5,5,6,6,6,6,7,8,8,8,8,8,9,9,9,9,9];

// let obj = {name :"Awdiz", age:20, 1:1, 2:2, 3:3, 4:4, 5:2, 7:7};

function findMaxMinCount(array){ 
// let countMap = {1:1, 2:2, 3:3, 4:4, 5:2 , 7:7};

let countMap={};
let maxCount=-Infinity;
let minCount=Infinity;
let maxElement=null;
let minElement=null;


for(let i =0 ; i<array.length; i++){
if(countMap[array[i]]== undefined){
    countMap[array[i]] =1;
}else {
    countMap[array[i]]+= 1;
}
   
}

// const countMap = {'1':1, '2':2,  '3':3, '4':1};

for(let key in countMap){
    // console.log(key,"key",countMap[key])
   if(countMap[key] > maxCount){
        maxCount = countMap[key];
        maxElement = key;
    }

    if(countMap[key] < minCount){
        minCount = countMap[key];
        minElement = key;
    }
}

//  return {maxElement,minElement};
//  return [maxElement,minElement];
return [Number(maxElement), Number(minElement)];
 }



const output = findMaxMinCount(numbers);
console.log(output,"output");









// let obj = {name:"awdiz"}

// if(obj["age"]== undefined){
//     obj["age"] =20

// }

// console.log(obj,"obj")