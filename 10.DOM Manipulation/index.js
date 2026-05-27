//DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.


//BOM (Browser Object Model) is a collection of objects that represent the browser window and its components, allowing interaction with the browser outside of the document content. It includes objects like window, navigator, screen, and location, enabling developers to manipulate the browser environment, control navigation, and access browser-specific information.

// button.innerHTML// gives the HTML content inside the button element.


// button.innerHTML=<p>"Anant"</p>// changes the HTML content inside the button element to a paragraph with the text "Anant".


// element.innerText// gives the text content inside the element, excluding any HTML tags.


// element.textContent// gives the text content inside the element, including hidden elements and spacing.


//when use the .appendchild() method, it adds a node to the end of the list of children of a specified parent node. If the node already exists in the document, it is removed from its current position and added to the new position

// let mydiv=document.getElementById("mydiv");
// let newElement=document.createElement('span');
// newElement.innerText="  Hello, I am a new span element!";
// mydiv.insertAdjacentElement('beforebegin',newElement);// Inserts the newElement before mydiv

// mydiv.insertAdjacentElement('afterend',newElement);// Inserts the newElement after mydiv

// mydiv.insertAdjacentElement('afterbegin',newElement);// Inserts the newElement as the first child of mydiv

// mydiv.insertAdjacentElement('beforeend',newElement);// Inserts the newElement as the last child of mydiv

// let parent=document.querySelector('#mydiv');
// let child=document.querySelector('#fpara');
// parent.removeChild(child);// removes the child element from the parent element.



// let children=document.querySelector('#fpara');
// let parent=children.parentElement;// gets the parent element of the children element.
// parent.removeChild(children);
