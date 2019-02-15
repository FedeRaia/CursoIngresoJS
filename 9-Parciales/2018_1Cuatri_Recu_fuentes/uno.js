
function mostrar()
{
    var m1=prompt("Ingrese nombre de mascota 1");
    var m2=prompt("Ingrese nombre de mascota 2");

    var p1=prompt("Peso de mascota 1");
    var p2=prompt("Peso mascota 2");

    peso1=parseInt(p1);
    peso2=parseInt(p2);

    suma=(peso1+peso2);
    alert("Tenès 2 mascotas "+m1+" y "+m2+" que pesan "+peso1+" y "+peso2+" kilos "+", la suma de los kilos es "+suma);
}
