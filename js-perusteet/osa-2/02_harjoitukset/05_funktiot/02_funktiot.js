// Kirjoita funktio multiply1 siten, että se palauttaa a:n ja b:n tulon (kertolaskun tulos). Käytä tavallista funktiota
// Kirjoita funktio multiply2, joka on nuolifunktio

//kirjoitetaan eka funktio

function multiply1(a, b) {
  return a * b;
}

//kirjoitetaan toka funktio nuolifunktiona
multiply2 = (a, b) => {
  return a * b;
};

// Esimerkkikäyttö - älä muokkaa
console.log(multiply1(2, 4));
console.log(multiply2(3, 2));
