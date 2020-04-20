'use strict';


const arr = [1, 2, [1.1, 1.2, 1.3], 3];
const $container = document.querySelector('.container');

function generateList(array) {
    let listItems = '';

    array.forEach(function (el) {
        if (Array.isArray(el)) {
            let subListItems = '<li><ul>';

            el.forEach(function (el) {
                subListItems += `<li>${el}</li>`;
            });
            subListItems += '</ul></li>';
            listItems += subListItems;
        } else {
            listItems += `<li>${el}</li>`;
        };
    });

    const $list = document.createElement('ul');

    $list.innerHTML = listItems;

    return $container.after($list);
}

console.log(generateList(arr));




function createTable(rows, cols) {
    let table = '<table>';
    let count = 1;

    for (let i = 1; i <= rows; i++) {
        let tr = '<tr>';

        for (let j = 1; j <= cols; j++) {
            tr += `<td>${count++}</td>`;
        }

        tr += '</tr>';
        table += tr;
    }
    return table += '</table>';
}

$container.innerHTML = createTable(10, 10);