// Tee ohjelma, joka kysyy aluksi käyttäjältä, kuinka monta numeroa he haluavat syöttää.
//Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään jokainen näistä numeroista.
//Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja näyttää käyttäjän antamista numeroista pienin ja suurin.

let howManyNunmbers; // tallentaa syötön määrän
let numero; // käyttähän syöttö
let laskuri = 0;
let pienin = Number.POSITIVE_INFINITY;
let suurin = Number.NEGATIVE_INFINITY;

howManyNunmbers = +prompt("Kuinka monta numeroa haluat syöttää?");

while (true) {
  if (laskuri >= howManyNunmbers) {
    break;
  }

  numero = +prompt("Syötä numero:" + (laskuri + 1));
  laskuri++;

  if (numero < pienin) {
    pienin = numero;
  }
  if (numero > suurin) {
    suurin = numero;
  }
}
// printataan vastaukset konsoliin
console.log("Suurin numero on:", suurin);
console.log("Pienin numero on:", pienin);
