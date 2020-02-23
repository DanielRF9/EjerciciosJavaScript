function descuenton(e) {
	// body...por parte del teclado
	var teclado = (document.all)?e.keyCode:e.which;
	if (teclado == 8) return true;
	var patron = /[0-9\d.]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);
}

function desc() {
	// body...
	var valor= document.formulario3.cantidad.value;
	alert(valor);
	var cantidad = parseInt(valor);
	var descuento = 0.07*cantidad;
	var total = cantidad - descuento ;
	document.formulario3.desci.value = "$" + descuento;
	document.formulario3.total.value = "$" + total;
}