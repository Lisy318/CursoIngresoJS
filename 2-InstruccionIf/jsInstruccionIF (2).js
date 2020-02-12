function mostrar()
{
//tomo la edad  
var mes
var mesDelAño = document.getElementById("mes").value;
switch (mesDelAño){ 
case "Julio":
case "Agosto":
alert("Abrigate que hace frio")
break;
case "Enero":
case "Febrero":
case "Marzo":
case "Abril":
case "Mayo":
case "Junio":
alert("falta para el invierno");
break;
default:
alert("Ya pasamos el frio,ahora el calor");
}

}//FIN DE LA FUNCIÓN