/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var prec1=document.getElementById("PrecioUno").value;
    var prec2=document.getElementById("PrecioDos").value;
    var prec3=document.getElementById("PrecioTres").value;
    p1=parseInt(prec1);
    p2=parseInt(prec2);
    p3=parseInt(prec3);
    suma=(p1+p2+p3);
    alert("El total de la suma es: "+suma);
}
function Promedio () 
{
    var prec1=document.getElementById("PrecioUno").value;
    var prec2=document.getElementById("PrecioDos").value;
    var prec3=document.getElementById("PrecioTres").value;
    p1=parseInt(prec1);
    p2=parseInt(prec2);
    p3=parseInt(prec3);
    promedio=((p1+p2+p3)/3);
	alert("El promedio es: "+promedio);
}
function PrecioFinal () 
{
    var prec1=document.getElementById("PrecioUno").value;
    var prec2=document.getElementById("PrecioDos").value;
    var prec3=document.getElementById("PrecioTres").value;
    p1=parseInt(prec1);
    p2=parseInt(prec2);
    p3=parseInt(prec3);
    iva=((p1+p2+p3)/100*21);
    finaliva=(iva+(p1+p2+p3));
	alert("La suma mas el IVA es: "+finaliva);
}