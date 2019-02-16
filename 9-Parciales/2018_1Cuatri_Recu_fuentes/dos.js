function mostrar()
{
    var dinero=document.getElementById("elNombre").value;
    var descuento=document.getElementById("laLocalidad").value;

    din=parseInt(dinero);
    desc=parseInt(descuento);

    total=((din/100)*desc);

    alert("Tu compra es de "+din+" y tenes un descuento de "+desc);
}
