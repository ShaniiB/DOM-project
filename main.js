"use strict"
//alert("Sanity Test");

//make container
function createContainer() {

// array for journal entry
let journalEntry = [];


class journalEntry {
   create(currentdate, journalinput, confidencelevel){

this.currentdate = currentdate;
this.journalinput = journalinput;
this.confidencelevel = confidencelevel;

}
}

let mainContainer = document.getElementById("mainContainer");    
let headerOne = document.createElement("h1");
let text = document.createTextNode("Hello");
headerOne.appendChild(text);
console.log(mainContainer);
mainContainer.appendChild(headerOne);
console.log("sanity test"); 

// unordered lists

let unordered = document.createElement("ul");
unordered.classList.add("unordered");
let listItems = document.createElement("li");
unordered.appendChild(listItems);
let ulText = document.createTextNode("Hello");
listItems.appendChild(ulText);
mainContainer.appendChild(unordered);


// ordered lists
let ordered = document.createElement("ol");
let li = document.createElement("li")
ordered.classList.add("ordered");
let listText = document.createTextNode("Hello");
li.appendChild(listText);
ordered.appendChild(li);
mainContainer.appendChild(ordered);


// prompt for 
let reflection = prompt("Whomp-whomp");
while (reflection === "" || reflection === null) { // user must answer to move on.
reflection = prompt("Speak to me.");
}

// prompt for
let todayDate = prompt("Whomp");
while (todayDate === "" || todayDate === null) { // user must answer to move on.
todayDate = prompt("Speak to me.");
}

// prompt fot
let confidenceTest = prompt("Whomp");
while (confidenceTest === "" || confidenceTest === null) { // user must answer to move on.
confidenceTest = prompt("Speak to me.");
}

}
createContainer();
