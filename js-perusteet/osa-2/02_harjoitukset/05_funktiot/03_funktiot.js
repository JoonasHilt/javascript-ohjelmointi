/** Harjoitus: Neliön pinta-ala
 * Tee funktio nimeltä laskeNelionPintaala, joka ottaa yhden parametrin: sivunPituus.
 * Funktio laskee annetun neliön pinta-alan kaavalla sivunPituus * sivunPituus ja palauttaa sen.
 * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin.
 * Voit käyttää joko nuolifunktiota tai tavallista funktiota*/

// käytetään uutta funktiota

function laskeNelionPintaala(sivunPituus) {
  return sivunPituus * sivunPituus;
}

//konsoli printit
console.log(laskeNelionPintaala(5));
console.log(laskeNelionPintaala(10));
console.log(laskeNelionPintaala(15));
