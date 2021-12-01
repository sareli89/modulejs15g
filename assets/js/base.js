
//console.log('funciones')
//
//function suma() {
//    console.log('Llamando a una funcion')
//}
/*
console.log('funciones')

//funcion sin parametros
function suma() {
    console.log(2+2)
}

//Funcion con parametros
function suma(a, b) {
    console.log(a + b)
}
suma(10, 100)

function toCelcius(fahrenheit) {
    let celciusGrades = (5 / 9) * (fahrenheit - 32)
    // retorno de la funcion
    return celciusGrades
}
let celciusGradesReturned = toCelcius(100)
console.log(celciusGradesReturned) 

// funcion que pida el nombre al usuario
// y lo imprima en consola

function aName() {
    let theName = prompt('Escribe tu nombre:')
    console.log(theName)
} 
*/
/**
 * Funcion que reciba una palabra
 * y la retorne al revés
 
 function reverse(firstString){
    let reversedString = ""
    for (let i = firstString.length - 1; i >= 0; i--){
         reversedString += firstString[i] 
    }
    return reversedString
 }

let  nombreAlReves = reverse('hola que hace')
console.log(nombreAlReves)

// valores opcionales

function sumNumbers(a, b=5) {
    let suma = a + b
    return suma
}
let resultado = sumNumbers(10)
 



// Función 1:
// Imprimir en consola las tablas de multiplicar del 1 al 10 

function multipleTable() {
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        console.log(`El resultado de ${i} * ${j} es = ${i * j}`);
        }
    }
}

// Función 2:
// Imprimir en consola la suma de 1 a N, siendo N un numero entre 1 y 100

function sum(num){
    let result = 0

    for(let i = 1; i <= num; i++){
        result += i
    }
    return result
}

let number = parseInt(prompt('Dame un numero del 1 al 100'))
if (!isNan(number) && number > 0 && number <101) {
    console.log(`El resultado de la suma 1 a ${number} es igual a ${sum(number)}`)
} else {
    console.error('Debes Introducir un valor entre 1 y 100')
}

// Función 3:
// Imprimir en consola si una oración es un palindromo (puede contener espacios)
// anita lava la tina -> True

function palindrome(aString) {
    let wordWithoutSpace = ''
    let wordReversed = ''
    
    if(aString != ''){
        for(i = 0; i < aString.length; i++){
            if(aString[i] !== ' '){
                wordWithoutSpace = wordWithoutSpace +  aString[i]
            }
        }
        for(j = wordWithoutSpace.length - 1; j >= 0 ; j--){
            wordReversed = wordReversed + wordWithoutSpace[j].trim().toLowerCase()
        } 
        wordWithoutSpace === wordReversed ? true : false   
    }
}

// Función 4:
// Imprimir en consola la suma total de todos los digitos de una cantidad 
// p.ej. "1234" -> 10

function sumTotalOfNumbers() {
    let wordtonumber = prompt('Favor de poner un numero')
    let total = 0
    for (let i = 0;  i <= wordtonumber.length -1 ; i++) {
        total += parseInt(wordtonumber[i])
    }
    console.log(total)
}

// Función 5:
// Imprimir en consola la suma de los múltiplos de 3 y 5 contenidos entre el 1 y 100
// -> (233168)

function sumMultiples() {
    let result = 0
    for (let i = 1; i <= 101; i++) {
        i % 3 == 0? result += 1 :
            i % 5 == 0 ? result += i :null
    }
    return result
}
console.log(`La suma de los multiplos de 3 y 5 entre 1 y 100 es ${sumMultiples()}`)
*/

// CLASE 6 - Arrow Functions

/*
// declaration
const nombreFunction = (param1, ... , paramN) => {
    // sentencias
    //
    // ...
    return
}
// invoke
nombreFunction(param1, ... , paramN)

//clase
// Función 1:
// valor por defecto 10
// Imprimir en consola las tablas de multiplicar del 1 al 10 
/** 
const tables10 = (a) => {
    for (i = a; i <= a; i++) {
        for (b =1; b <= 10; b++) {
            return(`${a} x ${b} = ${a * b}`)
        }
    }
}
*/    




// Función 2:
// valor por defecto 10
// Imprimir en consola la suma de 1 a N, siendo N un numero entre 1 y 100
/*
const adding10 = (number = 10) => {
    let counter = 1
    let sumA = 0

    if (!isNaN(number) && number > 0 && number <= 100) {
        while (counter <= number) {
            sumA += counter
            counter += 1
        }
    } return(sumA)
}
*/


/** 
// Función 3:
// valor por defecto "1234"
// Imprimir en consola la suma total de todos los digitos de una cantidad 
// p.ej. "1234" -> 10
const totalSum = (value = 1234) => {
    let lastValue = value.toString()
    let newValue = 0

    for(i = 0; i < lastValue.length; i++){
        newValue += parseInt(lastValue[i])
    }
    return newValue
}
*/



/** 
// Función 4:
// valor por defecto 3 y 5, sino el que ponga el usuario 
// Imprimir en consola la suma de los múltiplos de 3 y 5 contenidos entre el 1 y 100
// -> 233168
const multiplo = (a = 3, b = 5) => {
    let mult = 0
    
    for (i =1; i<= 100; i++) {
        if (1 % a === 0 || i % b === 0) {
            mult += +i
        }
    }
    return(`La suma de los multiplo es = ${mult}`)
}
*/
*/

// Ejemplos

const sumaOk = (a) => {
    return a * 2
}

const sumaOk = a => {
    return a * 2
}

const suma = ( a, b= 5) => a + b

suma(3,5)