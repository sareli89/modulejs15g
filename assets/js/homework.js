let koder = {
    name:"jorge",
    lastName:"Camarillo",
    average: [10, 10, 10, 8, 9],
    age: 30,

    getAge: function () {
        return this.age
    },

    get ageKoder() {
        return this.age
    },

    set ageKoder(age) {
        this.age = age
    },

    get fullName() {
        return `${ this.name } ${ this.lastName }`
    },

    set fullName(objFullName) {
        this.name = objFullName[0]
        this.lastName = objFullName[1]
    },

    // set newScore (element) {
    //     this.average.push(element)
    // },

    // get aver () {
    //     let suma = this.average + 
    //     return suma / this.average.length
    // }
}

// Metodos
console.log( koder.getAge() )

// getters
console.log('Edad inicial: ', koder.ageKoder)
console.log('Nombre completo: ', koder.fullName)

// setters
koder.ageKoder = 47
koder.fullName = ['jorge luis', 'camarillo']

// getter y setter de 
/**
 * 
 * 1. getter average
 * 2. getter, setter IMC 
 * 3. setter Score
 * 
 * 4. setter newProperty
 * 
 * 
 */

// 1. get average 
Object.defineProperty( koder, 'averagekoder', {
    get() {
        return this.average.reduce( (acc, cv) => acc + cv, 0) / this.average.length
    }
})

// 2. getter, setter IMC
Object.defineProperty( koder, 'IMCKoder', {
    get() {
        return this.weight / (this.height * this.height)
    },
    set(value) {
        this.IMC = value
    }
})

// 3. setter Score
koder.weight = 90
koder.height = 1.73
Object.defineProperty(koder, 'score', {
    set(score) {
        this.average.push(score)
    }
})
// koder.newScore = function (element) {
//     this.average.push(element)
// }

// 4. setter NewProperty
Object.defineProperty( koder, 'newProperty', {
    set(objProp) {
        console.log(objProp)
        // koder['nueva'] = "valor"
        this[objProp.nameProperty] = objProp.valueProperty
    }
})

koder.defineProperty = {
    nameProperty: 'generation',
    valueProperty: 'nuevo valor'
}
/**
 * Estudiar DOM 
 * CSS y HTML
 */