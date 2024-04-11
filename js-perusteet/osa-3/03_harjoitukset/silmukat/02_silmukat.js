//Tee ohjelma, joka tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä, esittäen ne seuraavalla tavalla
//2, 98, 4, 96, 6, 62 ja niin edelleen. Tulosta luvut samalle riville.

//ohjelma
let tulos = "";
for (let evenInteger = 1; evenInteger <= 99; evenInteger++) {
  if (evenInteger % 2 === 0) {
    tulos += evenInteger + "";
  }
}

console.log(tulos);
