'use strict';

let numberarray = []

for (let i = 1; i < 6; i++) {
    numberarray.push(parseInt(prompt(`Give ${i}# number!`)))
}

let reversedarray = []

for( let i = numberarray.length - 1; i >= 0; i-- ) {
    reversedarray.push(numberarray[i]);
}

console.log(reversedarray)