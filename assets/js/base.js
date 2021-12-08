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

