/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1=document.getElementById("numeroUno").value
    var num2=document.getElementById("numeroDos").value
    var a=parseInt(num1);
    var b=parseInt(num2);
    alert(a+b)
}

function restar()
{
    var num1=document.getElementById("numeroUno").value
    var num2=document.getElementById("numeroDos").value
    var a=parseInt(num1);
    var b=parseInt(num2);
    alert(a-b);
}

function multiplicar()
{ 
    var num1=document.getElementById("numeroUno").value
    var num2=document.getElementById("numeroDos").value
    var a=parseInt(num1);
    var b=parseInt(num2);
    alert(a*b);
}

function dividir()
{
    var num1=document.getElementById("numeroUno").value
    var num2=document.getElementById("numeroDos").value
    var a=parseInt(num1);
    var b=parseInt(num2);
    alert(a/b);
}

