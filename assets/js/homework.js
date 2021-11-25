
/**
 * 
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

let number = parseInt(prompt('Ingresa un numero entre el 1 y 100: '))

number % 2 ==0 ? console.log("Es par") : console.log("Es impar")

//if (number % 2 == 0) {
//   console.log('El numero es Par')
//}else {
//    console.log('El numero es impar')
//}

/**
 * 
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

let dayOfTheWeek = prompt('Ingresa un dia de la semana: ')
let day = 'lunes'

switch (day){
    case 'lunes':
        console.log(day + " es dia 1");
        break
    case 'martes':
        console.log(day + " es dia 2");
        break
    case 'miercoles':
    case 'miércoles':
        console.log(day + " es dia 3");
        break
    case jueves:
        console.log(day + " es dia 4");
        break
    case viernes:
        console.log(day + " es dia 5");
        break
    case sabado:
        console.log(day + " es dia 6");
        break
    case domingo:
        console.log(day + " es dia 7");        
} console.error("Ese no es un dia.")

/**
 * 
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */

 let firstNumber = parseInt(prompt('Ingresa tu primer numero: '))
 let secondNumber = parseInt(prompt('Ingresa tu segundo numero: '))

 if (firstNumber > secondNumber){
     console.log('El numero menor es ' + secondNumber + " y el mayor es " + firstNumber)
 } else if (firstNumber < secondNumber) {
     console.log('El numero menor es ' + firstNumber + ' y el mayor es ' + secondNumber)
 } else if (firstNumber === secondNumber) {
     console.error('Tus numeros son iguales')
} console.error('Ese no es un numero')