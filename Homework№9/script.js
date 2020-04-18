'use strict';


let keys = [
    ['value', 42, true, false, false],
    ['value2', true, false, false, false],
    ['value3', 'Hello', true, true, true]
];

function createObject(keys) {
    let obj = {};

    keys.forEach(function (el) {
        Object.defineProperty(obj, el[0], {
            value: el[1],
            enumerable: el[2],
            writable: el[3],
            configurable: el[4]
        });
    });
    return obj;
};

console.log(createObject(keys));



let obj1 = {
    value: 42,
    value2: true
}

let obj2 = {
    value: 42,
    value2: true
}

function compareObj(object1, object2) {
    let objCompare1 = String(Object.entries(object1));
    let objCompare2 = String(Object.entries(object2));

    return objCompare1 === objCompare2;
}

console.log(compareObj(obj1, obj2)); // true