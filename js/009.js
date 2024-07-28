/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:



input: Hola mundo
Output: oauo
*/

let palabra = prompt("escribe una palabra de 4 caracteres")
console.log(palabra)
console.log(palabra.charAt(5))

if(palabra.length < 5){

document.write("la palabra: " + palabra + " tiene las siguientes vocales<br>")

if(palabra.charAt(0) === "a" || palabra.charAt(0) === "e" || palabra.charAt(0) === "i" || palabra.charAt(0) === "o" || palabra.charAt(0) === "u"){
    document.write(palabra.charAt(0))

}

if(palabra.charAt(1) === "a" || palabra.charAt(1) === "e" || palabra.charAt(1) === "i" || palabra.charAt(1) === "o" || palabra.charAt(1) === "u"){
    document.write(palabra.charAt(1))

}

if(palabra.charAt(2) === "a" || palabra.charAt(2) === "e" || palabra.charAt(2) === "i" || palabra.charAt(2) === "o" || palabra.charAt(2) === "u"){
    document.write(palabra.charAt(2))

}

if(palabra.charAt(3) === "a" || palabra.charAt(3) === "e" || palabra.charAt(3) === "i" || palabra.charAt(3) === "o" || palabra.charAt(3) === "u"){
    document.write(palabra.charAt(3))

}
}
else{
    document.write("Escribe unicamente una palabra de 4 caracteres")
}