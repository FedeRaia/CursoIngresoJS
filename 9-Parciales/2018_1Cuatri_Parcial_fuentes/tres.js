function mostrar()
{
    var precio=prompt("ingrese precio");
    var descuento=prompt("ingrese descuento");
    var a=parseInt(precio);
    var b=parseInt(descuento);
    var c=(a*b/100);
    document.getElementById("elPrecioFinal").value=a-c;
}
