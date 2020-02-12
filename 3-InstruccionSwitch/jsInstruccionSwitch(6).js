function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
switch (laHora) {
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
    alert("Es de mañana");
    break;
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
    alert("Es de tarde");
    case "19":
    case "20":
    case "21":
    


    default("la hora no existe");
}


}//FIN DE LA FUNCIÓN