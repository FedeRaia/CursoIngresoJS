/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahr=document.getElementById("Temperatura").value;
    var f=parseInt(fahr);
    aCent=((f-32)/1.8);
    alert(fahr+" grados Fahreheit son "+aCent+" grados centigrados.");
}

function CentigradosFahrenheit () 
{
    var cent=document.getElementById("Temperatura").value;
    var c=parseInt(cent);
    aFahr=((c+32)*1.8);
    alert(cent+" grados Centigrados son "+aFahr+" grados farenhet");
}
