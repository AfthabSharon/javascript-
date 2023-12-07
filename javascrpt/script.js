// alert("Alert from external javascript");
console.log("Welcome to javascript");

// This is a single line Comment

//  This is a multi line Comment
//  Line 1
//  Line 2
//  Line 2

// variables
var a; //variable Declaration
a=10; //variable initialization
var b ="Hello" //Declaration + Initialization

// Datatypes
/*
String
Number
Boolean
Undefined
Null
*/

var str = "Hello world"
console.log("str : ", str);
console.log("Type of str : ", typeof str);

var num = 100;
console.log("num : ",num);
console.log("Type of num : ", typeof num);

var bool = true;
console.log("bool : ", bool);
console.log("Type of bool : ", typeof bool);

var bool1 = false;
console.log("bool1 : ", bool1);
console.log("Type of bool1 : ", typeof bool1);

var n = null;
console.log("n : ", n);
console.log("Type of n : " , typeof n);

var u = undefined;
console.log("u : " , typeof u);
console.log("Type of u : ", typeof u);

//String methods
console.log("Length : " , str.length);
console.log("upperCase : " , str.toUpperCase());
console.log("lowerCase : " , str.toLowerCase());
console.log(str.toUpperCase().length);
console.log(str.toUpperCase().toUpperCase().toLowerCase().toLowerCase().toUpperCase().toLowerCase().length);
console.log("trim : " , str.trim().length);
console.log("trimRight : " , str.trimEnd().length);
console.log("trimLeft : " , str.toStart().length);
console.log("Substring : ", str.substring(0,3));

console.log("Replace : " , str.replace("Hello","Hai"));
console.log("startWith : " , str.startsWith("Hello"));
console.log("endsWith : " , str.endsWith("world"));

console.log("split : " , str.split(',')); //Converts string to an array
console.log("Join : ", str.split(',').join(',')); //Converst array to a string 

//Arrays
var arr = [10,15,20, "Hello",true,false,undefined,null]
console.log("Arr : ", arr);

var length = arr.length;
console.log("Array length: ", length);

let str1 = arr.join('');
console.log("str1 : ", str1);

console.log("Index : ", arr.indexOf(20));

arr.push("End");
console.log("Array : ", arr);

arr.unshift();
console.log("Array : ", arr);

arr.pop();
console.log("Array : ", arr);

arr.shift();
console.log("Array : " , arr);

arr.splice(6,2);
console.log("Array : ", arr);

console.log("obj : " , obj);

obj.mark1 = 50;
obj.mark2 = 100;
console.log("obj ; " , obj);

// json string
var json_str = JSON.stringify(obj);
console.log("json_str: ", json_str);
console.log("json_str datatype :",typeof json_str);
console.log("first name from json_str: ${json_str.firstname}")
console.log("age from json_str: ${json_str.age}");

var json_str1 = {
json_str: { "firstname": "salih", "lastname": "cr7", "age": 63, "indian": false, "mark1": 50, "mark2": 150 }
};



var num = 200;
console.log("num : ${num}");


// parsing json
var obj1 = JSON.parse(json_str);
console.log("obj1 : ", obj1);
console.log("obj1 datatype  : ", typeof obj1);

console.log("first name :${obj1.firstname}")
console.log("Age : ${obj1.age}");



 
//var

var a =10;       //function scoped adds in global object
console.log("a;",a);
console.log("from widow object: ", window.a);



