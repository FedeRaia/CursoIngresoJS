function mostrar()
{

	var contador=0, sumaNeg=0, sumaPos=0, cantPos=0, cantNeg=0, cantCeros=0, cantPar=0, promPos, proNeg, dif;
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
				
			}
		}

alert("La suma de negativos es "+sumaNeg+//
" ,la suma de positivos es "+sumaPos+//
" la cantidad de positivos "+cantPos+" la cantidad de negativos es "+cantNeg);


}//FIN DE LA FUNCIÓN