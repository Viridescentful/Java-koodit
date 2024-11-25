'use strict';

const dicerolls = parseInt(prompt("How many times should the dice be rolled?"))
let sumofrolls = 0

for (let i = 0; i < dicerolls; i++) {
    sumofrolls += Math.floor(Math.random() * 6) + 1
}





