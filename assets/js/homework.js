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

const array_Reduce = (arr_One, arr_Two) => {
    let arr_Add = 0 
    return arr_One.concat(arr_Two).forEach(item => arr_Add += item)
}

// tarea por Mentor Jorge

/**
 * Escribir un arrow function que invierta una oracion
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * hint: https://www.w3schools.com/jsref/jsref_join.asp
 */

// large solution
const reverseSentence = (sentence ) => {
    let newSentence = ''
    newSentence = sentence.split('').reverse().join('')
    return newSentence
}
// middle solution
// const reverseSentence = (sentence ) => {
//     return sentence.split('').reverse().join('')
// }

// one line solution
// const reverseSentence = sentence => sentence.split('').reverse().join('')



/**
 * Escribir un arrow function que compruebe
 * si una oración es un palindromo
 * hint: https://ricardometring.com/javascript-replace-special-characters
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 */

// large
const isPalindrome = (sentence) => {
    let sentenceNormalized = sentence.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    let sentenceWithoutSpaces = sentenceNormalized.replace(/\s/g,'')
    let sentenceReversed = sentenceWithoutSpaces.split('').reverse().join('')
    if(sentenceWithoutSpaces === sentenceReversed) {
        return true
    } else {
        return false
    }
}
// short
// const isPalindrome = sentence => {
//     let sentenceNormalized = sentence.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g,'')
//     let sentenceReversed = sentenceNormalized.split('').reverse().join('')
//     return sentenceNormalized === sentenceReversed ? true : false
// }


/**
 * Escribir un arrow function que tome como parametro 2 arrays, 
 * y devuelva un numero con la suma total de esos 2 arrays.
 * arrayReduce( [1,2,3,4], [1,2] ) 
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
    // newArr.forEach( function (item) {
    //     arrAdd += item
    // })

    // arrow function
    newArr.forEach( value => {
        arrAdd = arrAdd + value
    })

    // newArr.forEach( value => arrAdd += value )
    return arrAdd
}


let resultado = arrayReduce( [1,2], [3] )
console.log(resultado)



// middle
// const arrayReduce = (arrOne, arrTwo) => {
//     let arrAdd =  0
//     arrOne.concat(arrTwo).forEach( item => arrAdd += item )
//     return arrAdd
// }

// short
// const arrayReduce = (arrOne, arrTwo) => {
//     let arrAdd =  0
//     return arrOne.concat(arrTwo).forEach( item => arrAdd += item )
// }

// one line solution
// const arrayReduce = (arrOne, arrTwo) => arrOne.concat(arrTwo).reduce( (acc, cv) => acc += cv )


/**
 * Escribir una función que tome como parametro 2 arrays, y devuelva un array 
 * con los numeros repetidos en los 2 arrays
 * arrayReduce([1,2,3,4],[1,2,5]). 
 * -> [1,2]
*/

// large
// const getRepeatItems =  (arrOne, arrTwo) => {
//     let concatArr = arrOne.concat(arrTwo)
//     let arrRepeated = []
//     concatArr.forEach((element, index) =>  {
//         // console.log( concatArr.indexOf(element), index)
//         if( concatArr.indexOf(element) !== index ) {
//             arrRepeated.push(element)
//         }
//     })
//     return arrRepeated
// }

// middle
// const getRepeatItems =  (arrOne, arrTwo) => {
//     let arrRepeated = []
//     arrOne.concat(arrTwo).forEach((element, index) =>  {
//         concatArr.indexOf(element) !== index ? arrRepeated.push(element) : ''
//     })
//     return arrRepeated
// }


// Large filter
// const getRepeatItems =  (arrOne, arrTwo) => {
//     let arrRepeated = []
//     arrRepeated = arrOne.concat(arrTwo).filter((element, index, arr) =>  {
//         if( arr.indexOf(element) !== index ) {
//             return element
//         }
//     })

//     return arrRepeated
// }

// short filter
// const getRepeatItems = (arrOne, arrTwo) => {
//     return arrOne.concat(arrTwo).filter((element, index,arr) =>  {
//         return arr.indexOf(element) !== index ? element : ''
//     })
// }

// one line -- not recomended
const getRepeatItems = (arrOne, arrTwo) => arrOne.concat(arrTwo).filter((item, index,arr) => arr.indexOf(item) !== index ? item : '')
