/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui
function getInitials(array) {
  // Creo un nuovo array vuoto dove metterò le iniziali
  const initials = [];

  // Ciclo su tutti gli elementi dell'array
  for (let i = 0; i < array.length; i++) {
    // Prendo la prima lettera di ogni nome
    const firstLetter = array[i][0];
    // La aggiungo all'array delle iniziali
    initials.push(firstLetter);
  }

  // Restituisco il nuovo array
  return initials;
}

// Invoca la funzione qui e stampa il risultato in console
const result = getInitials(names);
console.log(result);

// Risultato atteso: ["A", "L", "M", "A", "G", "A"]