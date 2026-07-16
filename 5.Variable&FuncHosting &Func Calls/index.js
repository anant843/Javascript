sayMyName("Anant");//function hoisting
function sayMyName(name){
    console.log("My name is " + name);
}


console.log(age);//undefined due to hoisting
var age = 22;//variable hoisting

console.log(age);
let age=25;//temporal dead zone error

console.log(age);
const age=30;//temporal dead zone error

sayHello();//But in this case function is not hoisted expression because it is stored in a variable
let sayHello=function(){
    console.log("Hello World");
}

// In class also hoisting doesn't work

// --------First Class Citizens of functions--------
// -- In JavaScript, functions are first-class citizens. This means that functions can be treated like any other variable. They can be passed as arguments to other functions, returned from functions, and assigned to variables or object properties.

function greetme(greet,fullname){
  console.log( "Hello " + fullname);
  greet();
}

function greet(){
   console.log("Greetings!");
}
greetme(greet,"Anant");


function solve(number){
    return function(number){
        return number*number;
    }
}
let ans=solve(8);//returns inner function
let finalAns=ans(10);
console.log(finalAns);


const arr=[
    function(a,b){
        return a+b;
    },
     function(a,b){
        return a-b;
    },
     function(a,b){
        return a*b;
    }, function(a,b){
        return a/b;
    }
]
let first=arr[0];//accessing first function from array
let ans=first(10,5);
console.log(ans);

let obj={
    age:24,
    wt:30,
    greet:()=>{
        console.log("Hello there!");
    }
}
console.log(obj.age);
obj.greet();

