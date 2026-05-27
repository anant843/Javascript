
// // Array Methods in JavaScript

// let brr=new Array("John", "Doe", 30, 70, 180);// Creating an array using the Array constructor

// brr.push("Anant"); // Adding an element to the end of the array

// brr.pop(); // Removing the last element of the array

// brr.shift(); // Removing the first element of the array

// brr.unshift("Mr."); // Adding an element to the beginning of the array

// console.log(brr.slice(1,3)); // Extracting a section of the array from index 1 to 3 (not included 3)

// brr.splice(1,2,"Vansh"); // Removing 2 elements from index 1 and adding "Vansh" at that position

// brr.splice(2,0,"Smith"); // Adding "Smith" at index 2 without removing any elements

// console.log(brr);
// // console.log(brr[0]); // Accessing the first element of the array

// let arr=[10,20,30];
// let ansArray=arr.map((number)=>{
//     return number*number;
// })
// console.log(ansArray) // [100, 400, 900]
// // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// let arr=[1,2,3,4,5];
// arr.map((number,index)=>{
//     console.log(number+1);
//     console.log(index);
// })


// let arr=[10,20,30,40,50,21,11,31];
// let evenArray=arr.filter((number)=>{//filter method creates a new array with all elements that pass the test implemented by the provided function.
// if(number%2===0){
//     return true;
// }
// else{
//     return false;
// }
// })
// console.log(evenArray); // [10, 20, 30, 40, 50]


// let arr=[10,20,30,40,50];
// let ans=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0);// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// console.log(ans); // 150


// let arr=[9,5,1,3,7];
// arr.sort();// By default, the sort() method sorts the elements as strings in alphabetical and ascending order.
// console.log(arr); // [1, 3, 5, 7, 9]


// arr.sort((a,b)=>b - a);// To sort numbers in descending order, we provide a compare function that subtracts b from a.
// console.log(arr); // [9, 7, 5, 3, 1]


// let fruits=["Banana", "Apple", "Mango", "Cherry"];
// fruits.sort((a,b)=>b.localeCompare(a));// The localeCompare() method compares two strings in the current locale.
// console.log(fruits); // ['Mango', 'Cherry', 'Banana', 'Apple']


// let arr=[10,20,30,40,50];
// console.log(arr.indexOf(30)); // 2
// console.log(arr.indexOf(100)); // -1 (not found)


// let arr=[10,20,30,40,50];
// let result=arr.find((number)=>{
//     return number>25;
// });// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// console.log(result); // 30


// let arr=[10,20,30,40,50];

// let length=arr.length;
// console.log("Length: ",length);

// for(let index=0;index<length;i++){
//     console.log[index];
// }

// arr.forEach((value,index)=>{
//     console.log("Number",value,"Index",index);
// })

// let obj={
//     name:"John",
//     "full name":"John Doe",//use quotes for keys with spaces
//     age:30,
//     weight:70,
//     height:180,
//     greeet : function(){
//         console.log("Hello " + this.name+" Kaise ho?");
// }
// };

// for(let key in obj){//iterating over object keys
//     console.log(key," ",obj[key]);
// }
// // console.log(obj)
// // obj.greeet();


// let arr=[10,20,30,40,50];
// for(let value of arr){//iterating over array values
//     console.log(value);
// }


// let arr=[10,20,30,40,50];

// function getsum(arr){
//     let len=arr.length;
//     let sum=0;
//     for(let i=0;i<len;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }

// let total=getsum(arr);
// console.log(total);