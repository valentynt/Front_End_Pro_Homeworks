'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';


function drawCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
};

drawCircle(200, 50, 20);
drawCircle(200, 95, 30);
drawCircle(200, 155, 40);
ctx.fillStyle = 'black';
drawCircle(194, 47, 2);
drawCircle(206, 47, 2);
drawCircle(200, 85, 3);
drawCircle(200, 110, 3);
drawCircle(200, 135, 3);
drawCircle(193, 57, 1);
drawCircle(195, 59, 1);
drawCircle(197, 60, 1);
drawCircle(199, 60, 1);
drawCircle(201, 60, 1);
drawCircle(203, 60, 1);
drawCircle(205, 59, 1);
drawCircle(207, 57, 1);
