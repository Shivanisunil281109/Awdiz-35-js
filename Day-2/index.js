

// Data types

// 1.string 
// 2.Number
// 3.boolean
// 4.null
// 5. Undefined

// String

// "" '' ``

let email= " abc@gmail.com";
let name = "abc";
let password=`pass@123`;


console.log(email,"email");
console.log(name,"name");
console.log(password,"password");


console.log(typeof (email));
console.log(typeof( name));
console.log(typeof (password));

const age =25;
console.log(age,"age");
console.log(typeof(age));

const phonenumber = "23456543";
console.log(phonenumber, "phonenumber");
console.log(typeof(phonenumber) );

const myPassword ="Pass@123";
console.log(myPassword,"myPassword");
console.log(typeof(myPassword) );




    boolean

const isloggedIn = false;
console.log(isloggedIn,"isloggedIn")
console.log(typeof(isloggedIn) );


const isloggedIn = true;
console.log(isloggedIn,"isloggedIn")
console.log(typeof(isloggedIn) );





         Undefined

 var firstName;
 console.log(firstName,"firstName");
console.log(typeof firstName);
        



       
         null

var userData =null;
console.log(userData,"userData");
console.log(typeof userData);




 Non-primitive

let a=10;
console.log(a,"a");
let b = a;
console.log(b,"b");
b=20;
console.log(a,"a");
console.log(b,"b");




     Operators
     Arithmetic Operators

console.log(10+5);        //Addition
console.log(10-5);       //Subtraction
console.log(5-10);       //Subtraction
console.log(10 * 5);     //Multiplication
console.log(10 / 5);    //Division

  console.log(30 / 2); // Division
//             6
// console.log(30 % 2); 0

//            ___  17- Quotient
//         2 /  34
//              34
//               0  - remainder - %

//               1 - odd
//               0 - even


        Modulus

console.log(10 % 2);       
console.log(11 % 2);       
console.log(12 % 2);       
console.log(13 % 2);        
console.log(14 % 2);       
console.log(15 % 2);      


    Comparison Operators

    var number1 = 10;
    var number2 = 5;
    console.log(number1==number2);

    var number1 = 10;
    var number2 = 10;
    console.log(number1==number2);



    var number1 = 10;
    var number2 = "10";
// it check only data not data type
    console.log(number1 == number2);


// it check data and data type both
     console.log(number1 === number2);






     var left = 10;
      var right = 20;
      console.log(left < right);
       console.log(left > right);


         var left = 10;
         var right = 10;

      console.log(left < right);
       console.log(left > right);
        console.log(left == right);

       console.log(left <= right);


       var left = 10;
         var right = 5;

         console.log(left <= right);


         
       var left = 10;
         var right = 10;

         console.log(left >= right);


     
       var left = 10;
         var right = 10;
         console.log(left != right);

             
       var left = 10;
         var right = 20;
         console.log(left != right);