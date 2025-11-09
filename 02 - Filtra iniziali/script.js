/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui
function filterByLetter(array, letter) {
  const result = [];

  // Ciclo su tutte le parole dell'array
  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    // Controllo se la prima lettera della parola corrisponde a quella passata
    if (word[0].toLowerCase() === letter.toLowerCase()) {
      result.push(word);
    }
  }

  // Restituisco il nuovo array filtrato
  return result;
}

// Invoca la funzione qui e stampa il risultato in console
const filtered = filterByLetter(names, "A");
console.log(filtered);

// Risultato atteso: ["Anna", "Adele", "Alessandra"]