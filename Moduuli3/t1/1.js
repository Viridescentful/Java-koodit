'use strict';

const firstitem = document.createElement('li')
firstitem.innerHTML = `First Item`;
document.querySelector('#target').append(firstitem);

const seconditem = document.createElement('li')
seconditem.innerHTML = `Second Item`;
document.querySelector('#target').append(seconditem);

const thirditem = document.createElement('li')
thirditem.innerHTML = `Third Item`;
document.querySelector('#target').append(thirditem);

document.querySelector('#target').classList.add("my-list");