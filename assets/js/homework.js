
 // Ejercicio 1
// dado el siguiene array de objetos
let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
]

// obtener un nuevo objeto con esta estructura
//-> {
//    'Bradley Bouley': 'Full Stack Resident',
//   'Chloe Alnaji': 'Full Stack Resident'
//      ....
//   }
// hint: .reduce() o .forEach()

const userRole = (arr) => {
    return arr.reduce ( (acc, user) => {
        let userName = user.firstName + ' ' + user.lastName
        acc[userName] = user.role
        return acc
    }, {} )
}

console.log(userRole(users))


//  1. Declarar una funcion que reciba un objeto de koders (forEach)
//  2. Declarar un variable totalEdades = 0
//  3. iterar el objeto ( for in )
//  4. -- En cada iteracion 
//  5. ----- Obtener el valor de cada llave
//  6. ----- Sumar edad actual a acc (reduce (acc, cv))
//  7. ----- regresar el total
//  8. -- fin iteracion
//  9. retornar el array 

// Ejercicio 2:
//  tomando el array users,
//  hacer una funcion que reciba 2 parametros (arrayUsers, role)
//  y retorne un array con los usuarios que cumplan con el role
// -> filterUserByRole(arrayUsers, 'Instructor')
// ->   [
//          { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//          { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
//      ]
// hint: .filter()

//  1. Declarar una funcion que reciba un objeto de koders (forEach)
//  2. Declarar un variable totalEdades = 0
//  3. iterar el objeto ( for in )
//  4. -- En cada iteracion 
//  5. ----- Obtener el valor de cada llave
//  6. ----- Sumar edad actual a acc (reduce (acc, cv))
//  7. ----- regresar el total
//  8. -- fin iteracion
//  9. retornar el array 

const filterUserByRole = (arr, role) => arr.filter(user => user.role === role)

console.log(filterUserByRole(users, 'Full Stack Resident'))



// Ejercicio 3
// tomando el siguiente array de objetos
// filtrar lo siguiente
// 1. Cantidad de personas que votaron
// 2. Cual es el promedio de Edad de los votantes

//  1. Declarar una funcion que reciba un objeto de persons 
//  5. ----- reduce if true sumar al acc
//  6. ----- reduce sumar edades y dividir entre arr.length
//  7. ----- regresar el total
//  9. retornar el total de votantes y promedio en edad

let persons = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age: 55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

// filter((element) => { ... } )

const countAge = (arr) => arr.reduce( (acc,val) => acc + val.age,0)/arr.length
console.log(countAge(persons))

const personVoted = (arrPersons) => {
    return arrPersons.reduce( (acc, person) => {
        return person.voted == true ? acc + 1 : acc
    }, 0) 
}
console.log(personVoted(persons))

const averageAgeVoters = (arr) => {
    return arr.reduce( (acc, person) => {
        return acc + person.age
    }, 0 ) / persons.length
}
console.log(averageAgeVoters(persons))