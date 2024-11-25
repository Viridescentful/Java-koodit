'use strict';

let numberarray = []

while (true) {
    let promptnumber = parseInt(prompt("Give a number!"))

    if (promptnumber === 0) {
        break
    }
    else {
        numberarray.push(promptnumber)
    }
}

numberarray.sort((a,b) => a-b)
numberarray.reverse()

for (let i = 0; i <= numberarray.length - 1; i++) {
    console.log(numberarray[i])
}