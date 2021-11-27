
/*
const wordUser = prompt('Dame una palabra ').trim().toLowerCase()

let wordWithoutSpace = ''
let wordReversed = ''

if(wordUser != ''){
    // Remove White space
    for(i = 0; i < wordUser.length; i++){
        if(wordUser[i] !== ' '){
            wordWithoutSpace = wordWithoutSpace +  wordUser[i]
        }
    }
    console.log(wordWithoutSpace)

    // word reversed  
    for(j = wordWithoutSpace.length - 1; j >= 0 ; j--){
        wordReversed = wordReversed + wordWithoutSpace[j]
    } 
    console.log(wordReversed)

    wordWithoutSpace === wordReversed ?
        console.log(`La palabra "${wordUser}" es un palindromo`)
    :
        console.log(`La palabra "${wordUser}" No es un palindromo`)

} else {
    console.log('Inserta una palabra valida')
}
*/

// Homework
// De la solucion anterior generar lo siguiente
// 1. While solution
// 2. Permitir acentos
// 
/*
const wordUser = prompt('Dame una palabra ').trim().toLowerCase().replace(" ", "").replace("áéíóúü", "aeiouugit ")gi
let wordReversed = ''

if(wordUser != '') {
    while (i <= wordUser.length -1){
        if (wordUser[i] != " ") {
            wordUser += wordUser[i]
        }
        i++
        console.log(wordUser)
    }
}else {
    console.log('Intenta otra palabra')
}
*/

// Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100
// -> 233168
let i = 1
let sum_Multiplo = 0

while (i <= 100) {
    if (i % 3  == 0 || i % 5 == 0){
        sum_Multiplo += i  
    } i++
}
console.log(`La suma de los multiplos 3 y 5 es ${sum_Multiplo}`)
