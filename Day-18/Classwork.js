// javaScript - JSON Javascript Object Notation 


// js

//    {name :"Awdiz",age :"12",location :"Vashi"}


// json
// {"name":"Awdiz","age":"12","location":"Vashi"}





// Conversion of JavaScript Object to 


const jsData = {name :"Awdiz",age :"12",location :"Vashi" }
console.log(jsData,"jsData");

const jsonData =JSON.stringify(jsData)
console.log(jsonData,"jsonData");

const JsonToJsConverterData = JSON.parse(jsonData)
console.log(JsonToJsConverterData,"JsonToJsConverterData ");






// constructor

function Person(name,age) {
this.name=name;
this.age=age;

}
const person = new Person("Virat",38)
console.log(person);






function Person(name,age) {
this.name=name;
this.age=age;

}

const person1 = new Person("Virat",38)
console.log(person1,"person1");


const person2= new Person("Rohit",40)
console.log(person2,"person2");







// Prototype

function Person(name,age) {
 this.name=name;
this.age=age;
}


Person.prototype.greet = function() {
    console.log("welocome");
}

const person1 = new Person("Virat",38)
console.log(person1,"person1");


const person2= new Person("Rohit",40)
console.log(person2,"person2");







function Person(name,age) {
 this.name=name;
this.age=age;
}


Person.prototype.greet = function() {
console.log("welcome");

}

const person1 = new Person("Virat",38)
console.log(person1.greet(),"person1");



const person2= new Person("Rohit",40)
console.log(person2,"person2");








function Person(name,age) {
 this.name=name;
this.age=age;
}


Person.prototype.greet = function() {

return "welcome"
}

const person1 = new Person("Virat",38)
console.log(person1.greet(),"person1");


// const person2= new Person("Rohit",40)
// console.log(person2,"person2");





// creating multiple function 

function Person(name,age) {
 this.name=name;
this.age=age;
}


Person.prototype.greet = function() {

return "welcome"
}

const person1 = new Person("Virat",38)
console.log(person1.greet(),"person1");
console.log(person1.name,"name");
console.log(person1.age,"age");


// const person2= new Person("Rohit",40)
// console.log(person2,"person2");





// class

class Counter{
    constructor(){
      this.count=0;
    }
    increment(){
     this.count++;
     console.log("Counter",this.count)
    }
decrement(){
this.count--;
console.log("Counter",this.count)
}
reset(){
this.count =0;
console.log("Counter",this.count)
}
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.reset();





class Counter{
    constructor(){
      this.count=0;
    }
    increment(){
     this.count++;
     console.log("Counter",this.count)
    }
decrement(){
this.count--;
console.log("Counter",this.count)
}
reset(){
this.count =0;
console.log("Counter",this.count)
}
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.reset();
counter.decrement();
counter.increment();






class Counter{
    constructor(){
      this.count=0;
    }
    increment(){
     this.count++;
     console.log("Counter",this.count)
    }
decrement(){
this.count--;
console.log("Counter",this.count)
}
reset(){
this.count =0;
console.log("Counter",this.count)
}
}

const counter = new Counter();
counter.increment();
counter.increment();


const c1 =new Counter();
c1.increment();








class Counter{
    constructor(){
      this.count=0;
    }
    increment(){
     this.count++;
     console.log("Counter",this.count)
    }
decrement(){
this.count--;
console.log("Counter",this.count)
}
reset(){
this.count =0;
console.log("Counter",this.count)
}
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.decrement();

const c1 =new Counter();
c1.increment();
c1.reset();








class Counter{
    constructor(){
      this.count=0;
    }
    increment(){
     this.count++;
     console.log("Counter",this.count)
    }
decrement(){
this.count--;
console.log("Counter",this.count)
}
reset(){
this.count =0;
console.log("Counter",this.count)
}
}



const c1 =new Counter();
c1.increment();
c1.reset();
c1.increment();
c1.increment();


const counter = new Counter();
counter.increment();
counter.increment();
counter.decrement();