/*
let saludo = 'hola' 
for(i = 0; i < saludo.length; i++ ) {
    console.log(saludo[i])
    (i = 0; i <= count_vowels.length; i++) {
}
*/ 

//  pedir al usuario un string
//  contar las vocales y las consonantes
// imprimir en consola
// 2 vocales y 2 consonantes

/*
let userString = prompt('Escribe una palabra:')

if (userString.length > 0) {
    let vowels = 0
    let consonant = 0
    for(i = 0; i <userString.length; i++) {
        let letter = userString[i].toLowerCase()
        if (letter !== ' '){
            if(
                letter === 'a' ||
                letter === 'á' ||
                letter === 'e' ||
                letter === 'é' ||
                letter === 'i' ||
                letter === 'í' ||
                letter === 'o' ||
                letter === 'ó' ||
                letter === 'u' ||
                letter === 'ú' ||
                letter === 'ü' 
            ) {
                vowels++
            }else{
                consonant++
            }
        }    
    }
    console.log(`${vowels} vocales y ${consonant} consonantes`)     
} else{
    console.log('Escriba su palabra.')
}
 */


// pedir una palanbra con espacio al inicio y al final
// contar las letras "a" y "e", 
// Contar numero de espacios, sin contar los espacios
// al inicio y al final

/*
let user_String = prompt('Escribe una palabra que contenga un espacio antes y despues:').trim().toLowerCase()
let vowels_A, vowels_E, space = 0

if (user_String > 0) {
    for (i = 0; i <= user_String.length; i++) {
        if (user_String[i] === a || á){
            vowels_A++
        } else if () {
            vowels_E++
        } else if {
            space++
        }
    } else{
    console.log('Escriba una palabra.')       
}
console.log(`El numero total de "a" es ${vowels_A}, el numero total de "b" es ${vowels_E} y el total de espacios es ${space}.`)

 */

//ciclos

// ___(// inicio // fin  // incremento)
for( i =1; i <= 10; i++){
    console.log(`5 x ${i} = ${5 * i}`)
}

// Pedir el usuario 1 numero entre 1 y 100
// sumar todos los numeros entre el 1 y este numero
// Mandar un alert con el  total

// 10
// 1+2+3+4+5+6+7+8+9+10
// total -> ?

// let user_Number = parseInt(prompt('Escribe un numero entre el 1 y el 100'))
let total = 0
if (isNan(user_Number) != true && user_Number > 0 && < 101) {
    for (let i = 1; i <= user_Number; i++) {
        total += i
    } 
    alert (`La suma es ${total}`)
} else {
    console.log ("Ingresa un numero valido")
}


//  while (condiciones){
//     sentencias
//     incremento
//}
/* 
let user_Number = parseInt(prompt('Escribe un numero entre el 1 y el 100'))
let suma = 0 
let counter = 1

if (!isNaN(user_Number)){
    while(counter <= user_Number){
        //sentencias
        suma = suma + counter
        // incremento
        counter++
    }
    alert(`La suma es ${suma`})
} else {
    console.log('No es un numero valido')
}
*/

// pedir al usuario una palabra (permitir espacios, mayusculas)
// Verificar que sea un palindromo
// mandar en consola el resultado
// -> La palabra "anita lava la tina" es un palindromo

let word = prompt('Escriba una oracion').trim().toLowerCase() //replace(" ", "")
wordWhitoutSpace = ''
wordReversed = ''

if (word != '') {
    //remove spaces
    for (i = 0;  i < word.length; i++){
        if (word[i] !== ' ') {
            wordWhitoutSpace = wordWhitoutSpace + word[i]
        }
    } 
    //word reversed
    for (j = wordWhitoutSpace - 1; j >= 0 ; j--) {
        wordReversed += wordWhitoutSpace[j]
    }
    wordWhitoutSpace === wordReversed ?
        console.log(`La palabra "${wordUser}" es un palindromo`)
    :
        console.log(`La palabra "${wordUser}" No es un palindromo`)
}else {
    console.log('No es un dato valido')
}


//while (counter < word.length){
//        palindrome
//    }

// do {
//   sentences
//} while(condition)