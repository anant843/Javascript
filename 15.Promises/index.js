let promise = new Promise((resolve, reject) => {
  let success = false; // Change this to true to see the resolved case
  if (success) {
    resolve("Promise resolved successfully");
  } else {
    reject("Promise rejected");
  }
});

// Chaining .then() methods
promise
  .then((message) => {
    console.log(message);
    return message.length;
  })
  .then((length) => {
    console.log("Length of message: " + length);
    return length * 2;
  })
  .then((doubledLength) => {
    console.log("Doubled length: " + doubledLength);
  })
  .catch((error) => {
    // Handling rejection
    console.log(error);
  })
  .finally((message) => {
    console.log("finally block is always executed");
  });

// Output will depend on the value of 'success' variable

let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Promise resolved after 2 seconds");
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Promise resolved after 3 second");
});
let promise4 = new Promise((resolve, reject) => {
  setTimeout(reject, 4000, "Promise resolved after 4 second");
});

Promise.all([promise2, promise3, promise4])
  .then((values) => {
    console.log(values);
  }) 
  // Using Promise.all to wait for multiple promises
  //sequence of output is depend on sequence of promises in the array
  .catch((error) => {
    console.log(error);
  }); 
  // handling rejection is run due to promise4 rejection
