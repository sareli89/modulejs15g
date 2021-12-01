// Función 1:
// valor por defecto 10
// Imprimir en consola las tablas de multiplicar del 1 al 10 
/** 
function timesX(a = 0, b = 10) {
    if (a == 0){
        for (let b = 1; b <= 10; b++) {
            for (let j = 1; j <= 10; j++) {
                console.log(`${b}  ${j} es = ${b * j}`);
            }
        }
    } else {
        for (let i = 1; i <= a; i++) {
            for (let j = 1; j <= 10; j++) {
                console.log(`${i} x ${j} es = ${i* j}`);
            }
        }
    }
}
*/    

// Función 2:
// valor por defecto 10
// Imprimir en consola la suma de 1 a N, siendo N un numero entre 1 y 100
/*

function sum(num = 0, num2 = 10){
    let result = 0

    if (num == 0){
        for(let i = 1; i <= num2; i++) {
            result += i
        }
    } else {
        for (let j = 1; j <= num; j++) {
            result += j
        }
    }
    return result
}

let number = parseInt(prompt('Dame un numero del 1 al 100'))
if (!isNaN(number) && number > 0 && number <101) {
    console.log(`El resultado de la suma 1 a ${number} es igual a ${sum(number)}`)
} else {
    console.error('Debes Introducir un valor entre 1 y 100')
}
*/


/** 
// Función 3:
// valor por defecto "1234"
// Imprimir en consola la suma total de todos los digitos de una cantidad 
// p.ej. "1234" -> 10

function sumA(number = 0, number1 = '1234'){
    let wordToNumber = prompt('Favor de poner un numero')
    let totalSumA = 0

    if (number == 0) {
        for (let k = 0;  k <= wordToNumber.length -1 ; k++) {
            totalSumA += parseInt(wordToNumber[k])
        } 
    } else if ( wordToNumber == number1){
        for(let l =0; l<= wordToNumber.length - 1; l++) {
            totalSumA += parseInt(wordToNumber[l])
        }
    } return totalSumA()
}
*/


/** 
// Función 4:
// valor por defecto 3 y 5, sino el que ponga el usuario 
// Imprimir en consola la suma de los múltiplos de 3 y 5 contenidos entre el 1 y 100
// -> 233168

*/

// invertigar Arrow functions