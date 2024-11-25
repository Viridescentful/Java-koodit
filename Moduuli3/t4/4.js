'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (let student of students) {
    const studentitem = document.createElement('option')
    studentitem.value = student.id;
    studentitem.innerHTML = student.name;
    document.querySelector('#target').append(studentitem);
}
