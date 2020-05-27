'use strict';



const person = {
    name: 'Valentyn',
};

function info(phone, email) {
    console.log(`Имя: ${this.name}, Тел.: ${phone}, Email: ${email}`);
};

function myBind(fn, context, ...rest) {
    return function (...args) {
        const uniqId = Date.now().toString();

        context[uniqId] = fn;

        const result = context[uniqId](...rest.concat(args));

        delete context[uniqId];

        return result;
    };
};

myBind(info, person)('737535898', 'valentyntyrtychko@gmail.com');
myBind(info, person, '737535898', 'valentyntyrtychko@gmail.com')();





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
