/**
Muokkaa funktio skipFirstCharacter  palauttamaan merkkijono, jossa on saamansa merkkijono ilman sen ensimmäistä merkkiä

 */
function skipFirstCharacter(text) {
  return text.slice(1, 5);
}

// Esimerkki - älä muokkaa
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function leaveFirstLetter(city) {
  return city.slice(1); // jättää välistä vain ekan kirjaimen
}

// Kutsu tekemääsi funktiota
console.log(leaveFirstLetter("Helsinki")); // "elsinki"
console.log(leaveFirstLetter("Kuopio")); // "uopio"
