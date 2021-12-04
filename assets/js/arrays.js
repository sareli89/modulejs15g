// ARRAYS

console.log('arrays')

// "".toLowerCase()
// ''.substring(2)
// ``.toUpperCase()
// let str = 'hola'
// // let arr = [2,'hola',3]

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


// Metodo push, mete al elemento al final del array
let arr = [10, 20, 30, 40, 50]
let newArray = []

for (i = arr.length -1; i >= 0; i--) {
    newArray.push(arr[i])
}

// console.log(newArray)


// Metodo pop, saca al ultimo elemento al final del array
let arr2 = [10, 20, 30, 40, 50]
let newArray2 = []

for (i = arr2.length -1; i >= 0; i--) {
    newArray2.pop(arr[i])
}

// Metodo filter, crea una nueva array con los elementos que pasaron la condicion indicada en un funcion
let arr3 = [10, 20, 30, 40, 50]
let newArray3 = arr3.filter(filterExample)

function filterExample(more){
    return more >= 25
}

/**
 * Tener una variable tipo Array donde guardar el resultado
 * iterar el array con arr.map()
 * - En cada iteracion 
 * -- Obtener la primer letra del string y ponerla en mayuscula
 * -- Obtener del segundo al último caracter del string y ponerla en minusculas
 * -- formar un solo string con los 2
 * -- retornar ese string
 * 
 * Retornar la variable con el array transformado
 */
// ['hOla','munDo']
// -> ['Hola','Mundo']

const capitalizeWithMap = (arr) => {
    return arr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
}

let resultado = capitalizeWithMap(['hOla','munDo'])
console.log(resultado)

// arr.filter(function)

/* Dado un array de numeros
Filtrar los que son pares */

let arrToFilter = [1,2,3,4,5,6,7]
let arrFiltered = arrToFilter.filter( (numero) => {
    if( numero % 2 === 0) {
        return numero
    }
})


// arr.reduce

let arr = [10,20,30]
// let acumulador = 0

// arr.forEach( element => {
//     acumulador += element
// })
// console.log(acumulador)

let suma = arr.reduce((acc, current_Val, index, array) => { //reduce ya incluye un acumulador -acc-
    console.log(acc, current_Val)
    return acc + current_Val
}, 0 ) // este 0 esta inicializando al acumulador 
console.log(suma)



let suma = arr.reduce((acc, cv, index, arr)=> {
	// console.log(acc, cv)
	return acc + cv
}, 0 )

let arrStr = ['hola', 'mundo']
let concatStr = arrStr.reduce((acc, cv, index, arr)=> {
	console.log(acc, cv, index, arr )
	return acc + cv

}, 'saludo: ')

console.log(concatStr)


// [].reduce( (acc,value, index, array) => {}) -> ''

const fullname = ['jorge luis', 'camarillo', 'cristobal']
// ->'jorge luis camarillo cristobal'
let fullNameStr = ''
fullNameStr = fullname.reduce( ( acc, cv) => {
    return `${acc} ${cv}`
})
console.log(fullNameStr)

// reduccion del ejercicio anterior
const getFullName = () => {
    return fullname.reduce( ( acc, cv) => `${acc} ${cv}` )
}

const fullname = ['jorge','luis', 'camarillo', 'cristobal']
// ->'jlcc'


// let getInitials = (arr) => {
//     return arr.reduce( (acc, cv) => `${acc}${cv.slice(0,1)}`,'')
// }

let getInitials = (arr) => arr.reduce( (acc, cv) => `${acc}${cv.slice(0,1)}`,'')

let initials = getInitials(fullname)
console.log(initials)






