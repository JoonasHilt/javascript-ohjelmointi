/*
- Luo muuttuja nimeltä 'num1' ja anna sille liukulukuarvo.
- Luo muuttuja nimeltä 'num2' ja anna sille eri liukulukuarvo.

- Pyöristä sekä 'num1' että 'num2' lähimpään kokonaislukuun ja tallenna tulokset muuttujiin 'roundedNum1' ja 'roundedNum2'.
- Laske neliöjuuri 'roundedNum1':stä ja tallenna se muuttujaan nimeltä 'sqrtNum1'.
- Etsi suurempi numero 'roundedNum1':n ja 'roundedNum2':n välillä ja tallenna se muuttujaan nimeltä 'maxNum'.

- Käytä console.log() -funktiota tulostamaan 'roundedNum1', 'roundedNum2', 'sqrtNum1' ja 'maxNum' konsoliin.
- Käytä typeof operaattoria tarkistaaksesi jokaisen uuden muuttujan tietotyypin ja tulosta tulos käyttäen console.log().
*/

/* liukuarvot */

let num1 = 5.8;
let num2 = 7.4;

/* Pyöristetään arvot lähimpään kokonaislukuun */

let roundedNum1 = Math.round(num1);
let roundedNum2 = Math.round(num2);

/* lasketaan neilöjuuri */

let sqrtNum1 = Math.sqrt(roundedNum1);

/* Etsitään suuermpi numero */

let maxNum = Math.max(roundedNum1, roundedNum2);

/* konsolit printtaukseen */

console.log("roundedNum1:", roundedNum1);
console.log("roundedNum2:", roundedNum2);
console.log("sqrtNum1:", sqrtNum1);
console.log("maxNum:", maxNum);

/* tarkistetaan muuttujien tietotyypit */
console.log("type of rounedNum1:", typeof roundedNum1);
console.log("type of rounedNum2:", typeof roundedNum2);
console.log("type of sqrtNum:", typeof sqrtNum1);
console.log("type of maxNum:", typeof maxNum);
