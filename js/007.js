/*

Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

*/

let numero1 = parseInt(prompt("Escribi el primer número"))
let numero2 = parseInt(prompt("Escribi el segundo número"))
let numero3 = parseInt(prompt("Escribi el tercer número"))


    if(numero1 > numero2 && numero1 > numero3)
        {

        document.write("el primer número (" + numero1 +") es mayor que número 2 y 3" )
    }

    else if

    (numero2 > numero1 && numero2 > numero3)
    {

        document.write("el segundo número (" + numero2 +") es mayor que número 1 y 3" )
    }

        
   
   else if

    (numero3 > numero1 && numero3 > numero2){

        document.write("el tercero número (" + numero3 +") es mayor que número 1 y 2" )
    }