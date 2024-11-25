'use strict';

const year = parseInt(prompt("Give a year!"))
let leap = 0

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            leap = 1
        }
    }
    else {
        leap = 1
    }
}

if (leap === 1) {
    document.querySelector('#target').innerHTML = `Year ${year}, is a leap year!`;
}
else {
    document.querySelector('#target').innerHTML = `Year ${year}, is not a leap year!`;
}
