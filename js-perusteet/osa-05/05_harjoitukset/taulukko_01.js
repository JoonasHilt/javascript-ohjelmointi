// Alkuperäinen joukko tiimin jäseniä
let teamMembers = ["Jukka", "Emilia", "Miikka", "Saara"];

// Harjoitus 1: Käy läpi `teamMembers` ja kirjaa jokainen nimi konsoliin.
// Kirjoita koodisi tähän:
console.log(
  `Tiimin jäsenet ovat: ${teamMembers[0]}, ${teamMembers[1]}, ${teamMembers[2]} ja ${teamMembers[3]}`
);
//ja toinen tapa tehdä for loopilla
for (const person of teamMembers) {
  console.log(person);
}

// Harjoitus 2: Poista ensimmäinen jäsen taulukosta.
// Kirjoita koodisi tähän:
teamMembers.shift(teamMembers);
console.log(teamMembers);

// Harjoitus 3: Poista taulukon viimeinen jäsen.
// Kirjoita koodisi tähän:
teamMembers.pop(teamMembers);
console.log(teamMembers);

// Harjoitus 4: Lisää uusi jäsen "Aleksi" taulukon alkuun.
// Kirjoita koodisi tähän:
teamMembers.unshift("Aleksi");
console.log(teamMembers);

// Harjoitus 5: Lisää uusi jäsen "Linda" taulukon loppuun.
// Kirjoita koodisi tähän:
teamMembers.splice(4, 0, "Linda");
console.log(teamMembers);
// voi myös käyttää .push metodia

// Harjoitus 6: Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä.
// Kirjoita koodisi tähän:
const newArray = teamMembers.slice(2);
console.log(newArray);

// Harjoitus 7: Etsi "Miikka" indeksi taulukossa.
// Kirjoita koodisi tähän:
console.log(teamMembers.indexOf("Miikka"));
console.log(newArray.indexOf("Miikka"));

// Harjoitus 8: Yritä löytää "Jaakko" indeksi (joka ei ole taulukossa).
// Kirjoita koodisi tähän:
console.log(teamMembers.indexOf("Jaakko"));

// // Harjoitus 9: Käytä `splice` poistaaksesi "Miikka" ja lisätäksesi "Karoliina" ja "Bettina" hänen tilalleen.
// // Kirjoita koodisi tähän:
teamMembers.splice(2, 1, "Karoliina", "Bettina");
console.log(teamMembers);

// // Harjoitus 10: Liitä uusi jäsen "Hemmo" taulukon loppuun ja luo uusi taulukko.
// // Kirjoita koodisi tähän:
teamMembers.concat;
const teamThree = teamMembers.concat("Hemmo");
console.log(teamThree);

// // Harjoitus 11: Käyttäen `slice` kopioidaksesi koko taulukon
// // Kirjoita koodisi tähän:
const kopioituLista = teamMembers.slice();
console.log(kopioituLista);

// // Harjoitus 12: Yhdistä taulukot käyttäen `concat`
// // Oletetaan, että `newMembers`-taulukko on määritelty
let newMembers = ["Tiina", "Daniel"];
// Kirjoita koodisi tähän:
const joinedMembers = teamMembers.concat(newMembers);
console.log(joinedMembers);

// // Harjoitus 13: Etsi kaikki Jukan esiintymät
// // Kirjoita koodisi tähän:
let nimi = 0;
for (name of teamMembers) {
  if (name === "Jukka") {
    nimi++;
  }
}
console.log(`Listassa teamMembers esiintyi Jukan nimi ${nimi} kertaa.`);

// Harjoitus 14: Muuta jäsenet `map` avulla kirjoitettavaksi ISOILLA KIRJAIMILLA
// Kirjoita koodisi tähän:
const upperCaseList = teamMembers.map((teamMembers) =>
  teamMembers.toUpperCase()
);
console.log(upperCaseList);
