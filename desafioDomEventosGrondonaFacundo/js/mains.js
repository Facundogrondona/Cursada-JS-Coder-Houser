let radio = 10;
let xAleatorio;
let yAleatorio;
let xAleatorio1;
let yAleatorio2;
let x = 0;
let vidas = 3;
let puntos = 0;

// alert("Bienvenido!!!! Estas perparado para Jugar?");


let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);


function disenharCircunferencia(x, y, radio, color) {
	pincel.fillStyle = color;
	pincel.beginPath();
	pincel.arc(x, y, radio, 0, 2 * Math.PI);
	pincel.fill();
}

function limpiarPantalla() {

	pincel.clearRect(0, 0, 600, 400);
}

function disenharObjetivo(x, y, x1, y1) {

	disenharCircunferencia(x, y, radio + 20, "red");
	disenharCircunferencia(x, y, radio + 10, "white");
	disenharCircunferencia(x, y, radio, "red");

}


function sortearPosicion(maximo) {

	return Math.floor(Math.random() * maximo);

}


function actualizarPantalla() {

	limpiarPantalla();
	xAleatorio = sortearPosicion(600);
	yAleatorio = sortearPosicion(400);
	disenharObjetivo(xAleatorio, yAleatorio);
	x++;
	xAleatorio1 = sortearPosicion(600);
	yAleatorio1 = sortearPosicion(400);
	disenharObjetivo(xAleatorio1, yAleatorio1);
	x++;
}

setInterval(actualizarPantalla, 1000);

function disparar(evento) {

	let x = evento.pageX - pantalla.offsetLeft;
	let y = evento.pageY - pantalla.offsetTop;
	let x1 = evento.pageX - pantalla.offsetLeft;
	let y1 = evento.pageY - pantalla.offsetTop;

	if (vidas == 0) {
		console.log("No te quedan vidas");
		focus.jugarotravez;
	} else if ((x < xAleatorio + radio) &&
		(x > xAleatorio - radio) &&
		(y < yAleatorio + radio) &&
		(y > yAleatorio - radio) ||
		(x1 < xAleatorio1 + radio) &&
		(x1 > xAleatorio1 - radio) &&
		(y1 < yAleatorio1 + radio) &&
		(y1 > yAleatorio1 - radio)) {

		puntos = puntos + 100;
		document.querySelector(`#pts`).innerHTML = puntos;
		console.log(puntos);
		console.log("Tiro Certero");

	} else {

		console.log("Perdiste una vida");
		vidas = vidas - 1;
		document.querySelector(`#vS`).innerHTML = vidas;
		console.log(`Te quedan ${vidas} intentos`);


	}

}

pantalla.onclick = disparar;

let jugarotravez = document.getElementById("otraVez");
jugarotravez.onclick = () => {
	vidas =  3;
	puntos = 0;
	document.querySelector(`#pts`).innerHTML = puntos;
	document.querySelector(`#vS`).innerHTML = vidas;
	console.log(`Vuelves a tener ${vidas} intentos`);
}
	
	

	
    
        




	