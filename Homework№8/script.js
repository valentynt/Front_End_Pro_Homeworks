'use strict';


const arr = [-246, 753, -468, 475, -683, 476, -583, 746, -581];

let summ = 0;
arr.forEach(function (item) {
    summ += item;
    return summ;
})

console.log(summ);



const result = arr.filter(function (item) {
    return item < 0;
})

console.log(result);



const increasing = arr.sort(function (a, b) {
    return a - b;
})

console.log(increasing);



const decreasing = arr.sort(function (a, b) {
    return b - a;
})

console.log(decreasing);



const division = arr.map(function (item) {
    return item / 2;
})

console.log(division);



const str = '12, 42, 63, 56, 122, 17, 117, 25, 645, 722, 964';

function makeArray(stringToArray, separator) {
    let array = stringToArray.split(separator).map(Number);
    return array;
}
console.log(makeArray(str, (',')));



const otherArray = makeArray(str, (','));

const evenArray = otherArray.filter(function (el) {
    return el % 2 === 0;
});

console.log(evenArray);



const scheme = [
    ['name', 'Vasya'],
    ['age', 25],
    ['score', 95]
];

function makeObjectFromScheme(arr) {
    let obj = {};

    arr.forEach(function (el) {
        obj[el[0]] = el[1];
    });
    return obj;
}

console.log(makeObjectFromScheme(scheme));



const newObject = makeObjectFromScheme(scheme);

function makeArrayFromObject(obj) {
    let array = [];

    for (let key in obj) {
        array.push([key, obj[key]]);
    }
    return array;
}

console.log(makeArrayFromObject(newObject));
