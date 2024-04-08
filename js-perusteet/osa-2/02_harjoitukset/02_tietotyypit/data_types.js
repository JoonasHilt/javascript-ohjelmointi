/*
- Luo muuttuja nimeltään age ja anna sille kokonaislukuarvo.
- Luo muuttuja nimeltään name ja anna sille merkkijonoarvo.
- Luo muuttuja nimeltään isStudent ja anna sille totuusarvo (boolean).
- Luo muuttuja nimeltään hobbies ja anna sille taulukko, joka sisältää muutamia merkkijonoarvoja (esim. harrastukset).
- Luo info-olio eli objekti, jossa on kaksi ominaisuutta: schoolName (merkkijono) ja grade (kokonaisluku).

- Käytä console.log() -metodia tulostamaan jokainen muuttuja konsoliin.

- Käytä typeof-operatoria tarkistaaksesi jokaisen muuttujan tietotyypin ja tulosta tulos console.log()-metodilla.
*/

let age = 20;
let name = "Pekka";
let isStudent = true;
let hobbies = ["jalkapallo", "kitaran soitto", "kuntosali"];
let info = {
  schoolName: "Bussiness College Helsinki",
  grade: 10,
};

console.log("Age:", age);
console.log("Name:", name);
console.log("Is studen:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Info:", info);
// printtaa muuttujan tietotyypin.
console.log("Type of age:", typeof age); //esim. tämä printtaa = Type of age: number (määritelty srting ja muuttujan tietotyypin)
console.log("Type of name:", typeof name);
console.log("Type of isStundent:", typeof isStudent);
console.log("Type of hobbies:", typeof hobbies);
console.log("Type of info:", typeof info);
