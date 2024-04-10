/** Tehtävä: Ostoskori
 * Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
 * - Määrittele muuttujat kullekin ostoskorissa oleville tuotteille ja niiden hinnoille.
 * - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
 * - Tulosta yhteishinta konsoliin.
 */

/* määritellään muuttujat tuotteille*/
let kitara = 1300;
let vahvistin = 2000;
let kaapelit = 23.5;

/* lasketaan yhteishinta uuteen muuttujaan */

let summa = kitara + vahvistin + kaapelit;

/* tulostetaan yhteishinta konsoliin */

console.log("Yhteishinta:", summa);
