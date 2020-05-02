'use strict';


document.querySelectorAll('.box')
    .forEach(function (box) {
        box.querySelector('[data-action="plus"]')
            .addEventListener('click', function () {
                this.closest('.box').querySelector('span').textContent++;
            });
        box.querySelector('[data-action="minus"]')
            .addEventListener('click', function () {
                this.closest('.box').querySelector('span').textContent--;
            });
    });



const url = "https://ithillel.ua/?utm_source=%D0%9A%D0%B0%D1%80%D0%BB%20%D1%83%20%D0%9A%D0%BB%D0%B0%D1%80%D1%8B%20%D1%83%D0%BA%D1%80%D0%B0%D0%BB%20%D0%BA%D0%BE%D1%80%D0%B0%D0%BB%D0%BB%D1%8B&utm_medium=,%20%D0%B0%20%D0%9A%D0%BB%D0%B0%D1%80%D0%B0%20%D1%83%20%D0%9A%D0%B0%D1%80%D0%BB%D0%B0%20%D1%83%D0%BA%D1%80%D0%B0%D0%BB%D0%B0%20%D0%BA%D0%BB%D0%B0%D1%80%D0%BD%D0%B5%D1%82.&utm_campaign=%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D0%B5%D0%B2%D0%B0%20%D0%9A%D0%BB%D0%B0%D1%80%D0%B0%20%D0%BA%D0%B0%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B0&utm_term=%D0%9A%D0%B0%D1%80%D0%BB%D0%B0%20%D1%81%D1%82%D1%80%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%B0%D1%80%D0%B0%D0%BB%D0%B0&utm_content=%D0%B7%D0%B0%20%D0%BA%D1%80%D0%B0%D0%B6%D1%83%20%D0%BA%D0%BE%D1%80%D0%B0%D0%BB%D0%BB%D0%BE%D0%B2";

function getQParamsFromUrl(queryStr) {
    let obj = {};
    queryStr.slice(queryStr.indexOf('?') + 1).split('&')
        .map(function (e) {
            return e.split('=');
        })
        .forEach(function (e) {
            obj[e[0]] = decodeURIComponent(e[1]);
        });
    return obj;
};

console.log(getQParamsFromUrl(url));