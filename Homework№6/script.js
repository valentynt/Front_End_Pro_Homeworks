"use strict";

let students = [
    {
        name: 'Iliya',
        gender: 'male',
        year: 1990,
    },
    {
        name: 'Olga',
        gender: 'female',
        year: 1987,
    },
    {
        name: 'Jesica',
        gender: 'female',
        year: 1988,
    },
    {
        name: 'Yra',
        gender: 'male',
        year: 1985,
    },
    {
        name: 'Peter',
        gender: 'male',
        year: 1989,
    }
]

function getAverageAge(array) {
    let currentYear = new Date().getFullYear();
    let average = 0;

    for (let i = 0; i < array.length; i++) {
        let year = array[i].year;
        let age = currentYear - year;
        average += age;
    }
    return average / array.length;
}

console.log(getAverageAge(students));



function checkMostGender(gen) {
    let result = 0;

    for (let i = 0; i < gen.length; i++) {
        if (gen[i].gender === "male") {
            result++;
        } else {
            result--;
        }
    }
    return result > 0 ? "male" : result === 0 ? "fifty-fifty" : "female";
}

console.log(checkMostGender(students));



let arr = [1, 2, 3, 4, 5, 6];

function clone(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let newIndex = result.length;

        result[newIndex] = arr[i];
    }
    return result;
}

let brr = clone(arr);

brr[0] = 42;
console.log(brr);
console.log(arr);




function filter(array, isEven) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let newIndex = result.length;

        if (isEven(array[i])) {
            result[newIndex] = array[i];
        } else {
            continue;
        }
    }
    return result;
}

function isEven(x) {
    return x % 2 === 0;
}

console.log(filter(arr, isEven));