'use strict';

const startyear = parseInt(prompt("Give a start year!"))
const endyear = parseInt(prompt("Give an end year!"))

for (let i = startyear; i < endyear; i++) {
    if (i % 4 === 0) {
        if (i % 100 === 0) {
            if (i % 400 === 0) {
                const newelement = document.createElement('li')
                newelement.innerHTML = `${i}`;

                document.querySelector('#target').append(newelement);
            }
        } else {
            const newelement = document.createElement('li')
            newelement.innerHTML = `${i}`;

            document.querySelector('#target').append(newelement);
        }
    }
}



