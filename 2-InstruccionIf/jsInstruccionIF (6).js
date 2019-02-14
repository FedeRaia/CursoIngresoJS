function mostrar()
{
//tomo la edad  
var Edad=document.getElementById("edad").value;
laEdad=parseInt(Edad);

if(laEdad<13)
    {
        alert("Es un niño");
    }
if(laEdad>=13 && laEdad<=17)
    {
        alert("Es adolescente");
    }
if(laEdad>=18)
    {
        alert("Es mayor de edad");
    }


}//FIN DE LA FUNCIÓN