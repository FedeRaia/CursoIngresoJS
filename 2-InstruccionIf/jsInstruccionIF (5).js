function mostrar()
{
//tomo la edad  
var Edad=document.getElementById("edad").value;
laEdad=parseInt(Edad);

if(laEdad<13 || laEdad>17)
    {
        alert("No es adolescente");
    }

}//FIN DE LA FUNCIÓN