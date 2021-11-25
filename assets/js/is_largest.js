/* 
Estar en la rama de la clase
Crear el archivo is_largest.js
Pedir al usuario que ingrese 3 números
Imprimir en consola el mayor

Realizar un diagrama (si es necesario)
*/

let number_one = parseInt(prompt('Escriba su primer numero:'))
let number_two = parseInt(prompt('Escribasu segundo numero:'))
let number_three = parseInt(prompt('Escriba su tercer numero:'))

if (!isNaN(number_one && number_two &&number_three)) {
    if (number_one === number_two && number_one === number_three) {
        console.log('Los numeros son iguales')
    } else if (number_one > number_two && number_one > number_three) {
        console.log(`El numero ${number_one} es el mayor`)
    } else if (number_two > number_one && number_two > number_three) {
        console.log(`El numero ${number_two} es el mayor`)
    } else {
        console.log(`El numero ${number_three} es el mayor`)
    } 
}else {
    console.error("Alguno de los datos ingresados no son numeros")
}