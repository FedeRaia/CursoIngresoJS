function mostrar()
{
	var contador=0;
	var acumulador=0;
	var suma=0;

	while(contador<=4)
		{
			contador++;
			suma=prompt("Ingrese numero:");
			suma=parseInt(suma);
			acumulador=(suma+=acumulador);
		}

	
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN