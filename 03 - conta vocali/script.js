/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui
function contaVocali(stringa) {
  const vocali = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  // Scorriamo ogni lettera della stringa
  for (let i = 0; i < stringa.length; i++) {
    const lettera = stringa[i].toLowerCase();

    // Se la lettera è inclusa nell’array delle vocali, incrementa il contatore
    if (vocali.includes(lettera)) {
      count++;
    }
  }

  // Restituisce il numero di vocali trovate
  return count;
}

// Invoca la funzione qui e stampa il risultato in console
const risultato = contaVocali(word);
console.log(risultato);

// Risultato atteso: 3 (a, a, i)



