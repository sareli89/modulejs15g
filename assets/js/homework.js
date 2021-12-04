
   

/**
 * arr.forEach()
 * Dado el siguiente array 
 * ['string','value','min','asdfghjk']
 * Hacer una funcion que devuelva el string con mas caracteres
 * 
 */

// let largestString = ['string','value','min','asdfghjk']

// const mostLarge  = (arr) => {
//     let moreString = ''

//     // moreString = mostLarge
//     arr.forEach(element => {
//         if(moreString.length < element.length) {
//             moreString = element;
//         }
//     })
//     return moreString;
// }
// console.log( mostLarge( ['string','value','min','asdfghjk']))



/**
 * arr.map()
 * Dado un array 
 * Hacer una funcion que devuelva el mismo array
 * Pero con los items al reves
 * P.ej. reverseStringArr( ['string','value','min'] )
 * Salida: ['gnirts','eulav','nim']
 * 
 */

// let strToReverse = ['string','value','min']

// const reverseStringArr = arr => {
//     let reverse = []
//     reverse = arr.map( element => {
//         for (let i = element.length - 1; i >= 0; i--) {
//             reverse += element[i]
//         }
//         return reverse
//     })
//     console.log(reverse)
// }


// let moreString = []

// // moreString = mostLarge

// });

/**
 * arr.filter(), .map()
 * Funcion que reciba un array de strings y numeros
 * Filtre solo los strings
 * luego, Capitalice cada string
 * luego, filtre solo los que tengan mas de 5 caracteres
 * y al final, los que tengan al menos 2 letras "a" 
 * 
 * p.ej.  filterStrings( ['guadalajara', 3, 'caracas', 'Oslo', 'brasil', 0] )
 * Salida -> ['Guadalajara', 'Caracas']
 */

// let array = ['guadalajara', 3, 'caracas', 'Oslo', 'brasil', 0]

// const filterStrings  = (arr) => {
//     return arr.filter(word => typeof word === 'string')
//     .map ( word =>  word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase())
//     .filter( word =>  word.length > 5)
//     .filter( word =>  word.split('a').length >= 3)
// }

// const filterStrings  = (arr) => {
//     return arr.filter(word => typeof word === 'string')
//     .map ( word => {
//         return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase()
//         console.log(word)
//     })
//     .filter( word => {
//         return word.length > 5
//     })
//     .filter ( word => {
//         return word.split('a').length >= 3
//     })
// }


const fullname = ['jorge','luis', 'camarillo', 'cristobal']
// ->'jlcc'


// let getInitials = (arr) => {
//     return arr.reduce( (acc, cv) => `${acc}${cv.slice(0,1)}`,'')
// }

let getInitials = (arr) => arr.reduce( (acc, cv) => `${acc}${cv.slice(0,1)}`,'')


let initials = getInitials(fullname)
console.log(initials)


