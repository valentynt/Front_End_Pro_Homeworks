"use strict";


function calculationAreaCircle(radius) {
    return Math.PI * radius * radius;
}
console.log(calculationAreaCircle(12));


function calculationLenghtCircle(radius) {
    return 2 * Math.PI * radius;
}
console.log(calculationLenghtCircle(45));


function printNumber(num1, num2) {
    return (num1 + num2) / 2;
}
console.log(printNumber(5, 10));


function calc(number1, number2, action) {
    let result;
    if (action === "+") {
        result = (Number(number1)) + (Number(number2));
    } else if (action === "-") {
        result = (Number(number1)) - (Number(number2));
    } else if (action === "*") {
        result = (Number(number1)) * (Number(number2));
    } else if (action === "/") {
        result = (Number(number1)) / (Number(number2));
    } else if (action === "%") {
        result = (Number(number1)) % (Number(number2));
    } else if (action === "^") {
        result = (Number(number1)) ** (Number(number2));
    } else {
        result = "Вы ввели неверное математическое действие!";
    }
    return result;
}

console.log(calc(10, 5, "-"));