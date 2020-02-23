function porcentajen(e) {
	// body...por parte del teclado
	var teclado = (document.all)?e.keyCode:e.which;
	if (teclado == 8) return true;
	var patron = /[0-9]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);
}

function porcent() {
	// body...
	var valor= document.formulario5.cantidadmujeres.value;
	alert(valor + " mujeres");
	var cantidadmujeres = parseInt(valor);

	var valor= document.formulario5.cantidadhombres.value;
	alert(valor+ " hombres");
	var cantidadhombres = parseInt(valor);

	var cantidadtotal = cantidadmujeres + cantidadhombres;
	var porcentaje_mujeres = (cantidadmujeres/cantidadtotal)*100
	var porcentaje_hombres = (cantidadhombres/cantidadtotal)*100

	document.formulario5.porcentajemi.value = porcentaje_mujeres+"%";
	document.formulario5.porcentajehi.value = porcentaje_hombres+"%";
}