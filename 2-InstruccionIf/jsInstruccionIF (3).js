function mostrar()
{
//tomo la edad  
var laEdad=document.getElementById("edad").value;
Edad=parseInt(laEdad);
if(Edad<18)
    {
        alert("Es menor de edad");
    }
    else
    {
        alert("Es mayor de edad");
    }


}//FIN DE LA FUNCIÓN