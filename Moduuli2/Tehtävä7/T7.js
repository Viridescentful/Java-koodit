'use strict';

const amountofsides = 21

function diceroll(sides) {
    return (Math.floor(Math.random() * sides) + 1)
}

while (true) {
    let rollednumber = diceroll(amountofsides)

    const newelement = document.createElement('li')
    newelement.innerHTML = `${rollednumber}`;

    document.querySelector('#target').append(newelement);

    if (rollednumber === amountofsides) {
        break
    }
}
