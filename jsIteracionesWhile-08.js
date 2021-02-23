/*

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
let contador = 0;
let respuesta = 0;
let sumaPositivos = 0;
let multiplicacionNegativos = 0;
let numeroIngresado = 0;
let acumulardosNeg = [];
let acumnuladorPos = [];
let terminarCiclo = "";


do {
	numeroIngresado = parseInt(prompt('ingresa un numnero'));
	if (numeroIngresado < 0) {
		acumulardosNeg.push(numeroIngresado);

	} else if (numeroIngresado >= 0) {

		acumnuladorPos.push(numeroIngresado);
	} else {
		numeroIngresado = parseInt(prompt('eL caracter que ingresaste no es un numero, inetenta de nuevo'))
	}

	terminarCiclo = prompt('Quieres ingresar otro numero? s/n')

} while (terminarCiclo == 's');

console.log(acumnuladorPos)
sumaPositivos = acumnuladorPos.reduce((a, b) => a + b);
multiplicacionNegativos = acumulardosNeg.reduce((a, b) => a * b);


console.log(sumaPositivos);


function mostrar() {

	document.getElementById('txtIdSuma').value = sumaPositivos;
	document.getElementById('txtIdProducto').value = multiplicacionNegativos;

}