'use strict';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

document.querySelector('table').addEventListener('click', function (e) {
    let $table = document.querySelector('table');
    let $el = e.target;
    let random = getRandomInt(1, 100);
    $el.innerHTML = random;

    let $div = document.createElement('div');
    $div.innerHTML = $el.innerHTML;
    $table.after($div);
});

$('h1').css('color', 'red');




$('.accordion-item__title').click(function () {
    $('.accordion-item__title').removeClass('active');
    $('.accordion-item__content').slideUp();
    $(this).addClass('active')
        .next()
        .slideToggle();
});
