
Logical OPerators

var num1 = 10;
var num2 = 20;
var num3 = 30;

console.log(num1 > num2);
console.log(num1 > num3);

console.log(num1 < num2 && num1 < num3 && num2 < num3);

console.log(num1 > num2   || num1 > num3    || num2 > num3);

console.log(10 > 20   || 10 > 30   || 20 > 30);






   Functions 

   Types of Functions

  1. Function declaration

 //   Syntax of  Function declaration
        function functionName(){
            multiplelines code
        }
        


 filter();
console.log("Hello");

function filter(){
console.log(" Hi From Function filter");

        }

                filter();
                filter();
                filter();
                filter();





           
 2. function Expression

const filter = function () {
console.log("function Expression");
     };
filter();




3. Arrow Function

const filter = () => {
console.log("Arrow function")
    };
    filter();
    filter();
    filter();





   Function Declaration with Parameters
    
    var number1 = 10;
    var number2 = 20;

    function addition(){
        console.log( number1 +  number2);
    }
    addition(number1 , number2 );



     function addition(num1,num2){
        console.log( num1 , num2);
    }
    addition(10, 20);


     function addition(num1,num2){
        console.log( num1 + num2);
    }
    addition(10, 20);


      
     function addition(num1,num2,num3){
        console.log( num1 + num2 + num3);
    }
    addition(10, 20, 30);


    function addition(num1,num2,num3,num4){
        console.log( num1 + num2 + num3 + num4);
    }
    addition(10, 20, 30);

    
    function addition(num1,num2,num3,num4){
        console.log( num1 + num2 + num3 + num4);
    }
    addition(10, 20, 30, 40);


    const subtraction = function (value1,value2){
        console.log (value1 - value2);
    };

    subtraction(10 , 20);




          Arrow Function with Parameters

    const multiplication = (v1,v2,v3)=>{
console.log(v1 *v2 *v3)
    };
     multiplication(1 , 2 ,3);





// return



function greeting(message){
    // console.log(message);
    return message;
};
const message = greeting("Hello Everyone!");

console.log(message ,"message");




function greeting(message){
    // console.log(message);
    return message;
}; 
console.log (greeting ("Hii"));
const message = greeting("Hello Everyone!");

console.log(message ,"message");



function greeting(message){
    return message;
    // console.log(message);
  
}; 
// greeting ("Hii");
// console.log (greeting ("Hii"));
const message = greeting("Hello Everyone!");
console.log(message ,"message");



function greeting(message){
    return message;
    console.log(message,"From inner function");
  
}; 
// greeting ("Hii");
// console.log (greeting ("Hii"));
const message = greeting("Hello Everyone!");
console.log(message ,"message");


const greeting = () => {
    return "Hello";
};
const message = greeting();
console.log(message ,"message")