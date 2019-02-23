function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var rta=true;

	while (rta==true)
		{
			numero=prompt("Ingrese numero.");
			numero=parseInt(numero);
			if (numero>0)
				{
					positivo=(numero+=numero);
				}
			if (numero<0)
				{
					negativo=(numero*=numero);
				}
			rta=confirm("Continuar?");
			contador++;
		}
	
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN