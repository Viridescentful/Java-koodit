'use strict';

const primenumber = parseInt(prompt("Give a number!"))

let isPrime = true

for (let i = 2; i <= primenumber - 1; i++) {
    if (primenumber % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime === false) {
    document.querySelector('#target').innerHTML = `Number ${primenumber}, is not a Prime number`;
}
else {
    document.querySelector('#target').innerHTML = `Number ${primenumber}, is a Prime number`;
}





