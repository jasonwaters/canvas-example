'use strict';

var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
var STAGE_WIDTH = canvas.width,
    STAGE_HEIGHT = canvas.height;

function clear() {
    ctx.clearRect(0,0,STAGE_WIDTH, STAGE_HEIGHT);
}

function drawCircle(x, y, r, color) {
    if (color) {
        ctx.fillStyle = color;
    }

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.closePath();

    ctx.fill();
}

function getRandom(range) {
    var num = Math.floor(Math.random()*range) + 1; // this will get a number between 1 and range;
    num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
    return num;
}

function Ball() {
    this.radius = (Math.random() * 10) + 2;

    this.x = Math.floor(Math.random() * (STAGE_WIDTH-this.radius*2));
    this.y = Math.floor(Math.random() * (STAGE_HEIGHT-this.radius*2));

    this.xVel = getRandom(4);
    this.yVel = getRandom(4);

    this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
}

Ball.prototype.update = function() {
    if(this.x + this.radius + this.xVel > STAGE_WIDTH) {
        this.xVel = this.xVel * -1;
    }

    if(this.y + this.radius + this.yVel > STAGE_HEIGHT) {
        this.yVel = this.yVel * -1;
    }

    if(this.x - this.radius - this.yVel < 0) {
        this.xVel = Math.abs(this.xVel);
    }

    if(this.y - this.radius -  this.yVel < 0) {
        this.yVel = Math.abs(this.yVel);
    }

    this.x += this.xVel;
    this.y += this.yVel;
};

Ball.prototype.render = function() {
    drawCircle(this.x, this.y, this.radius, this.color);
};


var actors = [];
for(var i=0;i<100;i++) {
    actors.push(new Ball());
}


function draw() {
    clear();

    actors.forEach(function(actor) {
        actor.update();
        actor.render();
    });


    window.requestAnimationFrame(draw);
}


//setInterval(draw, 1);

window.requestAnimationFrame(draw);
