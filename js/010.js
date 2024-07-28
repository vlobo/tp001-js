/*

10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20


Output: El 20 es divisible por 2.

*/
 // Escribe un programa que pida un número

const num1 = parseInt(prompt("Escribe un número"))
console.log(num1)

if(num1 % 2 === 0)
    {
        document.write("El número si es divisible por 2")
    } 
else if(num1 % 3 === 0)
    {
        document.write("El número si es divisible por 3")
    } 
else if(num1 % 5 === 0)
        {
            document.write("El número si es divisible por 5")
        }   
else if(num1 % 7 === 0)
         {
             document.write("El número si es divisible por 7")
         } 

else  {

  document.write(`el número ${num1} no es divisible por 2,3,5 y 7`)
 }