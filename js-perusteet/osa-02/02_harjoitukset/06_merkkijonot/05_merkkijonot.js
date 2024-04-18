/**
Muokkaa funktio getLastCharacter palauttamaan saamansa merkkijonon viimeinen merkki
 */

function getLastCharacter(name) {
  return name[name.length - 1];
}

// Esimerkki - älä muokkaa
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function takeLastLetter(firstName) {
  return firstName[firstName.length - 1];
}

// Kutsu tekemääsi funktiota

console.log(takeLastLetter("Suvi")); // "i"
console.log(takeLastLetter("Jaakko")); // "o"
console.log(takeLastLetter("Pekka")); // "a"
