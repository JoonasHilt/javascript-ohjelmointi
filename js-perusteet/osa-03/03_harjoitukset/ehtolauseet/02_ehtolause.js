/**
 * Tätä ohjelmaa varten tarvitaan verkkosivua, eli se ei toimi pelkästään konsolissa.
 * Joten tee ensin html sivu ja linkkaa tämä tiedosto siihen. Prompt-ikkuna aukeaa sivulle, testaa Live serverin avulla.
 * Luo ohjelma getTemperature, joka kysyy käyttäjältä lämpötilaa Celsius-asteina ja sitten tulostaa, pitäisikö heidän pukea takki päälle (jos lämpötila on alle 15°C) vai ei.
 */
function getTemperature(temp) {
  if (temp < 15) {
    console.log("Kannattaa laittaa takki päälle! ");
  } else {
    console.log("Et tarvitse takkia ulkona!");
  }
}

let esimerkki = prompt("Mikä on nykyinen lämpötila?");

let numero = Number(esimerkki);

getTemperature(numero);

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function whatTimeIsIt(time) {
  if (time > 15) {
    console.log("lähde kotiin");
  } else {
    console.log("Sinulla on vielä työpäivä kesken!");
  }
}
// Kutsu tekemääsi funktiota

let kysy_aika = prompt("Paljon kello on?");

let syötä_aika = Number(kysy_aika);

whatTimeIsIt(syötä_aika);
