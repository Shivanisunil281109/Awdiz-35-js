 var age=25;
console.log (age,age,age);


var number=1;
console.log(number)

 number=2;   //reassign
 console.log(number) 

var number=3; //redeclared and reassign
console.log(number);



let age=25;
console.log (age);

age=26;    //reassign
console.log (age);


let age=27;   //redeclare
console.log(age);



           var        Let      Const
reassian     yes        yes
redeclare    yes        No





const number=20;
console.log(number);

number=21;  //reassign
console.log(number);

const number=22;
console.log(number);


               var         Let      Const
 reassian       yes         yes        No

 redeclare       yes         No        No

 hosting         yes         No        No
 
 scope           Function    block      block




age=25;
console.log(age);

var age;



age=25;
console.log(age);

let age;


const age=25;
{
    console.log(age);
    
}


var age=25;
{
    console.log(age);
    
}




let age=25;
{
    console.log(age);
    
}





var age=25;                                       
{
   console.log(age);
   {
     console.log(age);

      {
       console.log(age);

      }
      console.log(age);
   }
    
console.log(age);
}



{

   let age =35;
}
console.log(age);


{

   var age =35;
}
console.log(age);



{

   const age =35;
}
console.log(age);






var number1 =1;
{
   number2=2;
   let number3=3;
   const number4=4;
   {
   const number4 =4;
   console.log(number3);
   console.log(number2);
   }
   console.log(number4)
}

var number2;
console.log(number1);



 console.log(number);
number=10;
var number;


number=10;
console.log(number);
 number=10;
console.log(number);

var number;