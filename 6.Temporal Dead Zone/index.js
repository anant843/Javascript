//Global Scope
const age=25;
console.log(age);

{
    console.log(age);
}

if(true){
    console.log(age);
}

for(let i=0;i<1;i++){
    console.log(age);
}

function sayHello(){
    console.log("Hello",age);
}
sayHello();


//function scope
function sayHello(){
    var fullname="John";
    console.log("Hello",name);
}
console.log(fullname);// ReferenceError: fullname is not defined because fullname is in function scope
sayHello();


//block scope
{
    let age=30;
}
console.log(age);//ReferenceError: age is not defined because let is block scoped

{
    const age=35;
}
console.log(age);//ReferenceError: age is not defined because const is block scoped

{
    var age=40;
}
console.log(age);//40 because var is not block scoped

//Temporal Dead Zone

console.log(marks);
let marks=90;//ReferenceError: Cannot access 'marks' before initialization

console.log(score);
const score=95;//ReferenceError: Cannot access 'score' before initialization

console.log(level);
var level=5;//undefined because var is hoisted and initialized with undefined