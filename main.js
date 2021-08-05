"use strict"
//alert("Sanity Test");
//make container
function createContainer() {

let mainContainer = document.getElementById("mainContainer");    
let headerOne = document.createElement("h1");
let text = document.createTextNode("Hello");
headerOne.appendChild(text);
console.log(mainContainer);
mainContainer.appendChild(headerOne);
console.log("im here"); 

}
createContainer();

//ask name for journal
//ask for date for journal
// insert journal input
