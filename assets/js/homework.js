/**
 * Escribir un arrow function que invierta una oracion
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 */

const reverseString = string => string.split('').reverse().join('')  

reverseString('hello world')


/**
 * Escribir un arrow function que compruebe
 * si una oración es un palindromo
 * hint: https://ricardometring.com/javascript-replace-special-characters
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 */

const palindrome = (pal = 'Hola mundo así') => {
    let normal = pal.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/([^\w] + |\s+)/g, '')
    let wr = normal.split('').reverse().join('')
    return normal === wr ? true : false
}

/**
 * Escribir un arrow function que tome como parametro 2 arrays, 
 * y devuelva un numero con la suma total de esos 2 arrays.
 * arrayReduce( [1,2,3,4], [1,2]) 
 * -> 13
 * 
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * 
*/

const arrayReduce = (arrOne, arrTwo) => {
    let newArr = arrOne.concat(arrTwo)
    let arrAdd = 0

    // funcion tradicional
    // newArr.forEach =(function(item)){
    //  arrAdd += item
    //}
    
    // arrow function 
    newArr.forEach(item => {
        arrAdd += item 

    // one line arrow functiion: newArr.forEach(value => arrAdd += value)
    })
    return arrAdd
}

let resultado = arrayReduce( [1,2], [3])
console.log(resultado)
/**
 * Escribir una función que tome como parametro 2 arrays, y devuelva un array 
 * con los numeros repetidos en los 2 arrays
 * arrayReduce([1,2,3,4],[1,2,5]). 
 * -> [1,2]
*/
// const =
// let arrayReduce = [1,2,3,4] , [1,2,5]

const arrayReduce = (arr_One, arr_Two) => {
    let arr_Add = 0 
    return arr_One.concat(arr_Two).forEach(item => arr_Add += item)
}