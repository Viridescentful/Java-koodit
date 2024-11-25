'use strict';

const numberone = parseInt(prompt("Anna ensimmäinen numero!"))
const numbertwo = parseInt(prompt("Anna toinen numero!"))
const numberthree = parseInt(prompt("Anna kolmas numero!"))

let sum = numberone + numbertwo + numberthree
let product = numberone * numbertwo * numberthree
let average = (numberone + numbertwo + numberthree) / 3

console.log("Sum: " + sum + ", Product: " + product + ", Average: " + average)