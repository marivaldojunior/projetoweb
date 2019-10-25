var canvas = document.getElementById("logo");
var ctx = canvas.getContext("2d");
/*Cor*/
var grd = ctx.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0, "#9A4FCF");
grd.addColorStop(1, "#745FB5");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 140);

/*F*/
ctx.beginPath();
ctx.moveTo(49, 33);
ctx.quadraticCurveTo(19, 30, 16, 57);
ctx.stroke();

ctx.moveTo(49, 33);
ctx.quadraticCurveTo(51, 38, 45, 39);
ctx.stroke();

ctx.moveTo(45, 39);

/*R*/

/*I*/

/*E*/

/*N*/

/*D*/

/*S*/