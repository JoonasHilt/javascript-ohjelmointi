// Kehitä ohjelma, joka jatkaa käyttäjän pyytämistä syöttämään numeroita, kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää kaikkien syötettyjen numeroiden keskiarvo.

let numbs; // tallentaa syötetyn numeron
let lukumaara = 0; // pitää krijaa syötettyjen numeroiden määrästä
let summa = 0; // pitää krijaa syötettyjen numeroiden summasta

// ikunen silmukka while (ture) komennolla kunnes se keskeytetään break käskyllä!
while (true) {
  numbs = Number(prompt("Syötä numero!")); // pyytä syöttämään numeron joka tallennetaan muuttujaan numbs.

  if (numbs === 0) {
    // jos syötetty numero 0, silmukka keskeytetään ja tulostetaan "ohjelma päättyi numeroon 0"
    console.log("Ohjelma päättyi numeroon 0");
    break;
  }

  summa += numbs;
  lukumaara++;
}

if (numbs === 0);
{
  let keskiArvo = summa / lukumaara;
  console.log("Syötettyjen lukujen keskiarvo on:", keskiArvo);
}
