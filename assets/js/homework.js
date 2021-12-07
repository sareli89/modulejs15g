/** 
 * Dado un arreglo con nombres de personas, 
 * devuele un arreglo con los nombres de las personas que empiezan con vocales (capitalizados)
 * onlyNamesVowels( ['jorge','ana','ivan','sergio','luis','oscar' ] )
 * -> ['Ana','Ivan','Oscar']
*/

let onlyVowelsName  = (arr) => {
    
    // let vowels = /[AEIOU]/
    return arr.map ( word =>  word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase())
    .filter(word => word[0] === 'A' && word[0] === 'E' && word[0] === 'I' && word[0] === 'O' && word[0] === 'U')
    console.loglog(word)
} 

let toUpper = onlyVowelsName(['jorge','ana','ivan','sergio','luis','oscar' ])
console.log(toUpper)


/**
 * 
 * Dado una arreglo compuesto por arreglos, 
 * crea una funcion que calcule la suma de los arreglos y posteriormente la suma de las sumas
 * additionMultiArr(  [	[1,2,3] , [1,3,2] , [3,2,1] ] )
 * 
 */
 
 
let sumAr = 0, totalSum = 0

let sum_ArArr = (arr) => {
    return arr.map(val => val.reduce( (acc, value) => acc += value)).reduce((sum,total) => sum += total)
}
let array = sum_ArArr( [ [1,2,3] , [1,3,2] , [3,2,1] ] )
console.log(array)


 