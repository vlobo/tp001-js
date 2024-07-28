/*

11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210




Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.


*/

const num1 = parseInt(prompt("Escribe un número"))
console.log(num1)

if(num1 % 2 === 0){


    {
        document.write("El número si es divisible por 2<br>")
    } 
if(num1 % 3 === 0)
    {
        document.write("El número si es divisible por 3<br>")
    } 
if(num1 % 5 === 0)
        {
            document.write("El número si es divisible por 5<br>")
        }   
if(num1 % 7 === 0)
         {
             document.write("El número si es divisible por 7<br>")
         } 


}


else  {

    document.write(`el número ${num1} no es divisible por 2,3,5 y 7`)
   }