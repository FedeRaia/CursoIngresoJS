function mostrar()
{

var clave = prompt("ingrese el número clave.");

var intentos=0;

    if (clave!="utn750")
        {
            while (intentos<2)
                {
                    prompt("Clave incorrecta, ingrese nuevamente.", "Aqui.");
                    intentos=intentos+1;
                }
        }
    if (intentos==2)
        {
            alert("Larguese de aqui intruso!!!");
        }
    if (clave=="utn750")
        {
            alert("Clave correcta.");
        }


}//FIN DE LA FUNCIÓN
