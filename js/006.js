/*
6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

*/

const numero1 = parseInt(prompt("Ïngreso el primer Número"))

const numero2 = parseInt(prompt("Ïngreso el Segundo Número"))

if (numero1 > numero2){

    document.write("El " + numero1 + " es el número más grande")
}
else

    document.write("El " + numero1 + " es el número menor")