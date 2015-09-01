var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
var STAGE_WIDTH = canvas.width,
    STAGE_HEIGHT = canvas.height;


function clear() {
    ctx.clearRect(0,0,STAGE_WIDTH, STAGE_HEIGHT);
}

ctx.fillStyle = 'orange';
ctx.strokeStyle = 'purple';
ctx.rect(100,100,200,200);
ctx.fill();
ctx.stroke();


ctx.fillStyle = 'brown';
ctx.arc(200,200,50, 0, Math.PI*2);
ctx.fill();

ctx.fillStyle = '#000000';

ctx.font = '30px Comic Sans MS';
ctx.fillText('Hello World!', 115, 350);

//clear();

ctx.beginPath();
ctx.moveTo(150,150);
ctx.lineTo(200, 200);
ctx.lineTo(150, 250);
ctx.closePath();

ctx.fill();


var img = new Image();
img.src = '/img/plumber.png';

img.onload = function() {
    ctx.drawImage(img, 0,0,STAGE_WIDTH, STAGE_HEIGHT);
};
