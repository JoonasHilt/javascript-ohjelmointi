/**
Täydennä funktio evenOrOdd siten, että se palauttaa merkkijonon "even", kun se saa parametriksi parillisen luvun, ja muuten "odd".
 */

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log(evenOrOdd(25)); // "odd"
console.log(evenOrOdd(18)); // "even"
console.log(evenOrOdd(-17)); // "odd"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function tasaRaha(raha) {
  if (raha % 2 === 0) {
    return "tasaraha";
  } else {
    return "vaihtoraha";
  }
}

// Kutsu tekemääsi funktiota
console.log(tasaRaha(100)); // tasaraha
console.log(tasaRaha(111.5)); // vaihtoraha
console.log(tasaRaha(1000)); // tasaraha
