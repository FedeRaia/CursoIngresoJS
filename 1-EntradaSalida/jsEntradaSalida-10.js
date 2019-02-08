/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var precio=document.getElementById("importe").value
    var a=parseInt(precio);
    var b=a*25/100;
    document.getElementById("resultado").value=b;
}
