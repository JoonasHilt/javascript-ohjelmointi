/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/

let summa = 0;
let lukumaara = 0;

//looppi alkaa

while (true) {
  let numbs = Number(prompt("Syötä numero!"));
  summa += numbs;
  lukumaara++;

  let jatka = prompt("Haluatka jatkaa numeroiden syöttämistä?(k/e)");
  if (jatka !== "k") {
    // jos käyttäjä vastaa muutakuin 'k' looppi loppuu
    break;
  }
}

if (lukumaara > 0) {
  let keskiArvo = summa / lukumaara;
  console.log("Syötettyjen lukujen keskiarvo on:", keskiArvo);
}
