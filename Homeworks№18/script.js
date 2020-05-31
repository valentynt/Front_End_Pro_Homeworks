'use strict';



const bind = function (fn, context) {
    const necessaryArgsCount = 2;
    const bindArgs = Array.prototype.slice.call(arguments, necessaryArgsCount);

    return function () {
        const fnArgs = Array.prototype.slice.call(arguments);
        return fn.apply(context, bindArgs.concat(fnArgs));
    }
};


function sayHello(phrase, symbol) {
    console.log(arguments);

    return `${phrase} ${this.firstName}${symbol}`;
}

const oleg = {
    firstName: 'Oleg',
    age: 20
}

const foo = bind(sayHello, oleg, 'Hello');

console.log(foo('!'));





const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const map = function (array, cb, thisArg) {
    const res = [];

    for (let i = 0; i < array.length; i++) {
        res.push(
            cb.call(thisArg || array[i], array[i], i, array)
        );
    }
    return res;
};

const arrToSq = map(arr, function (el, i) {
    return {
        index: i,
        value: el ** 2
    };
}, {});

console.log(arrToSq);
