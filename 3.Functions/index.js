//function defintion...
function sayName(){
    console.log("Anant");
}

sayName()


function printCount(){
    for(let i=0;i<=10;i++){
        console.log(i);
    }
}
printCount();


//num is a parameter
function printNum(num){ 
    console.log("Printing Number: ",num);
}
// 10 is an argument
printNum(10);


//return function......
function addnum(a,b,c){
    return a+b+c;
}
let result=addnum(10,20,30);
console.log(result);

function getMyName(fname,lname){
    return fname+" "+lname;
    //unreachable code
    let a=5
    console.log(a);
}
let myName=getMyName("Anant","Thakur");
console.log(myName);


function getMulti(a,b){
    return a*b;
}
console.log(getMulti(10,29));


//Function Expression....
let avg=function(a,b){
    return (a+b)/2;
}
let ans=avg(2,4);
console.log(ans);


//Arrow Function....
const getExp=(x,y)=>{
let ans=x**y;
return ans;
}
console.log(getExp(2,10));