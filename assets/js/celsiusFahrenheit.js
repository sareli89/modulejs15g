// 1. Estar en la rama class/class-two
// 2. Crear el archivo celsiusFahrenheit.js
// En el archivo...
// 3. pedir al usuario los grados actuales en su localidad 
// 4. Arrojar en un alert() con los ºC convertidos a ºF

let temperature = parseInt(prompt('Escribe la temperatura en tu localidad:'))

if (!isNaN(temperature)){
    temperature = (temperature * 9 / 5) + 32
    alert(`Estos son ${temperature} grados F`)
}else {
    console.warn('Este es un dato incorrecto')
}
