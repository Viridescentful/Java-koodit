'use strict';

let dogarray = []

for (let i = 1; i < 7; i++) {
    dogarray.push(prompt(`Give ${i}# Dog's Name!`))
}

dogarray.sort()
dogarray.reverse()

for (let i = 0; i <= dogarray.length - 1; i++) {
    const newelement = document.createElement('li')
    newelement.innerHTML = `${dogarray[i]}`;

    document.querySelector('#target').append(newelement);
}
