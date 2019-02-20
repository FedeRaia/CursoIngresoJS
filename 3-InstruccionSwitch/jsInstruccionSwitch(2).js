function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

    switch(mesDelAño)
        {
            case "Julio":
            case "Agosto":
                {
                    alert("Abrigate que hace frio.");
                    break;
                }
            case "Septiembre":
                {
                    alert("Ya pasò el invierno, ahora el calor!");
                    break;
                }
            default:
                {
                    alert("Falta para el invierno.");
                    break;
                }
        }
}//FIN DE LA FUNCIÓN