'use strict';

let participantamount = parseInt(prompt("Give a participant amount!"))

let participantarray = []

for (let i = 1; i < participantamount + 1; i++) {
    participantarray.push(prompt(`Give ${i}# Participant's Name!`))
}

participantarray.sort()

for (let i = 0; i <= participantarray.length - 1; i++) {
    const newelement = document.createElement('li')
    newelement.innerHTML = `${participantarray[i]}`;

    document.querySelector('#target').append(newelement);
}
