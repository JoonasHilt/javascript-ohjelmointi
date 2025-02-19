/**
Muokkaa funktio sayHello jotta se sisällyttää parametrina saamansa nimen tervehdykseen. 

 */
function sayHello(name) {
  return `Hello ` + name;
}

// Esimerkki - älä muokkaa
console.log(sayHello("Alex")); // "Hello Alex"
console.log(sayHello("Sam")); // "Hello Sam"

// Treenaa: Keksi itse samanlainen funktio eri nimellä ja tervehdyksellä
function goodEvening(supremeLeader) {
  return `Goood evening ` + supremeLeader;
}
// Kutsu tekemääsi funktiota

console.log(goodEvening("Kim jong un"));
console.log(goodEvening("Mr. Trump"));
