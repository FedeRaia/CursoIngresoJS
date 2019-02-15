function mostrar()
{
var a=prompt("Ingrese precio.");
var b=prompt("Ingrese descuento.");

var precio=parseInt(a);
var descuento=parseInt(b);

var cálculo=(a/100*b);
var final=(a-cálculo);

document.getElementById("elPrecioFinal").value=final;
}
