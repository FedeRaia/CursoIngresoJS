function mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");

	num=parseInt(numero);

	while (num>=0 && num<=9)
		{
			document.getElementById("Numero").value=num;
			break;
		}


}//FIN DE LA FUNCIÓN