var a =50;         //redeclaration possible
console.log("a;",a);
console.log("from widow object: ", window.a);


 console.log("a1 : " , a1); //Hoisted
 var a1 = 100;

 //Let
 let b1 =20; //Block scoped
 console.log("b1 : ", b1);
 console.log("From window object",window.b1);

 // let b1 = 30; //Cannot redeclare

 // console.log("b2 : ", b2); //Not hoisted
 // let b2 = 200;

 //Const
 const c = 30; //Block scoped
 console.log("c :", c);
 console.log("From window object",window.c);

 // const c = 40; //Cannot redeclare
 // console.log("c1 : ", c1); //Not hoisted
 // const c1 = 300;

 //Block
 {
    var a3 = 500; //Can be accessed outside of this block

    //Cannot be accessed outside of this block
    let b2 = 1000;
    const c2 = 1500;

    let b3; //Can be declared and initialized in multiple steps
 }

 //Switch statement
 let day = 7;

 switch (day) {
   case 1:
      console.log("Monday");
      break;

   case 2:
      console.log("Tuesday");
      break;

      case 3:
         console.log("wednesday")
         break;

      case 4:
         console.log("Thursday");
         break;

      case 5:
         console.log("Friday");
         break;

      case 6:
         console.log("Saturday");
         break;

      case 7:
         console.log("Sunday");
         break;

      default :
      console.log("Invalid number");
      break;
   }   


 {
   //Loops

   //For loop
   for(let i=1; i<=10; i++) {
      console.log(i);
   }

   //while loop
   let i = 1;
   while(i<=10) {
      console.log(i);
      i++;
   }

   let j = 1;
   //dowhile
   do{
      console.log("From do while loop : " , j);
      j++;
   }while(j<=10)


   //Break and Continue
   for(let i=0; i<=10; i++) {

      if(i==3) {
         continue;
      }
       if(i == 6) {
         break;
       }

       console.log(i);
   }

   let flag1 = true;
   let flag2 = false;

   if(!flag2) {
      console.log("Success");
   }else {
      console.log("failed");
   }
 }

 //while loop
 let i = 1;
 while(i<=10) {
   console.log(i);
   i++;
 }

 let j = 1;
 //dowhile
 do{
   console.log("From do while loop: " , j);
   j++;
 }while(j<=10);


 //Nested loop
 let abc = '';
 for(let i=0; i<10; i++) {

   for(j-0; j<i; j++) {

      for(j=0; j<i; j++) {
         abc = abc + '*';

      }

      abc = abc + '\n';

   }

   //abc = \n*\n**\n***\n****\n

   console.log(abc);

   let str1 = "Hello";
   let str2 = "World";

   let result = str1 + str2;
   console.log("Result : ", result);


   //Break and Continue
   for (let i = 0; i <= 10; i++){
      if (i == 3) {
         continue;
      }

   }
 }










 {
   //Sum
   let sum = 0;

   for(let i=0; i<10; i++) {
      sum = sum + i;
   }

   console.log("sum : " , sum);


   let odd = [];
   let even = [];

   let j = 0;

   while(j<=20) {

      if (j%2 == 0) {
         even.push(j);
      }else {
         odd.push(j);
      }
      j++
   }

   console.log("Odd : ", odd);
   console.log("Even : ", even);

 }

//+,-,/,*,%
//<, <=,>,>=,=, ==,===
//&&, || , !



{
   //Function

   //Function definition
   function printHello() {
      console.log("Hello");
   }

   printHello(); //Function call

//Function with parameters
function sum(a, b) {
   let sum = a + b;
   console.log("Sum : ", sum);

}

sum(10,20);//argument



//Call by value
let a = 10;

function update(a) {
   a = "New value";
   console.log("a [inside function]", a);
}

update(a);
console.log("a [outside functiob]",a);

//Call by reference

let arr = [10,20,30];

function update1(arr) {
   arr[0] = 100;
   console.log("arr [inside function]: ", arr);
}

update1(arr);
console.log("arr [outside function]: ", arr);

//Closure
function outerFunction() {
   const outerVariable = "Hello world";

   function innerFunction() {
      // Some logic for innerFunction
   }

   console.log("outerVariable : ", outerVariable);

   return innerFunction;
}

let result = outerFunction();
console.log("result : ", result);
let result1 = result();
console.log("result1 : ", result1);
result1();


   // A function along with its environment
   }



{
   //DOM Methods
   let content = document.getElementById('content');
   console.log("content : ", content);

   content.textContent = "Some content";

   let text = document.getElementsByClassName('text');
   console.log('text : ' , text);

   text[0].textContent = "Sample text 1";
   text[1].innerHTML = "Sample text 2";

   let para = document.getElementsByTagName('p');
   console.log("para : ", para);

   para[0].textContent = "This is a paragraph";
   para[1].textContent = "This is a paragraph1";
   para[2].textContent = "This is a paragraph2";

   let element = document.querySelector('.container ul li');
   console.log("element : ", element);

   element.textContent = "List item";

}

{
      //Dom method

      let content = document.getElementById('content');
      console.log("content:",content);
      
      content.textContent = "new content";

      let text = document.getElementsByClassName('text')
      console.log("text:",text);

      text[0].textContent = "New text ";
      text[1].textContent = "New text 1";
}

