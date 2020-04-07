'use strict';

const numberTriangle = Number(prompt('Введите число', ''));
let res = '';
let triangle = '';

for (let i = 0; i <= numberTriangle; i++) {
    res += '*';
    triangle += res + '\n';
}

console.log(triangle);