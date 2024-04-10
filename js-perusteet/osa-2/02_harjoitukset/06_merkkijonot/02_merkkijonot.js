/**
Muokkaa funktio shoutMyName palauttamaan saamansa name-parametri isolla kirjaimilla.
 */

function shoutMyName(name) {
  return name.toUpperCase();
}

// Esimerkki - älä muokkaa
console.log(shoutMyName("Sam")); // "SAM"
console.log(shoutMyName("Charley")); // "CHARLEY"
console.log(shoutMyName("alex")); // "ALEX"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function upperCaseName(name) {
  return name.toUpperCase();
}
// Kutsu tekemääsi funktiota

console.log(upperCaseName("Jaana")); // "JAANA"
console.log(upperCaseName("ilMari")); // "ILMARI"
console.log(upperCaseName("ensio")); // "ENSIO"
