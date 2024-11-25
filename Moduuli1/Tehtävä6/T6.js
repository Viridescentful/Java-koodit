'use strict';

const calculate = confirm("Should I calculate the square root?")

if (calculate === true) {
    const usernumber = parseInt(prompt("Give number!"))

    if (usernumber >= 0) {
        document.querySelector('#target').innerHTML = `The square root of ${usernumber} is: ${Math.sqrt(usernumber)}!`;
    }
    else {
        document.querySelector('#target').innerHTML = `The square root of a negative number is not defined!`;
    }
}
else {
    document.querySelector('#target').innerHTML = `The square root is not calculated.`;
}
