//code 1
// performance.now() is used to measure the time taken by a block of code to execute
const t1=performance.now();

for(let i=1;i<=100;i++){
let para=document.createElement('p');
para.textContent="This is para"+i;
document.body.appendChild(para); 
}
// 100 reflows and 100 repaints for the above code as we are appending each paragraph to the body one by one.

const t2=performance.now();
console.log("Total time by code 1: "+(t2-t1));



// Code 2

const t3=performance.now();

let mydiv=document.createElement('div');
for(let i=1;i<=100;i++){
let para=document.createElement('p');
para.textContent="This is para"+i;
mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
// 1 reflow and 1 repaint for the above code as we are appending all paragraphs to a div and then appending the div to the body.

const t4=performance.now();
console.log("Total time by code 2: "+(t4-t3))



//Best Code
let fragment=document.createDocumentFragment();

for(let i=0;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is para "+i;
    //No reflow and no repaint for the below line...
    fragment.appendChild(para);
}

// the below lines takes 1 reflow and 1 repaint...
document.body.appendChild(fragment);