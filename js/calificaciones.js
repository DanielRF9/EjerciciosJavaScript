function calificacionesn(e) {
	// body...por parte del teclado
	var teclado = (document.all)?e.keyCode:e.which;
	if (teclado == 8) return true;
	var patron = /[0-9\d.]/; 
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);

}

function calif() {
	// body...
	var valor= document.formulario4.parcial1.value;
	alert("Obtuviste en el primer parcial un total de: " + valor + "puntos de 100");
	var parcial1 = parseInt(valor);

	var valor= document.formulario4.parcial2.value;
	alert("Obtuviste en el segundo parcial un total de: " + valor + "puntos de 100");
	var parcial2 = parseInt(valor);

	var valor= document.formulario4.parcial3.value;
	alert("Obtuviste en el tercer parcial un total de: " + valor + "puntos de 100");
	var parcial3 = parseInt(valor);

	var valor= document.formulario4.examen.value;
	alert("Obtuviste en el examen un total de: " + valor + "puntos de 100");
	var examen = parseInt(valor);

	var valor= document.formulario4.trabajo.value;
	alert("Obtuviste en el tranajo final un total de: " + valor + "puntos de 100");
	var trabajo = parseInt(valor);

	var parcialt = ((parcial1+parcial2+parcial3)*55)/300 ;
	var examf = ((examen)*30)/100;
	var trabajot= ((trabajo)*15)/100;
	var promedio = (parcialt + examf + trabajot) ;
	document.formulario4.promedio.value = promedio;
}