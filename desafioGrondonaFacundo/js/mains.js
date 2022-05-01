let radio = 10;
let xAleatorio;
let yAleatorio;
let xAleatorio1;
let yAleatorio2;
let x = 0;
let vidas = 3;
let puntos = 0;

let juagadores = [{
	id: 1,
	nombre: "Facundo",
	Nivel:"Nivel 2",
	puntos: 1500,
	
},
{
	id: 2,
	nombre: "Mateo",
	Nivel:"Nivel 1",
	puntos: 500,
	
},
{
	id: 3,
	nombre: "Tobias",
	Nivel:"Nivel 1",
	puntos: 700,
	
}

];
console.table(juagadores);
localStorage.clear();
sessionStorage.clear();
sessionStorage.setItem('bienvenida', '¡Lautaro!');

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)};

//Almacenar jugador por jugador
for (const lista of juagadores) {
    guardarLocal(lista.id, JSON.stringify(lista));
}

guardarLocal("lista", JSON.stringify(juagadores));

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}


// alert("Bienvenido!!!! Estas perparado para Jugar?");


let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 600);


function disenharCircunferencia(x, y, radio, color) {
	pincel.fillStyle = color;
	pincel.beginPath();
	pincel.arc(x, y, radio, 0, 2 * Math.PI);
	pincel.fill();
}

function limpiarPantalla() {

	pincel.clearRect(0, 0, 600, 600);
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
	yAleatorio = sortearPosicion(600);
	disenharObjetivo(xAleatorio, yAleatorio);
	x++;
	xAleatorio1 = sortearPosicion(600);
	yAleatorio1 = sortearPosicion(600);
	disenharObjetivo(xAleatorio1, yAleatorio1);
	x++;
}

let eleccion = 1000;
console.log(eleccion);

let nivel = document.querySelector("#nivilElegido");
nivel.addEventListener("change", ()=>{
	let nivel = document.querySelector("#nivilElegido").value;
   if (nivel == 1) {
	   eleccion = 1000;
	   console.log(eleccion)
   }
   if (nivel == 2) {
	   eleccion = 2000;
	   console.log(eleccion)
   }
   if (nivel == 3) {
	   eleccion = 3000;
	   console.log(eleccion)
   }
}); 


let intervalo = setInterval(actualizarPantalla, eleccion);

function disparar(evento) {

	let x = evento.pageX - pantalla.offsetLeft;
	let y = evento.pageY - pantalla.offsetTop;
	let x1 = evento.pageX - pantalla.offsetLeft;
	let y1 = evento.pageY - pantalla.offsetTop;

	if (vidas == 0) {
		console.log("No te quedan vidas");
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: `No te quedan vidas, pulsa el boton de jugar de nuevo`,
		  });
		  focus.jugarotravez;
		  clearInterval(intervalo);
		
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
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: `Tienes ${vidas} de vida`,
		  });


	}

}

pantalla.onclick = disparar;

let jugarotravez = document.getElementById("otraVez");
	jugarotravez.onclick = (event) => {
	event.preventDefault();

	let nombreJugador = document.querySelector("#inputnombre").value;
	let nivelelegido = document.querySelector("#nivilElegido").value;
	let puntoTotales = document.querySelector("#pts").textContent;
	
	console.log(nombreJugador);
	console.log(nivelelegido);
	console.log(puntoTotales);

	let juagador = {
		nombre: nombreJugador,
		nivel: nivelelegido,
		puntos: puntoTotales 	
	}
	let listaJugadores =document.querySelector("#listaResultados");
	ultimojugador = document.createElement("tr");
	listaJugadores.appendChild(ultimojugador);
	ultimojugador.appendChild(construirTd(juagador.nombre));
	ultimojugador.appendChild(construirTd(`Nivel ` + juagador.nivel));
	ultimojugador.appendChild(construirTd(juagador.puntos));

	vidas =  3;
	puntos = 0;
	document.querySelector(`#pts`).innerHTML = puntos;
	document.querySelector(`#vS`).innerHTML = vidas;
	console.log(`Vuelves a tener ${vidas} intentos`);
	Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Vuelves a tener ${vidas} intentos`,
        showConfirmButton: false,
        timer: 2500
      });

	  setInterval(actualizarPantalla, eleccion);
	  console.log(eleccion);
	}



function construirTd(dato){
    var td = document.createElement("td");
    td.textContent = dato;
    return td;
}
    
      



	