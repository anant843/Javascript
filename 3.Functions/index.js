
// 1. Function Declaration
// Function ko define karna aur call karna.
// Hoisting: Function ko declaration se pehle bhi call kar sakte hain.

function sayName() {
    console.log("Anant");
}

sayName();
// Output: Anant


// 2. Function with Loop
// Loop ka use karke 0 se 10 tak numbers print karna.

function printCount() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

printCount();
// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


// 3. Parameters and Arguments
// Parameter value receive karta hai, argument function call karte waqt pass hota hai.

function printNum(num) {
    console.log("Printing Number:", num);
}

printNum(10);
// Output: Printing Number: 10


// 4. Return Function
// Teen numbers ka sum calculate karke return karna.

function addnum(a, b, c) {
    return a + b + c;
}

let result = addnum(10, 20, 30);
console.log(result);
// Output: 60


// 5. Return Statement
// First name aur last name ko combine karke full name return karna.
// Return ke baad ka code execute nahi hota (unreachable code).

function getMyName(fname, lname) {
    return fname + " " + lname;

    let a = 5;
    console.log(a); // Unreachable code
}

let myName = getMyName("Anant", "Thakur");
console.log(myName);
// Output: Anant Thakur


// 6. Multiplication Function
// Do numbers ko multiply karke result return karna.

function getMulti(a, b) {
    return a * b;
}

console.log(getMulti(10, 29));
// Output: 290


// 7. Function Expression
// Function ko ek variable mein assign karna.
// Hoisting: 'let' variable initialize hone se pehle access nahi kar sakte.
// Isliye initialization se pehle call karne par ReferenceError aayega.

let avg = function(a, b) {
    return (a + b) / 2;
};

let ans = avg(2, 4);
console.log(ans);
// Output: 3


// 8. Arrow Function
// Arrow function ka use karke x ki power y calculate karna.
// 'const' initialization se pehle access nahi kar sakte (Temporal Dead Zone).

const getExp = (x, y) => {
    let ans = x ** y;
    return ans;
};

console.log(getExp(2, 10));
// Output: 1024
