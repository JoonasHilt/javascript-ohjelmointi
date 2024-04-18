/**
Muokkaa funktio capitalize palauttamaan saamansa sana kirjoitettuna vain isolla alkukirjaimella
 */

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase(); // muuttaa ensimmäisen kirjaimen ISOKSI, slicetaan indexistä 1 eli toka kirjain alkaen pieneksi
}

// Esimerkki - älä muokkaa
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function cityCapitalized(city) {
  return city[0].toUpperCase() + city.slice(1).toLowerCase();
}

// Kutsu tekemääsi funktiota
console.log(cityCapitalized("rovaNIEMI"));
console.log(cityCapitalized("TuRkU"));
console.log(cityCapitalized("tamPere"));
