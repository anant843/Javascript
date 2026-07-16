let obj = {
  age: 18,
  wt: 15,
  ht: 5.5,
};

//Printing the keys of object
for (let key in obj) { 
  console.log(key); 
}


//Object cloning method 1...
let dest2 = {};   
for (let key in obj) {
  let newkey = key;
  let newvalue = obj[key];
  dest2[newkey] = newvalue;
}

console.log(dest2);


//Object cloning method 2....
let dest = { ...obj };


//Object cloning method 3...
let src = Object.assign({}, obj);

let obj2 = {
  color: "red",
  value: 5,
};


// cloning multiple objects into a new object
let src2 = Object.assign({}, obj, obj2);


//Adding new property to the object
obj.color = "black";

console.log(obj);
console.log(dest);
console.log(src);
console.log(src2);
