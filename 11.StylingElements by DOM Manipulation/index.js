fpara.querySelector("p");//selecting element by tag name

fpara.querySelectorAll(".firstclass");//selecting elements by class name

let fpara=document.getElementById("fpara");//selecting element by id

fpara.classList.add("secondclass");//adding another class to the existing class list

fpara.classList.remove("firstclass");//removing a class from the class list

fpara.classList.toggle("firstclass");//if class is present remove it else add it

fpara.classList.contains("secondclass");//returns true if class is present else false

fpara.style//gives all the inline styles applied to the element

fpara.style.backgroundColor="green";//modifying an existing inline style

fpara.style.fontSize="2rem";//adding a new inline style 

fpara.style.cssText="color:red; border:2px solid black;";//modifying multiple inline styles at once

spara.style.display="none";//hiding an element

spara.style.display="block";//showing the hidden element