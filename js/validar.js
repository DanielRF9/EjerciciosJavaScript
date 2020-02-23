/* Vamos a ver otro bondad de js que es utilizar eventos y expresiones regulares*/


function validarn(e) {
	// body...por parte del teclado
	var teclado = (document.all)?e.keyCode:e.which;
	if (teclado == 8) return true;
	var patron = /[0-9\d.]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);
}

function interes() {
	// body...
	var valor= document.formulario.cantidad.value;
	alert(valor);
	var cantidad = parseInt(valor);
	var interes = 0.089*cantidad;
	var total = cantidad + interes;
	document.formulario.interesi.value = "$" + interes;
	document.formulario.sueldo.value = "$" + total;
}