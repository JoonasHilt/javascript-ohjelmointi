/** Harjoitus: Kolmion pinta-ala
 * Tee funktio nimeltä laskeKolmionPintaala, joka ottaa kaksi parametria: kannanPituus ja korkeus.
 * Funktio laskee annetun kolmion pinta-alan kaavalla kannanPituus * korkeus / 2  ja palauttaa sen.
 * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin.
 * Voit käyttää joko nuolifunktiota tai tavallista funktiota*/

// tehdään funktio

function laskeKolmionPintaala(kannanPituus, korkeus) {
  return (kannanPituus * korkeus) / 2;
}

//konsoliin printtaukset

console.log(laskeKolmionPintaala(5, 5));
console.log(laskeKolmionPintaala(5, 7));
console.log(laskeKolmionPintaala(5, 8));
