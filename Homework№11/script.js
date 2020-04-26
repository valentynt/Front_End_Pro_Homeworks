'use strict';


const $boxes = document.querySelectorAll('.box');

$boxes.forEach(function (el) {
    el.addEventListener('click', function () {
        const bgColor = this.style.backgroundColor;

        switch (bgColor) {
            case 'grey':
                this.style.backgroundColor = 'blue';
                break;
            case 'blue':
                this.style.backgroundColor = 'green';
                break;
            case 'green':
                this.style.backgroundColor = 'yellow';
                break;
            default:
                this.style.backgroundColor = 'grey';
        }

        el.addEventListener('click', function () {
            const $container = document.querySelector('.container');

            $container.append(this);
        });
    });
});




const $callbackDiv = document.createElement('div');
$callbackDiv.className = 'triangle shadow radius';

function toggleClass($div, cls) {
    const classes = $div.className.split(' ');
    const flag = classes.some(function (el) {
        return el === cls;
    });

    if (flag) {
        const classIndex = classes.findIndex(function (el) {
            return el === cls;
        });
        classes.splice(classIndex, 1);
    } else {
        classes.push(cls);
    }

    $div.className = classes.join(' ');
};

toggleClass($callbackDiv, 'border');

document.body.prepend($callbackDiv);