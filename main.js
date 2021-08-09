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
class Journal {
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

    let currentDate = prompt ("Help");
    let confidenceLevel = prompt ("Why");
    let journalInput = prompt ("Is");

    if (currentDate != null && confidenceLevel != null && journalInput != null) {
        alert("Good job, champ");

};

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

