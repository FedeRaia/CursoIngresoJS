/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo=document.getElementById("sueldo").value;
    var redondeo=parseInt(sueldo);

    elaumento=redondeo*100/10+redondeo;
    
    document.getElementById("resultado").value=elaumento;
}
