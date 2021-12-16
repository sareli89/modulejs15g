// .addEventListener('type', listener, options)
// type: click, change, focus, mouseleave, mouseenter
/**
 * focus, focuin, focusout
 * mouseenter, mouseleave, mousemove
 * click, rigthclick
 * 
 * teclado: keydown, keypress, keyup
 * focus
 * 
 * load, beforeload
 */

// ejercicio
// Agregar a 5 koders mas
// pintarlos en el DOM
// 1. utilizar bootstrap
// 2. Que sea responsive
// 3. minimo 3 cards por row

let koders = [
    {
        name: 'Emilio',
        age: 30,
        city: 'Guadalajara',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/300'
    },
    {
        name: 'Juan',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/310'
    },
    {
        name: 'Vanessa',
        age: 33,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/302'
    },
    {
        name: 'Luis',
        age: 25,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/309'
    },
    {
        name: 'Lucia',
        age: 20,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/303'
    },
    {
        name: 'Zalma',
        age: 38,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/320'
    },
    {
        name: 'Francisco',
        age: 28,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/305'
    }
]

const fillKoder = () => {
    let cardsFill = ''

    koders.forEach( (koder) => {
        cardsFill +=
        <div class='col-3'>
            <div class='card' style="width: 18rem;">
                <img src="${koder.avatar}" class="card-img-top rounded-circle" alt="${koder.name}"></img>
                <div class="card-body">
                    <h5 class="nameKoder text-center"><b>Nombre:</b> ${koder.name}</h5>
                    <p class="ageKoder text-center"><b>Edad:</b> ${koder.age}</p>
                    <p class="cityKoder text-center"><b>Ciudad:</b> ${koder.city}</p>
                    <p class="generacionKoder text-center"><b>eneracion:</b>G ${koder.generacion}</p>
                    <p class="genderKoder text-center"><b>Genero:</b> ${koder.gender}</p>
                </div>
            </div>
        </div>

    })
    document.querySelector('#listKoders').innerHTML = cardsFill
}


document.getElementById('printKoders').addEventListener('click', fillKoder)



window.onload = function () {
    console.log('Ya cargo la pagina')
    fillKoder()
}

//mentor Jorge
// .addEventListener('type', callback)
// callback JS
// type: click, change, focus, mouseleave, mouseenter
/**
 * focus, focusin, focusout
 * mouseenter, mouseleave, mousemove
 * click, rightclick
 * 
 * teclado
 * keydown, keypress, keyup
 * focus
 * 
 * load, beforeload
 * 
 */

// let buttonEvent = document.getElementById('button__eventListener')

// const saludo = () => {
//     console.log('saludo event listener ok')
// } 

// add event
// buttonEvent.addEventListener('click', saludo )

// buttonEvent.addEventListener('click', () => { console.log('saludo event listener') })

// other event
// document.getElementById('button__eventListener').addEventListener('focus', () => {
//     console.log('saludo event listener focus')
// })

// remove event
// buttonEvent.removeEventListener('click',saludo)


// ejercicio
// Agregar a 5 koders mas
// pintarlos en el DOM
// 1. utilizar bootstrap
// 2. Que sea responsive
// 3. minimo 3 cards por row

// let koders = [
//     {
//         name: 'Emilio',
//         age: 30,
//         city: 'Guadalajara',
//         generacion: 6,
//         typeKoder: 'js',
//         gender: 'M',
//         avatar: 'https://i.pravatar.cc/150?img=68'
//     },
//     {
//         name: 'Juan',
//         age: 30,
//         city: 'Ciudad de méxico',
//         generacion: 6,
//         typeKoder: 'iOS',
//         gender: 'M',
//         avatar: 'https://i.pravatar.cc/150?img=67'
//     },
//     {
//         name: 'Maria',
//         age: 30,
//         city: 'Ciudad de méxico',
//         generacion: 6,
//         typeKoder: 'iOS',
//         gender: 'M',
//         avatar: 'https://i.pravatar.cc/150?img=47'
//     },
//     {
//         name: 'Ivonne',
//         age: 30,
//         city: 'Ciudad de méxico',
//         generacion: 6,
//         typeKoder: 'iOS',
//         gender: 'M',
//         avatar: 'https://i.pravatar.cc/150?img=45'
//     },
//     {
//         name: 'Alex',
//         age: 30,
//         city: 'Ciudad de méxico',
//         generacion: 6,
//         typeKoder: 'iOS',
//         gender: 'M',
//         avatar: 'https://i.pravatar.cc/150?img=38'
//     }
// ]

// /**
//  * 
//  * iterar todos los koders
//  * -- formar un card
//  * 
//  * agregar al DOM () '.grid__koders'
//  */

// const printKoders = () => {
//     layoutKoders = ''
//     koders.forEach( (koder) => {
//         layoutKoders += `
//         <div class="col-12 col-md-4 ">
//             <div class="card align-items-center mb-4 p-3">
//                 <img src="${koder.avatar}" class="rounded-circle" alt="${koder.name}">
//                 <div class="card-body">
//                     <h5 class="card-title text-center">${koder.name}</h5>
//                     <p class="card-text text-center"> <b>Edad</b> ${koder.age} años </p>
//                     <p class="card-text text-center"> <b>Generación </b> ${koder.generacion}  </p>
//                     <p class="card-text text-center"> <b>Ciudad</b> ${koder.city} </p>
//                     <p class="card-text text-center"> <b>Bootcamp</b> ${koder.typeKoder}  </p>
//                 </div>
//             </div>
//         </div>
//         `
//     })
//     document.querySelector('.grid__koders').innerHTML = layoutKoders
// }

// // let trigger = document.querySelector('#show__koders')
// // trigger.addEventListener('click', () => {
// //     printKoders()
// // } )




// window.onload  = function () {
//     console.log('Ya cargo la página')
//     printKoders()
// }