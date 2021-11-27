
/*
	Pedir al usuario una palabra
	Devolver la palabra capitalizada
	p.ej. 'galAxiA'
	Ouput -> 'Galaxia'
*/

let word = prompt('Agregue la palabra que quiere transformar').trim().toLowerCase()
alert(word[0].toUpperCase() + word.slice(1,word.length))



/*
	Pedir al usuario una oración (permitir espacios)
	Capitalizar cada una de las palabras de la oración
	p.ej. 'En una galaxia muy muy lejana'
	Ouput -> 'En Una Galaxia Muy Muy Lejana'
*/

let sentence = prompt("Por favor poner una palabra con espacios").trim().toLowerCase();
let newSentence = "";
for (i = 0; i <= sentence.length - 1; i++) {
  if (sentence[i] == sentence[0] && i == 0 || sentence[i - 1] == " ") {
    newSentence += sentence[i].toUpperCase();
  } else {
    newSentence += sentence[i];
  }
}
console.log(newSentence);


/*
	Pedir al usuario cuantas materias tiene actualmente
	Pedir al usuario la calificacion de cada una de esas N materias
	Arrojar el promedio en un alert
*/

let subjects = parseInt(prompt("Favor de indicar cuantas materias tiene"));
let totalFinal = 0,cal = 0;
for (i = 1; i <= subjects; i++) {
  cal = parseInt(prompt(`cuales es la calificaciones de la materia ${i}?`));
  totalFinal += cal;
}
console.log(`La calificacion final es de ${totalFinal / subjects}`);