{
   function factorial (a) {
      let fact = 1
      for(let i=a; i>0; i--){

      }
   }
}
{
//Factorial
function Factorial(num) {
   let fact = 1;

   for(let i=num;i>0;i--) {
      fact = fact * 1;
   }

   return fact;
}

let result = Factorial(4);
console.log("factorial : ", result);

//Fibonacci(0,1,1,2,3,5,.....)

function Fibonacci(limit) {
   let a = 0;
   console.log(a);
   let b = 1;
   console.log(b);

   let sum = 0;

   while(sum < limit) {
      sum = a+ b;
      console.log(sum);
      //Swapping
      a=b;
      b=sum;
   }

}

//sum=1
//a=1
//b=1

//sum=2
//a=1
//b=2

//sum=3
//a=2
//n=3

//sum=5
//a=3
//b=5

Fibonacci(4);

}

// function checkOddOrEven(number) { 

     return (number | 1) === number ? 'Odd' : 'Even'; 
// } 

  
 console.log(checkOddOrEven(14)); 
 console.log(checkOddOrEven(17));


 //reverse a string

/*let str1 = "hello";
let reversedstring = '';
for(let i = str.length-i; i>=0; i--){
    reversedstring = reversedstring + str[i];
}
console.log("reversed string : ",reversedstring);
if(str ===   reversedstring){
    console.log("string is palindrome");

}else{
    console.log("not palindrome");
}

//multiplication table upto 10

for(let i = 1; i<=10; i++){
    for(let j = 1; j<=10;j++){
        console.log('${i} * ${j} = ${i*j} \n');
    }
}

let sum1 =0;
for(let i=1; i<=10;i++);*/








{
   let oddsum =0;
   let evensum =0;

   for(let i=1; i<=50; i++){
       if(i%2 == 0){
           evensum = evensum + i;
       }else{
           oddsum = oddsum + i;
       }
   }

   console.log("oddsum : " , oddsum);
   console.log("evensum : " , evensum);

}

{
   let arr = [10,30,70,20,45];

   let sum =0;
   for(let i=0; i<arr.length; i++){
       //i=0 -> sum = sum + arr[i] -> sum = 0+ arr[0] -> sum 0 + 10=10
       //..
       //..
       //..
       //i=4 -> sum = sum + arr[i] -> sum = 130 + arr[4] -> sum = 130 + 45 =175
       sum = sum + arr[i];
   }
   console.log("sum : " , sum);

   //Average of element of an arry
   let avg = sum/arr.length;
   console.log("Average : " , avg);




   let max = arr[0];
    
   for(let i=0; i<arr.length; i++) {
       if(arr[i] > max) {
       max = arr [i];
       }
   }
   console.log("max : " , max);





   let min = arr[0];
   
   for(let i=0; i>arr.length; i++) {
       if(arr[i] < min){
           min = arr [i];
       }
   }
   console.log("min : " , min)
}
{

   let arr = [1 -2,2,-2];
   console.log("Arr befor : " , arr);

   for(let i=0; i< arr.length; i++) {
       if(arr [i] < 0) arr[i] =arr [i] * -1;
   }





   console.log("Arr after : ", arr);




}

{
   function a(arr){
       for(let i = 0; i<=arr.length; i++){
       if(arr[i]< 0) arr[i] * -1;  
   }
   console.log
}
}




   //let i = 0;
   //Recursive function ( function that call itself)
   function count() {
       console.log(j);
       j++;

       while(j<=10) {
           count(); //Recursive function call
       }
   }
{
   count(); //Normal function call

   //i=0 -> log , i=1 -> i<=10 -> tctorial usinrue -> recursive call -> log(1), i=2 -> i<=10 -> 2 <= 10 -> true -> recursive call -> log (2) , i=3 ...., i=10 -> 10<=10 -> true -> recursive call -> log(2) , i-3 ........, i-10 -> i<-10 -> 10<=10 -> true -> log (10), i =11 -> 11<=10 -> false -> loop 
   



   //factorial using recursion

   function factorial (n) {
       if(n==0 || n==1) {
           return 1;;
       }
       return n * factorial(n-1)
   }
   let fact = factorial (2);
   console.log("factorial :",fact);

   }

{
   let btn = document.getElementById ('btn');
   console.log ("btn:",btn);
  
   btn.addEventListener('click', function () {
      alert("Button clicked");

   });

   
   btn.addEventListener('mouseover', function () {
       alert("mouseover event");

   });
   
   btn.addEventListener('mouseout', function () {
       alert("mouseout event");

   });

   
   btn.addEventListener('mousedown', function () {
       alert("mousedown event");

   });
   
   btn.addEventListener('mouseup', function () {
       alert("mouseup event");

   });
   
   btn.addEventListener('mousemove', function () {
       alert("mousemove event");

   });

   
   btn.addEventListener('keydown', function () {
       alert("keydown event");

   });
   
   btn.addEventListener('keyup', function () {
       alert("keyup event");

   });
   
   
   

}