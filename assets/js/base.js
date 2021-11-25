
/*
    Ejercico 1:
    Pedir 2 variables por prompt
    Si a > b dividir a entre b
    Si a < b sumar a mas b
    si a == b multiplicar ambos numeros
    Imprimir el resultado en consola
*/ 
/*
const firstNumber = parseInt(prompt('Ingresa tu primer numero: '))
const secondNumber = parseInt(prompt('Ingresa tu segundo numero: '))

if(isNaN(firstNumber) === false && isNaN(secondNumber)=== false) {
    if (firstNumber > secondNumber) {
        console.log(firstNumber / secondNumber)
    } else if (firstNumber < secondNumber) {
        console.log(firstNumber + secondNumber)
    } else if (firstNumber === secondNumber) {
        console.log(firstNumber * secondNumber)
    }
} else {
    console.error('Algunos de sus datos no son numeros.')
}
*/
// for(inicializador; condicionadorDeParada; comoVaAIncrementar){
//    console.log()
// }

for (i = 1; i <= 10; i++) {
    for (j = 0; j <=10; j++){
     console.log(`${i} x ${j} = ${ i * j } `)
    }
}