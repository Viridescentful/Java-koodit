'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let name of names) {
    const nameitem = document.createElement('li')
    nameitem.innerHTML = name;
    document.querySelector('#target').append(nameitem);
}