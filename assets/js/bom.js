/**
 * Browser Object Model
 * Como JS se comunica con el nab=vegador
 * 
 * window:
 * window.innerHeight  
 * window.innerWidth
 * 
 * location:
 * window.location o  solo: location <-- usaremos el primero y nos regres un objeto
 * window.location.protocol <-- regresa el protocolo
 * window.location.pathname <-- window.location.pathname = '/events <-- te mandaria al path indicado ~esta es una propiedad por lo que para cambiar de pone = '' ~
 * window.location.hostname
 * window.location.href
 * window.location.search <--
 * window.location.replace(//)  <--  es un metodo, por lo que hace una accion
 * 
 * navigator:
 * window.navigator.appVersion <-- regresa la version de la computadora y navegador
 * window.navigator.appCodeName
 * window.navigator.platform
 * 
 * history:
 * window.history.back()
 * window.history.forward()
 * 
 * alert:
 * window.alert('mensaje a mostrar') 
 */

// crear un listener de #prev
// aplicar history.back() o history.forward()

let prevBtn = document.getElementById('prev')
let nextBtn = document.getElementById('next')

prevBtn.addEventListener('click', () => {
    window.history.back()
})

nextBtn.addEventListener('click', () => {
    window.history.forward()
})