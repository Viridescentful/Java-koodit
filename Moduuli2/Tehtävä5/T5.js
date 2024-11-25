'use strict';

let numberarray = []

while (true) {
    let promptnumber = parseInt(prompt("Give a number!"))

    if (numberarray.includes(promptnumber)) {
        console.log(`This Number has already been given!`)
        break
    }
    else {
        numberarray.push(promptnumber)
    }
}

numberarray.sort((a,b) => a-b)

for (let i = 0; i <= numberarray.length - 1; i++) {
    console.log(numberarray[i])
}