// Objetos

let koder = {
    name: 'Sara',
    lastNames: 'Reveles',
    age: 32,
    hobbies: ['musica', 'peliculas', 'naturaleza'],
    generation: 15,
    isStudent: true
} 
/* 
// Create
koder.isMentor = false

// koder['isMentor'] = false
console.log(koder)

// Read
console.log(koder.name.toUpperCase())
console.log(koder.isStudent)

// Update
koder.hobbies.push('leer')
koder.name = 'Sara Elizabeth' //

// Delete
delete koder.hobbies */


// for in

// for( ) {
//     //sentencias
// }

// for (let propiedad in koder) {
//     console.log( propiedad , koder[propiedad])
// }
// let number = 1
// for (let key in koder) {
//     console.log(`${number++}. ${key} : ${koder[key]}`)
// }

//console.log(Object.keys(koder)) forma de obtener las llaves de un objeto

// Ejercios
/**
 * Del siguiente objeto
 * 1. Contar el numero de empleados
 * 2. Suma total a pagar
 * -> Son 3 empleados y el total es 130000
 */

/*  let salarios = {
    'juan': 30000,
    'Albert': 50000,
    'jorge': 50000
}

let totalPeople = 0
let totalSalarios = 0

for (suma in salarios) {
    totalPeople++

    console.log(`Son ${totalPeople} y el total es $ ${totalSalarios += salarios[suma]}`)
} 
*/

/**
 * Arrow function
 * Recibir un objeto
 * Devolver un array con todas las propiedadades que son un string
 * Entrada: objOnlyStrings
 * [modelo,marca,color, version, orige]
 */

//  1. Declarar una funcion que reciba un objeto
//  2. Declarar un array vacio
//  3. iterar el objeto ( for in )
//  4. -- En cada iteracion 
//  5. ----- Obtener el valor de cada llave
//  6. ----- Verificar si es un string
//  7. ----- sí si, Agregar al array
//  8. -- fin iteracion
//  9. retornar el array 


/* 
let objOnlyStrings =  {
    modelo: 'jetta',
    marca: 'VW',
    color: 'rojo',
    year: 2020,
    tenencias: [2019, 2020, 2021],
    version: 'sport',
    origen: 'México'
}

const filterStringObject = (obj) => {
    let isString = []

    for (let value in obj) {
        
        if (typeof obj[value] === 'string'){
            isString.push(value)
        } 
    }
    return isString
}

\
//funcion con forech
//acceder el valor de la edad
// return la suma
let suma = 0
koders.forEach((element, index) => {
	console.log(element)
	console.log(index)
	//console.log(`${element.age} total de años`)
	return suma += element.age
});
console.log(suma)


console.log(filterStringObject(objOnlyStrings))
// -> [modelo,marca,color, version, origen]
 */

// Array de objetos
let koders =  [
    {
        name: 'jorge luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'],
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['js'],
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'],
    }
]

// koders.forEach((element, index, array) => {
//     // console.log(element.lastName)
//     // console.log(element.age)
//     // console.log(element.generation)
//     // console.log(element.modulos)
//     console.log(`${element.name} ${element.lastName} tiene ${element.age} años`)  
// })

/**
 * 1. Hacer una funcion que reciba un objeto de koders
 * 2. Obtener la suma de todas las edades
 * 3. Retornar el total
 * hint: .forEach() .reduce()
 */

//  1. Declarar una funcion que reciba un objeto de koders (forEach)
//  2. Declarar un variable totalEdades = 0
//  3. iterar el objeto ( for in )
//  4. -- En cada iteracion 
//  5. ----- Obtener el valor de cada llave
//  6. ----- Sumar edad actual a acc (reduce (acc, cv))
//  7. ----- regresar el total
//  8. -- fin iteracion
//  9. retornar el array 
/* 
let suma = 0
koders.forEach((element, index) => {
    console.log(element)
    console.log(index)
    //console.log(`${element.age} total de años`)
    return suma += element.age
});
console.log(suma)

const totalAge = (arr) => {
    let total = 0
    arr.forEach( element => {
        total += element.age 
    })
    return total
}
console.log(totalAge(koders))

const countAge = (arr) => arr.reduce( (acc,val) => acc + val.age,0)
console.log(countAge(koders)) */


    // for (obj in koders) {
    //     return totalEdades += element.age
    // }




//  Metodos en los Objetos
//  Object.keys

let salarios = {
    'jorge': 3000,
    'juan': 3000,
    'Pedro': 3000,
    'Laura': 3000
}

/* let empleados = []
for( item in salarios){
    empleados.push(item)
}

console.log( Object.keys(salarios) )
 */
// funcion
// recibe un objeto
// retornar el total de los salarios

// hint : reduce
// hint : forEach

/* const sumaSalarios = (obj) => {
    let suma = 0
    Object.keys(obj).forEach( (key) => {
        let salario = obj[key]
        suma += salario 
    })
    return suma
}
console.log(sumaSalarios(salarios))

const sumaSalario2 = (obj) => {
    let sumA = 0
    sumA = Object.keys(obj).reduce( (acc, key) => {
        return acc + obj[key]
    }, 0)
    return sumA
}
console.log(sumaSalario2(salarios))

let total = Object.keys(salarios).reduce( (acc, key) => acc += salarios[key], 0)
console.log(total) */

//  Object.values

const valueSalary = (obj) => {
    let suma = 0
    suma = Object.values(salarios).reduce( (acc, value) => acc + value, 0) 
    return  suma
}
console.log(valueSalary(salarios))


//  Object.asign() -> concat


