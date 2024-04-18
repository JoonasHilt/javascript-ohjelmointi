/* 
- Luo muuttujat a ja b ja anna niille kokonaislukuarvot.
- Käytä yhteen-, vähennys-, kerto- ja jakolaskuoperaattoreita muuttujille a ja b. Tallenna jokainen tulos erilliseen muuttujaan (summa, erotus, tulo, osamäärä, jakojäännös).

- Käytä console.log() -metodia tulostamaan jokaisen operaation tulos konsoliin.

- Lisää kommentteja koodiin selittämään, mitä kukin operaatio tekee.
*/

/* luodaan muuttujat a ja b */

let a = 8;
let b = 2;

/* käytetään operaattoreita ja tallenetaan erilliseen muuttujaan */

let summa = a + b; // laskee a:n ja b:n yhteenlaskuna
let erotus = a - b; // laskee a:n ja b:n erotuksen
let tulo = a * b; // laskee a:n ja b:n kertolaskuna
let osamaara = a / b; // laskee a:n ja b:n jakolaskun
let jakojaannos = a % b; // laskee a:n ja b:n jakojäännoksen

/* tulostetaan vastaukset konsoliin */

console.log("summa on:", summa);
console.log("erotus on:", erotus);
console.log("tulo on:", tulo);
console.log("osamäärä on:", osamaara);
console.log("jakojäännos on:", jakojaannos);
