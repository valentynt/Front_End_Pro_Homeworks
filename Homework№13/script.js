'use strict';


const alphabetArr = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,CapsLock,Пробел,!,"'.split(',');

const $myTable = document.querySelector('.myTable');
const $content = document.querySelector('.content');

let countCL = 0;

function generateTableData(arr) {
    let htmlTable = `<table>`;
    let tr = `<tr>`;

    arr.forEach(function (el, ind) {
        if (ind % 13 === 0) {
            tr += `</tr><tr><td><button data-action="letter">${el}</button></td>`;
        } else {
            tr += `<td><button data-action="letter">${el}</button></td>`;
        }
    });

    tr += `</tr>`;

    htmlTable += tr;

    htmlTable += `</table>`;
    return htmlTable;
};

$myTable.innerHTML = generateTableData(alphabetArr);


document.querySelectorAll('[data-action="letter"]')
    .forEach(function (el) {
        el.addEventListener('click', function () {
            if (this.textContent === 'CapsLock') {
                countCL++;
            } else if (this.textContent === 'Пробел') {
                $content.innerHTML = $content.innerHTML + ' ';
            } else {
                if (countCL % 2 === 0) {
                    $content.innerHTML = $content.innerHTML + this.textContent.toLowerCase();
                } else {
                    $content.innerHTML = $content.innerHTML + this.textContent.toUpperCase();
                }
            }
        });
    });

document.querySelector('.btnClear')
    .addEventListener('click', function () {
        $content.innerHTML = '';
    });





const params = {
    action: {
        sale: 0,
        buy: 1,
    },
    currencySale: {
        usd: 27,
        eur: 29,
        uah: 1,
    },
    currencyBuy: {
        usd: 28,
        eur: 31,
        uah: 1,
    },
};

document.forms.calculator.addEventListener('submit', function (e) {
    e.preventDefault();

    const action = this.action.value;
    const carrencyFrom = this.carrencyFrom.value;
    const carrencyIn = this.carrencyIn.value;
    const result = this.result;
    const sum = this.sum.value;

    if (action && carrencyFrom && carrencyIn && sum) {

        if (action === 'sale' && carrencyFrom === 'eur' && carrencyIn === 'usd') {
            result.value = params.currencySale[carrencyFrom] / params.currencySale[carrencyIn] * sum;
        } else if (action === 'sale' && carrencyFrom === 'usd' && carrencyIn === 'eur') {
            result.value = params.currencySale[carrencyFrom] / params.currencySale[carrencyIn] * sum;
        } else if (carrencyFrom === 'uah' && carrencyIn === 'uah') {
            result.value = sum * params.currencySale[carrencyFrom];
        } else if (carrencyFrom === 'usd' && carrencyIn === 'usd') {
            result.value = sum;
        } else if (carrencyFrom === 'eur' && carrencyIn === 'eur') {
            result.value = sum;
        } else if (action === 'buy' && carrencyFrom === 'uah' && carrencyIn === 'usd') {
            result.value = sum / params.currencyBuy[carrencyIn];
        } else if (action === 'buy' && carrencyFrom === 'uah' && carrencyIn === 'eur') {
            result.value = sum / params.currencyBuy[carrencyIn];
        } else if (carrencyFrom === 'usd' && carrencyIn === 'uah') {
            result.value = sum * params.currencySale[carrencyFrom];
        } else if (carrencyFrom === 'eur' && carrencyIn === 'uah') {
            result.value = sum * params.currencySale[carrencyFrom];
        } else if (action === 'buy' && carrencyFrom === 'eur' && carrencyIn === 'usd') {
            result.value = sum * params.currencySale[carrencyFrom] / params.currencyBuy[carrencyIn];
        } else if (action === 'buy' && carrencyFrom === 'usd' && carrencyIn === 'eur') {
            result.value = sum * params.currencySale[carrencyFrom] / params.currencyBuy[carrencyIn];
        } else { console.log("Ничего не выбрало") };

    } else {
        alert('Fill all fields, please!');
    }

    console.log(action, carrencyFrom, carrencyIn, result, sum);
});