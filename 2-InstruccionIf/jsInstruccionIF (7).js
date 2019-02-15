function mostrar()
{
//tomo la edad  
var Edad=document.getElementById("edad").value;
var estado=document.getElementById("estadoCivil").value;
var e=parseInt(Edad);

if(e<18 && estado!="Soltero")
    {
    
        alert("Es muy pequeño para NO estar soltero");
    }
	


}//FIN DE LA FUNCIÓN