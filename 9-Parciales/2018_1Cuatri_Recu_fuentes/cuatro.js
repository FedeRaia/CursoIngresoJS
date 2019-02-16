function mostrar()
{
    var cant=prompt("Escriba la cantidad de libros");
    var prec=prompt("Escriba el total del precio de ellos");
    var tarj=prompt("Es pago con tarjeta?");

    cantidad=parseInt(cant);
    precio=parseInt(prec);

    if(cantidad>2)
        {
            desc10=(precio*0,9);
            alert("El pago total serà "+desc10);
        }
    if(desc10>2000)
        {
            desc15=(desc10*0,85);
            alert("El pago total serà "+desc15);
        }
    if(tarj=="si")
        {
            total=(desc15*1,10);
            alert("El pago total serà "+total);
        }
}