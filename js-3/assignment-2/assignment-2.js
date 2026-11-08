
"use strict";

let number = Number(prompt("Enter the number of participants:"));

let participants = [];

for (let i = 0; i < number; i++) {
    let name = prompt("Enter the name of participant " + (i + 1) + ":");
    participants.push(name);
}
participants.sort();
let target = document.getElementById("target");

for (let i = 0; i < participants.length; i++) {
    let li = document.createElement("li");
    li.textContent = participants[i];
    target.appendChild(li);
}
