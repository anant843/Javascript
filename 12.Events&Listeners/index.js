// monitorEvents(document);// Monitor all events on the document object

// unmonitorEvents(document);// Stop monitoring events on the document object

// function changeText(){
// let fpara=document.getElementById("fpara");
// fpara.textContent="Hello World!";
// }

// let fpara=document.getElementById("fpara");
// fpara.addEventListener("click",changeText);// Attach click event listener to the paragraph

// fpara.removeEventListener("click",changeText);// Remove click event listener from the paragraph


//capture phase example root to target
//bubbling phase example target to root
//At-target phase example target only


// In Event Bubbling Event travels from inner element → outer element
// In Event Capturing Event travels from outer element → inner element


// function changetext(event){
//     event.preventDefault();// Prevent the default action of the anchor tag
//     let anchor=document.getElementById("fanchor");
//     anchor.textContent="You clicked the link!";
// }

// let anchor=document.getElementById("fanchor");
// anchor.addEventListener("click",changetext);


// let paras=document.querySelectorAll("p");
// function alertPara(event){
//         alert("you have clicked on para: "+event.target.textContent);
//     }

// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener("click",alertPara)
// }


// function alertPara(event){
//         alert("you have clicked on para: "+event.target.textContent);
//     }

// let mydiv=document.getElementById('wrapper');
// document.addEventListener('click',alertPara)



// function alertPara(event){
//        if(event.target.nodeName==='SPAN') alert("you have clicked on span tag whose value is "+event.target.textContent);
//     }

// let mydiv=document.getElementById('wrapper');
// document.addEventListener('click',alertPara)