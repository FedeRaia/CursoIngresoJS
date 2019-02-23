function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;

	while (respuesta==true)
		{
			acumulador=prompt("Ingrese numero");
			acumulador=parseInt(acumulador);
			respuesta=confirm("Desea continuar?");
			contador++;
			acumulador=(acumulador+=acumulador);
		}
	if (respuesta==false)
		{
			
		}
		

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN