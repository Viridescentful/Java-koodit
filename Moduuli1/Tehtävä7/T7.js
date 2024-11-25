'use strict';

let rolls = []

const rollamount = parseInt(prompt("How many times will the dice be rolled?"))

for (let i = 0; i < rollamount; i++) {
    rolls.push((Math.floor(Math.random() * 6) + 1))
}

let sum = 0

for (let i = 0; i < rolls.length; i++) {
    sum += rolls[i]
}

console.log(`Sum of the rolled numbers is: ${sum}`)