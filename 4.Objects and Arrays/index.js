
// 1. Object Creation
// An object stores data in key-value pairs.
// Functions inside objects are called methods.

let obj = {
    "full name": "Anant Rajput",
    age: 21,
    weight: 65,
    greet: function() {
        console.log("hello kaise ho");
    }
};

// obj.greet(); // Calls the greet method


// 2. Array Creation
// An array stores multiple values in a single variable.

let arr = [10, 20, 30, 40, 50];


// 3. Array Creation Using Constructor
// The Array constructor creates an array using the new keyword.
// Indexing starts from 0.

let brr = new Array("Love", "1", true);
console.log(brr[1]); // Output: 1


// 4. Array Methods
// Creating an array to practice different array methods.

let names = new Array("John", "Doe", 30, 70, 180);


// Push Method
// push() adds an element at the end of the array.

names.push("Anant");


// Pop Method
// pop() removes the last element of the array.

names.pop();


// Shift Method
// shift() removes the first element of the array.

names.shift();


// Unshift Method
// unshift() adds an element at the beginning of the array.

names.unshift("Mr.");


// Slice Method
// slice(start, end) returns a portion of an array.
// The end index is excluded.
// slice() does not modify the original array.

console.log(names.slice(1, 3));


// Splice Method
// splice(start, deleteCount, item) removes or replaces elements.
// It modifies the original array.

names.splice(1, 2, "Vansh");
// Removes 2 elements from index 1 and inserts "Vansh".

names.splice(2, 0, "Smith");
// Inserts "Smith" at index 2 without removing any elements.

console.log(names);
// console.log(names[0]); // Accesses the first element


// 5. MAP Method
// map() creates a new array by applying a function to every element.
// It does not modify the original array.

let mapArr = [10, 20, 30];

let ansArray = mapArr.map((number) => {
    return number * number;
});

console.log(ansArray); // Output: [100, 400, 900]


// map() also provides the current element and its index.

let mapArr2 = [1, 2, 3, 4, 5];

mapArr2.map((number, index) => {
    console.log(number + 1); // Prints each number plus 1
    console.log(index);      // Prints the current index
});


// 6. FILTER Method
// filter() creates a new array containing elements
// that satisfy the given condition.

let filterArr = [10, 20, 30, 40, 50, 21, 11, 31];

let evenArray = filterArr.filter((number) => {
    if (number % 2 === 0) {
        return true;  // Keep even numbers
    } else {
        return false; // Remove odd numbers
    }
});

console.log(evenArray); // Output: [10, 20, 30, 40, 50]


// 7. REDUCE Method
// reduce() processes array elements to produce a single result.
// acc = accumulated result; curr = current element.
// 0 is the initial value of the accumulator.

let reduceArr = [10, 20, 30, 40, 50];

let sum = reduceArr.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum); // Output: 150


// 8. Sorting in Ascending Order
// sort() modifies the original array.
// By default, it sorts elements as strings.
// Use (a, b) => a - b for numeric ascending order.

let sortArr = [9, 5, 1, 3, 7];

sortArr.sort((a, b) => a - b);
console.log(sortArr); // Output: [1, 3, 5, 7, 9]


// Sorting in Descending Order
// (a, b) => b - a sorts numbers from largest to smallest.

sortArr.sort((a, b) => b - a);
console.log(sortArr); // Output: [9, 7, 5, 3, 1]


// Sorting Strings
// localeCompare() compares strings according to language rules.
// Reversing the comparison gives descending alphabetical order.

let fruits = ["Banana", "Apple", "Mango", "Cherry"];

fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits);
// Output: ["Mango", "Cherry", "Banana", "Apple"]


// 9. indexOf() Method
// indexOf() returns the index of the first matching element.
// If the element is not found, it returns -1.

let searchArr = [10, 20, 30, 40, 50];

console.log(searchArr.indexOf(30));  // Output: 2
console.log(searchArr.indexOf(100)); // Output: -1 (not found)


// 10. FIND Method
// find() returns the first element that satisfies the condition.
// It returns undefined if no element matches.

let findArr = [10, 20, 30, 40, 50];

let result = findArr.find((number) => {
    return number > 25;
});

console.log(result); // Output: 30


// 11. Array Length and For Loop
// length gives the total number of elements in an array.
// The loop accesses each element using its index.

let loopArr = [10, 20, 30, 40, 50];

let length = loopArr.length;
console.log("Length:", length); // Output: 5

for (let index = 0; index < length; index++) {
    console.log(loopArr[index]);
}
// Prints: 10, 20, 30, 40, 50


// 12. forEach() Method
// forEach() executes a function for every array element.
// value represents the element and index represents its position.
// It is generally used to perform an action for each element.

loopArr.forEach((value, index) => {
    console.log("Number:", value, "Index:", index);
});


// 13. for...in Loop
// for...in iterates over an object's enumerable keys.
// obj[key] accesses the value associated with each key.

let person = {
    name: "John",
    "full name": "John Doe", // Quotes are needed for keys with spaces
    age: 30,
    weight: 70,
    height: 180,
    greet: function() {
        console.log("Hello " + this.name + " Kaise ho?");
    }
};

for (let key in person) {
    console.log(key, person[key]);
}

// person.greet(); // Calls the greet method


// 14. for...of Loop
// for...of iterates directly over the values of an iterable,
// such as an array.

let ofArr = [10, 20, 30, 40, 50];

for (let value of ofArr) {
    console.log(value);
}
// Prints: 10, 20, 30, 40, 50


// 15. Passing an Array to a Function
// An array can be passed as an argument to a function.
// The function calculates and returns the sum of all elements.

let sumArr = [10, 20, 30, 40, 50];

function getSum(arr) {
    let len = arr.length;
    let sum = 0;

    for (let i = 0; i < len; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(getSum(sumArr)); // Output: 150