// Täydennä funktio convertNumberToString niin, että se muuntaa saamansa numeron merkkijonoksi.
// Täydennä funktio convertStringToNumber niin, että se muuntaa saamansa merkkijonon numeroksi.

function convertNumberToString(number = 30) {
  return number.toString();
}
console.log(convertNumberToString(30));

function convertStringToNumber(string = "10") {
  return parseInt(string, 10);
}
console.log(convertStringToNumber("10"));

// Esimerkki - älä muokkaa
console.log(convertNumberToString(42)); // haluttu vastaus: "42"
console.log(convertNumberToString(97)); // haluttu vastaus: "97"
console.log(convertNumberToString(11)); // haluttu vastaus: "11"

console.log(convertStringToNumber("42")); // haluttu vastaus: 42
console.log(convertStringToNumber("97")); // haluttu vastaus: 97
console.log(convertStringToNumber("11")); // haluttu vastaus: 11
