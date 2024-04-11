/*
Luo ohjelma getTemperature, joka kysyy käyttäjältä lämpötilaa Celsius-asteina ja sitten tulostaa, pitäisikö heidän pukea takki päälle (jos lämpötila on alle 15°C) vai ei.
*/
function getTemperature(temp) {
  if (temp < 15) {
    console.log("Sinun kannattaa pukea takki päälle!");
  } else {
    console.log("Et tarvitse takkia ulkona!");
  }
}

let esimerkki = prompt("Mikä on nykyinen lämpötila?");

let numero = Number(esimerkki);

getTemperature(numero);

// Treenaa: Keksi itse samanlainen funktio eri nimellä

// Kutsu tekemääsi funktiota
