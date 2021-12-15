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

const saludo = () => {
    console.log('saludo event listener')
}

let buttonEvent = document.getElementById('button_eventListener')
// buttonEvent.addEventListener('click', saludo) 
buttonEvent.addEventListener('click', () =>{
    console.log('saludo event listener')
})

buttonEvent.addEventListener('focus', () =>{
    console.log('saludo event listener')
})