function mostrar()
{
    var cant=prompt("Escriba la cantidad de libros");
    var prec=prompt("Escriba el total del precio de ellos");
    var tarj=confirm("Es pago con tarjeta?");

    cantidad=parseInt(cant);
    precio=parseInt(prec);

    if(cantidad>2)
        {
            precio=(precio*0.9);
        }
    if(precio>2000)
        {
            precio=(precio*0.85);
        }
    if(tarj==true)
        {
            preciototal=(precio*1.10);

        }

        alert("El pago total serà "+precio);
}