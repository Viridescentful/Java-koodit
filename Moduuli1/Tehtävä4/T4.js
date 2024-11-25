'use strict';

const list = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]
const randomnumber = Math.floor(Math.random() * list.length);

const name = prompt("Anna nimesi!")

console.log(`${name}, you are ${list[randomnumber]}!`)