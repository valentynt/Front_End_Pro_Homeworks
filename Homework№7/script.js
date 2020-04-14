"use strict";

let origin = {
    a: 5,
    b: 10,
    c: 32,
    f: 43,
};

let target = {
    d: 17,
    e: 2,
};

function copy(target, origin) {
    let obj = {};

    for (let key in origin) {
        target[key] = origin[key];
    }
    for (let key in target) {
        obj[key] = target[key];
    }
    return obj;
}

console.log(copy(target, origin));



function getNumberOfEven(n) {
    let numEven = String(n);
    numEven.split('');
    let result = 0;

    for (let i of numEven) {
        if (numEven[i] % 2 === 0) {
            result++;
        }
    }
    return result;
}

console.log(getNumberOfEven(23787656));



function sumAll(...arg) {
    let result = 0;

    for (let i of arg) {
        result += i;
    }
    return result;
}

console.log(sumAll(10, 25, 30, 47));



function mathMinMax(...args) {
    let minNumber = Math.min(...args);
    let maxNumber = Math.max(...args);
    let result = [minNumber, maxNumber];
    return result;
}

console.log(mathMinMax(2, 3, 5, 12, 1, 9));