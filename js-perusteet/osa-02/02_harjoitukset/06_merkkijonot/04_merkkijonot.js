/**
Muokkaa funktio getFirstCharacter palauttamaan saamansa merkkijonon ensimmäinen merkki
 */

function getFirstCharacter(name) {
  return name[0]; //idnexi valitsin
}

// Esimerkki - älä muokkaa
console.log(getFirstCharacter("Amsterdam")); // "A"
console.log(getFirstCharacter("Japan")); // "J"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function getFourthtLetter(name) {
  return name[3];
}

// Kutsu tekemääsi funktiota
console.log(getFourthtLetter("Helsinki")); // "s"
console.log(getFourthtLetter("Kuopio")); // "p"
console.log(getFourthtLetter("Nurmijärvi")); // "m"
