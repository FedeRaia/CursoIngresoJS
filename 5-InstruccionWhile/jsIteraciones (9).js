function mostrar()
{

	var contador=0;
	var max;
	var min;
	var bandera=true;
	var respuesta=true;
	// declarar variables

	while(respuesta==true)
		{
			do
				{
					num=prompt("Ingrese numero.");
					num=parseInt(num);
					respuesta=confirm("Continuar?");
					contador++;
				}
			while(isNaN(num))
				{
					if (bandera)
						{
							bandera=false;
							max=num;
							min=num;
						}
					else
						{
							if(num>max)
								{
									max=num;
								}
							if (num<min)
								{
									min=num;
								}
						}
				}
		}

document.getElementById("maximo").value=max;
document.getElementById("minimo").value=min;
}//FIN DE LA FUNCIÓN