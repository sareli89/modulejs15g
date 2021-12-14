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

/* let ulElement = document.documentElement('ul')
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
// body -> <ul> <li>item 1</li> <li>item 2</li> </ul> */


/**
 * Ejercicio en clase 1
 * <ul id="menu" class="menu">
        <li class="item__menu">Home</li>
        <li class="item__menu">Products</li>
        <li class="item__menu">About Us</li>
    </ul>
    Replicar con JS este markup
 */
/* let ul_Element = document.documentElement('ul')
let li_Home = document.createElement('li')
let li_Products = document.createElement('li')
let li_AboutUs = document.createElement('li')

ul_Element.setAtribute('id', 'menu')
ul_Element.setAtribute('class', 'menu')

li_Home.textContent = 'Home'
li_Home.setAttribute('item__menu')
li_Products.textContent = 'Products'
li_ProductssetAttribute('item__menu')
li_AboutUs.textContent = 'About Us'
li_AboutUssetAttribute('item__menu')

ul_Element.appendChild(li_Home)
ul_Element.appendChild(li_Products)
ul_Element.appendChild(li_AboutUs)

document.getElementsByTagName('body')[0].appendChild(ul_Element) */
// document.getElementsById('body').appendChild(ul_Element)

// Solucion mentor Jorge
let ulMenu = document.createElement('ul')
ulMenu.classList.add('menu')
ulMenu.setAttribute('id','menu')

let liMenuHome = document.createElement('li')
liMenuHome.classList.add('item__menu')
liMenuHome.textContent = 'Home'
ulMenu.appendChild(liMenuHome)

let liMenuProducts = document.createElement('li')
liMenuProducts.classList.add('item__menu')
liMenuProducts.textContent = 'Products'
ulMenu.appendChild(liMenuProducts)

let liMenuAboutUs = document.createElement('li')
liMenuAboutUs.classList.add('item__menu')
liMenuAboutUs.textContent = 'About Us'
ulMenu.appendChild(liMenuAboutUs)

document.getElementById('body').appendChild(ulMenu) 


/**
 *  Seleccionar padres e hijos (traversing)
 * 
 */

/**
 *  Manipular elementos del DOM
 * 
 */

// Tarea 1

/**
 * Ejercicio 1.
 * Dado el siguiente Array ['Hoteles', 'Ofertas', 'Viajes', 'Ayuda', 'Cancelaciones']
 * Formar el siguiente markup en el DOM
 * <ul class="menu__booking" data-menu="booking">
        <li class="menu__booking__item">Hoteles</li>
        <li class="menu__booking__item">Ofertas</li>
        <li class="menu__booking__item">Viajes</li>
        <li class="menu__booking__item">Ayuda</li>
        <li class="menu__booking__item">Cancelaciones</li>
    </ul>
 * 
 */

    let menuContainer = document.createElement('ul')    
    menuContainer.classList.add('menu__booking')
    menuContainer.setAttribute('id','menu__booking')
    document.getElementsByTagName('body')[0].appendChild(menuContainer)
    
        
    let arrMenu = ['Hoteles', 'Ofertas', 'Viajes', 'Ayuda', 'Cancelaciones']
    let markupMenu = ''
    arrMenu.forEach( (menu) => {
        // menuContainer.innerHTML = `<li class="menu__booking__item">${menu}</li>`
        markupMenu += `<li class="menu__booking__item">${menu}</li>`
    })
    
    document.querySelector('#menu__booking').innerHTML = markupMenu
    
        
        
        
        
        
        
        
        
        /**
         * Ejercicio 2.
         * Dado el siguiente Array de objetos "objPromesas"
         * Crear una funcion para Formar el markup necesario para que se vea asi
         * https://ibb.co/hWSvpx5
         * 
         * NOTA: recuerda agregas el CSS necesario para lograr este objetivo
         * 
         */
        
        
        
         let objPromesas = [
            {
                imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/hotel1.png',
                titulo: 'LA MAYOR COBERTURA',
            },
            {
                imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_desayuno_cortesia_2_0.png',
                titulo: 'DESAYUNO EN CORTESÍA*',
            },
            {
                imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_cancelacion_flexible_0.png',
                titulo: 'CANCELACIÓN SIN COSTO**',
            },
            {
                imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_wifi_cortesia_2_0.png',
                titulo: 'WIFI EN CORTESÍA',
            }
        ]
        
        // let container = document.createElement('section')
        // container.classList.add('grid__services')
        
        // objPromesas.forEach( (service) => {
        //     let divService = document.createElement('div')
        //     divService.classList.add('grid__services__item')
        
        //     let imgService = document.createElement('img')
        //     imgService.setAttribute('src',service.imagen)
        
        //     let titleService = document.createElement('h3')
        //     titleService.textContent = service.titulo
        
        //     divService.appendChild(imgService)
        //     divService.appendChild(titleService)
        //     container.appendChild(divService)
        // })
        
        // document.getElementsByTagName('body')[0].appendChild(container)
        
        
        
        
        
        /**
         *  Tarea 2
         * Estudiar lo siguiente:
         * 1. innerHTML
         * 2. insertBefore()
         * 3. insertAfter()
         * 4. append()
         * 5. prepend()
         * 6. removeChild()
         * 7. DOM events
         * 
         */
    
    // insertBefore
    let menu = document.getElementById('menuInsertBefore')
    // create a new li node
    let liElement = document.createElement('li')
    liElement.textContent = 'menu insertado '
    // <li>menu insertado</li>
    // insert a new node before the first list item
    // menu.insertBefore(liElement, menu.childNodes[0] )
    // menu.insertAfter( liElement, menu.childNodes[0] )
    
    
    // append
    // insertBefore
    // let menu = document.getElementById('menuInsertBefore')
    // create a new li node
    let liElementAppend = document.createElement('li')
    liElementAppend.textContent = 'menu insertado append'
    menu.append(liElementAppend)
    
    
    let liElementPrepend = document.createElement('li')
    liElementPrepend.textContent = 'menu insertado prepend'
    
    menu.prepend(liElementPrepend)
    
    // console.log(liElementPrepend)
    
    menu.removeChild(liElementPrepend)
    
    
    
    const reverseUser = () =>  {
        let username = document.querySelector('#username').value
        let reversedUserName = username.split('').reverse().join('')
        document.querySelector('#usernamereversed').value = reversedUserName
    }
    
    const focusInInput = () => {
        console.log('Focusin event input')
    }
    const focusOutInput = () => {
        console.log('Focusout event input')
    }