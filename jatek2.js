console.log("Hello");


var canvas= document.getElementById('canvas');
var img = document.createElement(img);

console.log(canvas);
console.log(img);
img.src='girl.png';
var ctx= canvas.getContext('2d');
var x=0;
var y=0;

var endx=3;
var endy=2;

setInterval(function(){
    x+=endx;
    y+=endy;
    if (y>=canvas.height-100 || y<=0){
        endy=-endy;

    }
    if (x>=canvas.width-200 || x<=0){
        endx=-endx;

    }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='#ff0000';
    ctx.fillRect(x,y,200,100);
},100/60);
/*
setInterval(function(){
    console.log(Math.random());
},1000/60);

ctx.fillStyle='#ff0000';
ctx.fillRect(10,10,200,100);
*/
