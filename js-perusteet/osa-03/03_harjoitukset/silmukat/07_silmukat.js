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

//toinen vaihtoehto alapuolella for loopilla
let sum = 0;
let lukujenMaara = 0;
let numerot = [];

for (let input = 0; input < 10; input++) {
  let input = Number(prompt("Anna lukuja laskuihin."));
  sum += input;
  lukujenMaara++;
  numerot.push(input); // pistää syötetyt numerot listaan
  console.log("Syötetty luku:", input); // printtaa konsoliin syöttäessä lukuja
}

let average = summa / lukujenMaara;
console.log("Lukujen keskiarvo on", average);
console.log("Lukujen lopullinen summa on:", sum);
console.log("Pienin numero on:", Math.min(...numerot)); // käytetään spread operaattoria joka laajentaan joukon numeroita yksittäisiksi elementeiksi jotta Mat.min/max osaa poimia sieltä oikean
console.log("Suurin numero on:", Math.max(...numerot));
