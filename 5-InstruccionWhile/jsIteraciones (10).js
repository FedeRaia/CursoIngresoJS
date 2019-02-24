function mostrar()
{

	var contador=0, sumaPos=0, sumaNeg=0, cantPos=0, cantNeg=0, cantCeros=0, cantPar=0, promPos, promNeg, dif;
	//declarar contadores y variables 
	
	var respuesta=true;

	while(respuesta==true)
		{
			do
			{
				num=prompt("Ingrese numeros.");
				num=parseInt(num);
				respuesta=confirm("Continuar?");
				contador++
			}
		
		while(isNaN(num))
			{
				if(num<0)
					{
						sumaNeg=(num+=num);
						cantNeg++;
					}
				if(num>0)
					{
						sumaPos=(num+=num);
						cantPos++;
					}
				if(num==0)
					{
						cantCeros++;
					}
				if(num%2==0)
					{
						cantPar++;
					}
				if(respuesta==false)
				{
					
				}	
			promNeg=(cantNeg/contador);
			promPos=(cantPos/contador);
			dif=(sumaPos+sumaNeg);
			}	
		}

	
	document.write("La suma de negativos es "+sumaNeg+//
" ,la suma de positivos es "+sumaPos+//
" la cantidad de positivos es "+cantPos+//
" la cantidad de negativos es "+cantNeg+//
" la cantidad de ceros es "+cantCeros+//
" la cantidad de numeros pares es "+cantPar+//
" el promedio de positivos es "+promPos+//
" el promedio de negativos es "+promNeg+//
" la diferencia de positivos y negativos es "+dif);


}//FIN DE LA FUNCIÓN