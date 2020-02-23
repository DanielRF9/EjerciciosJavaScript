function sueldon(e) {
	// body...por parte del teclado
	var teclado = (document.all)?e.keyCode:e.which;
	if (teclado == 8) return true;
	var patron =  /[0-9\d.]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);

}

function sueld() {
	// body...
	var valor= document.formulario2.sueldobase.value;
	alert("Sueldo base: $" + valor);
	var sueldobase = parseInt(valor);

	var valor= document.formulario2.venta1.value;
	alert("Venta 1: $"+valor);
	var venta1 = parseInt(valor);

	var valor= document.formulario2.venta2.value;
	alert("Venta 2: $ "+valor);
	var venta2 = parseInt(valor);

	var valor= document.formulario2.venta3.value;
	alert("Venta 3: $ "+valor);
	var venta3 = parseInt(valor);

	var valor= document.formulario2.venta4.value;
	alert("Venta 4: $ "+valor);
	var venta4 = parseInt(valor);

	var valor= document.formulario2.venta5.value;
	alert("Venta 5: $ "+valor);
	var venta5 = parseInt(valor);

	var v1 = venta1*0.138;
	var v2 = venta2*0.138;
	var v3 = venta3*0.138;
	var v4 = venta4*0.138;
	var v5 = venta5*0.138;
	var vt1= venta1+v1;
	var vt2= venta2+v2;
	var vt3= venta3+v3;
	var vt4= venta4+v4;
	var vt5= venta5+v5;
	var vtf= vt1+vt2+vt3+vt4+vt5;

	var sueldofinal= vtf+sueldobase
	
	document.formulario2.sueldofinal.value = "$ "+ sueldofinal;
}