function mostrar()
{
    //tomo la edad  
    var mensaje;
    var mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño)
    {
        case"Enero":
        alert("que comiences bien el año")
        break;  
        case "Marzo":
        alert("a clases")
        break;
        case "Julio":
        alert("se vienen las vacaciones")
        case"Diciembre":
        alert("felices fiestas")
        break;
    }

}