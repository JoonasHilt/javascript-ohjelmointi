/**
Kirjoita funktio nimeltä pluralize, joka:

Hyväksyy kaksi argumenttia: substantiivin ja numeron.
Palauttaa merkkijonon, joka yhdistää numeron ja sopivasti taipuvan muodon substantiivista, kuten '5 kissaa' tai '1 koira'.

 */

function pluralize(substantiivi, määrä) {
  if (määrä === 0) {
    return `${määrä} ${substantiivi}` + "a";
  } else if (määrä >= 1) {
    return `${määrä} ${substantiivi}` + "a";
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log("Minulla on " + pluralize("kala", 0));
console.log("Minulla on " + pluralize("koira", 1));
console.log("Minulla on " + pluralize("papukaija", 7));

// Treenaa: Keksi itse samanlainen funktio eri nimellä.
function monikko(esine, kpl) {
  if (kpl === 1) {
    return `${kpl} ${esine}` + "n";
  } else if (kpl <= 2) {
    return `${kpl} ${esine}` + "tta";
  } else if (kpl >= 4) {
    return `${kpl} ${esine}` + "a";
  }
}
// Kutsu tekemääsi funktiota
console.log("Omistan " + monikko("auto", 1));
console.log("Omistan " + monikko("lentokone", 2));
console.log("Omistan " + monikko("Asunto", 4));
