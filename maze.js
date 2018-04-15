var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(0 , 0, 200, 200);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

//circle
ctx.beginPath();
// (updown, left/right, size , notsure, but 0 is full circle)
ctx.arc(160, 100, 50, 0, Math.PI*2, false);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
