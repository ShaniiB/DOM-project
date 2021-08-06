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



// prompt for date
let currentDate = prompt("What is today?\n\nMM/DD/YYYY")
while (currentDate === "" || currentDate === null) { // user must answer to move on.
currentDate = prompt("What todays date?");
}
console.log(currentDate)

// prompt for confidence
let confidenceLevel = prompt("How're you feeling today?\n\nLow / Medium / High?")
while (confidenceLevel === "" || confidenceLevel === null) { // user must answer to move on.
confidenceLevel = prompt("Speak to me?");
}
console.log(confidenceLevel)

// prompt for journal
let journalInput = prompt("What's on your mind?")
while (journalInput === "" || journalInput === null ) { // user must answer to move on.
journalInput = prompt("Reflection");
}
console.log(journalInput);

// array for journal entry
//let journalEntry = []


//class {"journalEntry"} {
//create(currentdate, journalinput, confidencelevel); {

//this.currentdate = currentdate;
//this.journalinput = journalinput;
//this.confidencelevel = confidencelevel;
//
//}
//}
}

createContainer();
