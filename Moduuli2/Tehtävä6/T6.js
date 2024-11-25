'use strict';

function diceroll() {
    return (Math.floor(Math.random() * 6) + 1)
}

while (true) {
    let rollednumber = diceroll()

    const newelement = document.createElement('li')
    newelement.innerHTML = `${rollednumber}`;

    document.querySelector('#target').append(newelement);

    if (rollednumber === 6) {
        break
    }
}
