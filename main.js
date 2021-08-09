"use strict"

const arrayJournal = [];

//___________ALERT("Sanity Test?");
function createHolder() { //____MAKING A MORE ACCEPTABLE BODY

    let betterBody = document.createElement("body");
    betterBody.append;
    document.body.style.backgroundColor = "coral";

    let holder = document.getElementById("holder");
    holder.append;
    document.getElementById("holder").style.backgroundColor = "ivory";
    document.getElementById("holder").style.position = "absolute";
    document.getElementById("holder").style.top = "50px";
    document.getElementById("holder").style.left = "450px";
    document.getElementById("holder").style.zIndex = "0";
    document.getElementById("holder").style.height = "700px";
    document.getElementById("holder").style.width = "345px";
    document.getElementById("holder").style.borderRadius = "15px";

};
class Journal { //____INPUT FOR THE USERS & ARRAY PUSHER
    constructor(currentDate, confidenceLevel, journalInput) {

        this.currentDate = currentDate;
        this.confidenceLevel = confidenceLevel;
        this.journalInput = journalInput;

        arrayJournal.push(this); 
    }
};
//_____STARTING JOURNAL ENTRY & FUNCTIONALITY
function createJournals() {
   
    let containJournal = document.getElementById("containJournal");
    containJournal.append;

    let currentDate = prompt ("Please enter today's date?");
    let confidenceLevel = prompt ("How confident are you feeling today?");
    let journalInput = prompt ("Enter your what's on your mind?");

    if (currentDate != null && confidenceLevel != null && journalInput != null) {
        alert("Good job, champ!");
}

    else{ 
     alert("This is a safe space.");
     createJournals();
    
 };

    let unordered = document.createElement("ul");   
    let listItem = document.createElement("li");
    let liText = document.createTextNode(currentDate);
    listItem.appendChild(liText);
    unordered.appendChild(listItem);
    holder.appendChild(unordered);

    let unordered1 = document.createElement("ul");   
    let listItem1 = document.createElement("li");
    let liText1 = document.createTextNode(`Confidence level is ${confidenceLevel}`);
    listItem1.appendChild(liText1);
    unordered1.appendChild(listItem1);
    holder.appendChild(unordered1);

    let unordered2 = document.createElement("ul");   
    let listItem2 = document.createElement("li");
    let liText2 = document.createTextNode(journalInput);
    listItem2.appendChild(liText2);
    unordered2.appendChild(listItem2);
    holder.appendChild(unordered2);

    let newEntry = new Journal;
    
};

//_____STARTING BUTTON CREATION & FUNCTIONALITY

let btnHold = document.getElementById("buttonHolder");
btnHold.append;
let btn = document.createElement("button");
btnHold.appendChild(btn);
let btntext = document.createTextNode("New Entry");
btn.addEventListener("click", createJournals);
btn.appendChild(btntext);
createHolder(); 

