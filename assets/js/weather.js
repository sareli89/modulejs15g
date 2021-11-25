/*
- Estar en la rama de la clase
- En el archivo weather.js
- Pedir al usuario que ingrese como esta el clima en su ciudad
--Opciones
---Soleado
---Lluvioso
---Nevando
---Nublado
-Pedir la temperatura aproximada en ºC
-Imprimir en consola un descripción acorde al estado del día y la temperatura de ºF
--P.ej: En tu ciudad, el día está "Soleado" con una temperatura de 100ºF
*/

let howIsTheWeather = prompt('Escribe como esta el clima en tu ciudad:')

let weather = howIsTheWeather
switch (weather) {
    case 'soleado':
        break
    case 'lluvioso':
        break
    case 'nevado':
        break
    case 'nublado':
        break
    default:
        console.error('Ese no es un dato valido')
} 

let degreesC = parseInt(prompt('Cual es la temperatura aproximada en grados Celcius:'))
if (!isNaN(degreesC)){
    degreesC = (degreesC * 9 / 5) + 32
}else {
    console.warn('Este es un dato incorrecto')
}

console.log(`En tu ciudad, el dia esta ${weather} con una tmperatura de ${degreesC}°F
`)

/* 
const weather = prompt('como esta el clima en tu ciudad: \n 1. Soleado \n 2. Lluvioso \n 3. Nevado \n 4. Nublado')
const celciusGrade = parseInt(prompt('Cual es la temperatura en tu localidad?'))
const fagrenheitGrade = (celciusGrade * 9/5) + 32

if (!isNaN(celciusGrade && typeof weather === 'string') ) {
    switch (weather) {
        case 'Soleado':
            console.log(`En tu ciudad, el clima esta Soleado con una temperatura de ${fagrenheitGrade}°F`)
            break
        case 'Lluvioso':
            console.log(`En tu ciudad, el clima esta Lluvioso con una temperatura de ${fagrenheitGrade}°F`)
            break
        case 'Nevado':
            console.log(`En tu ciudad, el clima esta Nevado con una temperatura de ${fagrenheitGrade}°F`)
            break
        case 'Nublado':
            console.log(`En tu ciudad, el clima esta Nublado con una temperatura de ${fagrenheitGrade}°F`)
            break
        default:
            console.log('No entiendo cual es tu clima')
    }
    // console.log(`En tu ciudad, el clima esta ${weather} con una temperatura de ${fagrenheitGrade}°F`)
}
*/ 