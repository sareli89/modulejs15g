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
