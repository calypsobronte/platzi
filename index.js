var platzi = document.getElementById('Platzi');
var lienzo = platzi.getContext('2d');
var green = "#64DD17";

function platziLogo(color, stroke) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = stroke;
  lienzo.moveTo(280, 320);
	lienzo.lineTo(380, 220);
	lienzo.arcTo(400, 200, 380, 180, 30);
	lienzo.lineTo(270, 70);
	lienzo.arcTo(250, 50, 230, 70, 30);
	lienzo.lineTo(70, 230);
	lienzo.arcTo(50, 250, 70, 270, 30);
	lienzo.lineTo(210, 410);
	lienzo.arcTo(235, 435, 260, 410, 30);
	lienzo.lineTo(315, 355);
	lienzo.stroke();
	lienzo.closePath();
}

platziLogo(green, 50);
