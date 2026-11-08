
"use strict";

let numbers = [];

while (true) {
    let num = Number(prompt("Enter a number:"));

    if (numbers.includes(num)) {
        alert("The number has already been given!");
        break;
    }

    numbers.push(num);
}
numbers.sort(function(a, b) {
    return a - b;
});
console.log("Numbers in ascending order:");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