//  Object.entries()


//  Object.freeze()

// destructuracion de arrays
let newArr = [10, 20, 30, 40, 50]

let [primerValor, segundoValor, tercerValor, ...rest] = newArr
console.log(primerValor, segundoValor, tercerValor)
console.log(tercerValor)
console.log(...rest)


// destructuracion de objetos

const hero = {
    name: 'Batman',
    realName: 'BruceWayne',
    otherProp : {
        prop: 'value',
    }
}

const { name, realName} = hero
const { name: firstName, realName: legalName, otherProp} = hero // asi se pueden renombrar las keys


// spread operator ...

const arr1 = ['one', ' two']
const arr2 = ['three', ' four', 'five', ...arr1]
const arr3 = [arr1, 'three', ' four', 'five']
console.log(arr2)
console.log(arr3)

let objSpread1 = {
    popiedad: 'valor',
    age: 23
}
let objSpread2 = {
    valor2: 'valor2',
    ...objSpread1
}
console.log(objSpread2)
//spread(...) ordena de menor a mayor cuando la key es numero; si hay string y numero, van primero los numeros depues los string

// clase 11 mentor Jorge

// elemento.metodo(parametros)
// Object.keys(obj)
let salarios  = {
    'jorge':  3000,
    'juan':  7000,
    'Pedro':  8000
}





let empleados = []
// for( item in salarios){
//     empleados.push(item)
// }

// console.log( Object.keys(salarios) )

// funcion
// recibe un objeto
// retornar el total de los salarios

// hint : reduce
// hint : forEach

const sumarSalarios = (obj) => {
    let suma = 0
    Object.keys(obj).forEach( (empleado, index, arr) => {

        let salario = obj[empleado]
        suma = suma + salario
        // suma += salario
    })
    return suma
}


// console.log(sumarSalarios(salarios))


const sumarSalariosRed = (obj) => {
    let suma = 0
    suma = Object.keys(obj).reduce( (acc, key) => {
        return acc + obj[key]
    }, 0)
    return suma
}

// console.log(sumarSalariosRed(salarios))
// let salarios  = {
//     'jorge':  3000,
//     'juan':  7000,
//     'Pedro':  3000
// }

/*
{
    llave: valor,
    llave: valor,
    llave: valor,
}
*/
// .reduce()

const addArr = (obj) => {

    let suma = 0

    suma = Object.values(obj).reduce((previousValue, currentValue) => {
        return previousValue += currentValue
    }, 0)

    return suma
}

// console.log(addArr(salarios))

const addArrOneLine = (obj) => Object.values(obj).reduce((acc, cv) => acc += cv, 0)
// console.log(addArrOneLine(salarios))

// Object.assign() -> concat

let obj1 = {
    'nombre': 'jorge luis',
    'isMentor': true,
    'age': 19
}
// console.log(obj1)
let obj2 = {
    apellido: 'Camarillo'
}

// Object.assign(target, ...sources)
Object.assign(obj1,obj2)
// console.log(obj1)


// let obj1 = {
//     nombre: 'jorge luis',
//     'isMentor': true,
//     apellido: 'Camarillo'
// }


console.log( Object.entries(obj1) )
// console.log(obj1)
// [
//     ['key', 'value'],
//     ['key','value' ]
// ]

// [
//     ['nombre', 'jorge luis'],
//     ['apellido','Camarillo']
// ]

obj1.generation = 6
// Object.freeze(obj1)
obj1.generation = 7
// console.log(obj1)
delete obj1.generation
// console.log(obj1)




// destructuracion de arrays
let newArr = [10, 20, 30, 40, 50]
// let a = newArr[0]
// let b = newArr[1]
// let c = newArr[2]
// let d = newArr[3]
// let [a, b, c, d, e] = newArr
// console.log(a, b, c, d, e)
// console.log(newArr)


// let [a, b] = [10, 20, 30, 40, 50]
// console.log(a)
// console.log(b)

let [a, b, ...rest] = [10, 20, 30, 40, 50]
// console.log(a)
// console.log(b)
// console.log(...rest)

let [firstName, lastName, age] = ['Jorge', 'camarillo', 30]
// console.log(firstName)
// console.log(lastName)
// console.log(age)

let destrucArr = [
    ['Bradley', 'Bouley'],
    ['Chloe', 'Alnaji'],
    ['Jonathan', 'Baughn'],
    ['Michael', 'Herman'],
    ['Robert', 'Hajek'],
    ['Wes', 'Reid'],
    ['Zach', 'Klabunde']
]

destrucArr.forEach((value, index, array) => {
    let [ nombre, apellido ] = value
    console.log(`${nombre} ${apellido}`)
})


// destructuracion de objetos
const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    otherProp: {
        prop: 'value',
    }
}
const { name, realName } = hero
const { name: firstNameObj, realName: legalName, otherProp } = hero

console.log(name, realName)
console.log(firstNameObj, legalName, otherProp)


let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
]

users.forEach((value, index, array) => {

    let {
        firstName, 
        lastName, 
        role
    } = value

    console.log(firstName, lastName, role)
    // console.log(value.firstName, value.lastName, value.role)
})





// const { nameHero,  realName: secretName } = hero
// console.log(secretName)

// spread operator

const arr1 = ['one', 'two']
const arr2 = [...arr1, 'three','four', 'five']
console.log(arr2)


let objspread1 = {
    propiedad: 'valor',
    age: 23
}
let objspread2 = {
    propiedad2: 'valor2',
    ...objspread1
}

console.log(objspread2)




// 2 ejercicios
// rest operator
