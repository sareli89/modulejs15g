/**
 *  Seleccionar elementos
 */

/* // 1. Seleccionar por ID
document.getElementById('head_title')

// 2. Seleccionar por tagName
document.getElementsByTagName('li')

// 3. Seleccionar por clases
document.getElementsByClassName('link_menu') */

// 4. Seleccionar por querySelector
// document.querySelector('#head_title')
// document.querySelector('li')
// document.querySelector('.link_menu') // solo selecciona al primero, 
                                     // se usa querySelectorAll('') para seleccionar todos

// Selector avanzado -tarea-
// document.querySelectorAll('.link_menu')
/**
 * 
 * /**
 * Obtener atributos
 * Setear atributos 
 */

// // get
// let title = document.querySelector('#head_title').getAttribute('data-title') //Nos sirve para obtener un atributo
// let level = document.querySelector('#head_title').getAttribute('data-level') 
// // set
// document.querySelector('#head_title').setAttribute('data-custom', 'random') //Agrega N cantidad de clases
// // remplazando clases
// document.querySelector('#head_title').setAttribute('class', 'tres', 'cuatro')
// // Agregar clases
// document.querySelector('#head_title').classList.add('clase3')
// // Remover clases
// document.querySelector('#head_title').classList.remmove('clase3')
// // comprobar si existe un atributo
// document.querySelector('#head_title').hasAttribute('clase')

// comprobar si el titulo tiene class
/**
 * Si si, comprobar 
 * ---si tiene la clase "clase1 clase2"
 * ----- Agregar la "clase 3"
 * ---sino 
 * ----- Agregar la clase "custom"
 */
// if (document.querySelector('#head__title').hasAttribute('class') === true) {
//     if (document.querySelector('#head__title').getAttribute('class') === 'clase1 clase2') {
//         document.querySelector('#head__title').classList.add('clase3')
//     } else {
//         document.querySelector('#head__title').classList.add('custom')
//     }
// }
 
/* let elemenTitle = document.querySelector('#head__title')
if( elemenTitle.hasAttribute('class') ) {
    if( elemenTitle.getAttribute('class') === 'clase1 clase2' ) {
        elemenTitle.classList.add('clase3')
    } else {
        elemenTitle.classList.add('custom')
    }
} */

// data attributes
// propiedades personalizadas

// createElement('tag)
// textContent
// appendChild

let ulElement = document.documentElement('ul')
// se agrega <ul></ul>
let liElement = document.createElement('li')
// se agrega <li></li>
liFirst.textContent = 'item 1'
// <li>item 1</li>
ulElement.appendChild(liFirst)
// <ul> <li>item 1</li> </ul>

let liSecond = document.createElement('li')
// <li></li>
liSecond.textContent = 'item 2'
// <li>item 2</li>
ulElement.appendChild(liSecond)
// <ul> <li>item 1</li> <li>item 2</li> </ul>

document.getElementsByTagName('body')[0].appendChild(ulElement)
// body -> <ul> <li>item 1</li> <li>item 2</li> </ul>
/**
 *  Seleccionar padres e hijos (traversing)
 * 
 */

/**
 *  Manipular elementos del DOM
 * 
 */