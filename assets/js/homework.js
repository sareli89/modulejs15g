/** 
 * Ejercicio 1
 * imprimir en consola todos los numeros pares entre 1 y 100
 * -> 2
 * -> 4
 * -> 100
i = 2
while (i <= 100) {
    console.log(i)
    i += 2
}

for (i=0; i <= 100; i+=2) {    
    console.log(i)
    }
*/



/**
 * Ejercicio 2
 * Pedir al usuario un string
 * Invertir el orden e imprimir en consola
 * Entrada: "reverse"
 * Salida: -> esrever
 * hint: https://www.w3schools.com/jsref/jsref_length_string.asp
 * 
 let firstString = prompt('Escriba una palabra u oracion')
let reverseString = ""

for (i = firstString.length - 1; i >= 0; i--){
    reverseString += firstString[i]
} 

console.log(reverseString)
 */





/**
 * Ejercicio 3 
 * Declarar un string de al menos 2 palabras
 * Imprimir en consola el string separado por guiones en cada palabra
 * "hola koders"
 * "hola-koders"
 * hint: https://www.w3schools.com/jsref/jsref_replace.asp
  
let dashedWord = prompt('Ingrese una oracion de al menos 2 palabras').trim().replace(/ /g,"-")
console.log(dashedWord)
 */



/**
 * Ejercicio 4
 * Declarar un string con un correo electrónico
 * Enmascarar con "*" el bloque del usuario
 * "jorgec@kodemia.mx"
 * "*****@kodemia.mx"
 * 
 * hint: https://www.w3schools.com/jsref/jsref_slice_string.asp
 * hint: https://www.w3schools.com/jsref/jsref_indexof.asp
 * 
 * const word = prompt('Dame una oración').trim().toLowerCase()
let wordCapitalize = ''
// en una galaxia
for(i = 0; i < word.length; i++){
    if(word[i] == ' '){
        wordCapitalize += ' ' + word[i + 1].toUpperCase()
        i = i + 1
    } else {
        wordCapitalize = wordCapitalize + word[i]
    }
}
 */

