//Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä
//tulostaa pienimmän ja suurimman numeron.

let summa = 0;
let lukumaara = 0;
let pienin = Number.POSITIVE_INFINITY; // alustaa suuerksi jotta mikä tahansa numero on pienempi!
let suurin = Number.NEGATIVE_INFINITY; // alustaa pieneksi jotta mikä tahansa numero on suuermpi!

// Looppi alkaa
while (lukumaara < 10) {
  let numbs = Number(prompt("Syötä numero!"));
  summa += numbs;
  lukumaara++;
  // tarksitaa onko syötetty numero pienempi kuin nykyinen pienin arvo, jos on päivitettään piennin muuttuja
  if (numbs < pienin) {
    pienin = numbs;
  }
  // sama kuin pienen numeron tarkistus!
  if (numbs > suurin) {
    suurin = numbs;
  }
}

if (lukumaara > 0) {
  let keskiArvo = summa / lukumaara;
  console.log("Syötettyjen lukujen summa on:", summa);
  console.log("Syötettyjen lukujen keskiarvo on:", keskiArvo);
  console.log("Pienin syötetty numero on:", pienin);
  console.log("Suurin syötetty numero on:", suurin);
}
