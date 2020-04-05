"use strict";

let userName = prompt("Ваше имя?", ' ');
let userAge = +(prompt("Укажите ваш возраст", ' '));
let drink = confirm("Алкоголь употребляем?", ' ');

if (userAge > 40 && drink) {
    alert(userName + ",Не злоупотребляйте");
} else if (userAge < 18 && drink) {
    alert(userName + ",Ты что?!Маме расскажу!");
} else if (userAge >= 18 && drink) {
    alert(userName + ",Только водку с пивом не мешай...");
} else {
    alert(userName + ",Так держать!");
}