function mostrar()
{
    var amigos=prompt("Ingrese cantidad de comenzales.");
    var prec=document.getElementById("elPrecioFinal").value;
    
    am=parseInt(amigos);
    p=parseInt(prec);
    
    cadauno=(p/am);
    coniva=(((p*21)/100)+p);
    diez=(((coniva*10)/100)+coniva);

    alert("cada uno debe pagar "+cadauno+ ", el precio total mas iva es "+coniva+", el precio mas el 10% es "+diez);
}
