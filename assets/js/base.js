
// arr.forEach()

// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el  valor mas alto
// input: [1,4,3,2,5]
// output: -> [5]

/* const mostBigger = (arr) => {
	let biggest = arr[0]
	arr.forEach( (value, index, array) => {
		if(biggest < value){
			biggest = value
		}
	})
	return biggest
}
console.log( mostBigger( [1, 4, 10] ) ) 

const smallerNumber = (arr) => {
    let smaller = arr[0]

    arr.forEach( (value) => {
        if (smaller > value) {
            smaller = value
        }
    })
    return smaller
}
console.log( smallerNumber( [10,23,2,1,3,93]))*/


// arr.map()

/* const arrExample = [11,2,3,10,5]
const resultado = arrExample.map( (val) => {
	return val * 2
})
console.log(resultado) 

let resulTado =
[11,2,3,10,5].map( (val,index,arr) => {
    return val *2
})
console.log(resulTado)*/


/* // dado un array de numeros,
// retornar un array con los numeros convertidos a string
// Entrada : [11,2,3,10,5]
// Salida : ['11','2','3','10','5']

// let arrEx = [11, 2, 3, 10, 5]
// let resultado = arrEx.map((val) => {
//     return val.toString()
// })

const toString = (array_S) => array_S.map( (value) => value.toString())

let result_1 = toString([1,2,3,4])

console.log(toString([1,2,2,3,4])) 

    })*/

// .map()
// función
// Dado unn array como parametro 
// capitalizar todos los elementos que sean strings
// typeof variable
// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo', 123]

/* const capitalizeArr = (arr) => {
    let arrCapitalized = []

    arrCapitalized = arr.map( value => {
        if (typeof value === 'string') {
            return `${value.slice(0, 1).toUpperCase()}${value.slice(1).toLowerCase()}`
        } else {
            return value
        }
    })
    return  arrCapitalized
}

let resultCap = capitalizeArr(['hOlA', 'mundo', 123])
console.log(resultCap) */

// let stringToCap = 'hoLA'
// let textCap = `${stringToCap.slice(0,1).toUpperCase()}${stringToCap.slice(1).toLowerCase()}`
// console.log(textCap)


// arr.filter()
/* const arrayCities = ['ciudad', 'CDMX', 'Monterrey', 'Guadalajara']

arrayCities.filter( (current_Val, index, arr) => {
    // if(current_Val.slice(0,1) === 'c' || current_Val.slice(0,1) === 'C' ){
    //     return current_Val
    // }
    if(current_Val.toLowerCase().slice(0,1) === 'c'){
        return current_Val
    }
}) */

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

/* const capitalizeWithMap = (arr) => {
    return arr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
}

let resultado = capitalizeWithMap(['hOla','munDo'])
console.log(resultado) */

/* const capitalizeWithMap = (arr) => {
 
    return arr.map( word => {
        if (typeOf word === 'string') {
            let captital_L = `${word.slice(0,1).toUppercase()}${word.slice(1).toLowerCase()}`
            return captital_L
        }else {
            return word
        }
    })
} */


/* const capitalizeWithMap = (arr) => arr.map(val => val[0].toUpperCase() + val.slice(1).toLowerCase())

let result = capitalizeWithMap(['hOla','munDo'])
console.log(result) */


/**
 * 
 * -> ['hola','mundo', 0, 5]
 * -> ['hola','mundo']
 * 1. funcion
 * 2. filtrar solo los que son de typo string
 * 
 */

/*  const filterStrings = (arr) => {
	return arr.filter((item) => typeof item === 'string')
	.map( (item) => item.toUpperCase())
	.filter( (item ) => item.slice(0,1) === 'H')
}

const filterStringsLarge = (arr) => {
	let onlyStrings = []
	onlyStrings = arr.filter( (item) => {
		if(typeof item === 'string') {
			return item
		}
	})

	let toUpper = []
	toUpper = onlyStrings.map( (item) => {
		return item.toUpperCase()
	})

	let onlyH = []
	onlyH = toUpper.filter( (item ) => { 
		if(item.slice(0,1) === 'H') {
			return item
		}
	})

	return onlyH
}
 */

const string_Filter = ['hola','mundo', 0, 5]

/* let filtered = string_Filter.filter( arr => {
    if ( typeof arr === 'string' ) {
        return arr 
    }
}) */

let filtered = string_Filter.filter( arr => typeof arr === 'string' )

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

let arrStr = ['hola', 'mundo', 0]

let concatStr = arrStr.reduce((acc, current_Val, index, array) => { //reduce ya incluye un acumulador -acc-
    console.log(acc, current_Val)
    return acc + current_Val
}, 'Saludo: ' ) // este 0 esta inicializando al acumulador 
console.log(concatStr)