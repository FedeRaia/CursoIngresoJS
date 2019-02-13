/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo=document.getElementById("Largo").value;
var ancho=document.getElementById("Ancho").value;

var lar=parseInt(largo);
var anc=parseInt(ancho);

cantAlambre=(((lar*2)+(anc*2))*3);
alert("La cantidad de alambre es: "+cantAlambre);
}
function Circulo () 
{
var radio=document.getElementById("Radio").value;
var circ=parseInt(radio);

var alambreCirc=(3,14*(circ*circ));
alert("Cantidad de alambre para circular: "+alambreCirc);
}
function Materiales () 
{
var largo=document.getElementById("Largo").value;
var ancho=document.getElementById("Ancho").value;
    
var lar=parseInt(largo);
var anc=parseInt(ancho);

var volumen=(lar*anc);
alert("Cantidad de bolsas de cemento: "+volumen*2);
alert("Cantidad de bolsas de cal: "+volumen*3);
}