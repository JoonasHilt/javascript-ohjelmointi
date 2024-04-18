/**
Kehitä funktio nimeltä assignGrade, joka:

Hyväksyy yhden argumentin, numeerisen pistemäärän.
Palauttaa kirjainarvosanan pistemäärän perusteella seuraavasti:
- 'A' pistemäärille 90 tai enemmän.
- 'B' pistemäärille 80-89.
- 'C' pistemäärille 70-79.
- 'D' pistemäärille 60-69.
- 'F' pistemäärille alle 60.

*/

//Funktio-->
function assignGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 81) {
    return "B";
  } else if (score >= 72) {
    return "C";
  } else if (score >= 64) {
    return "D";
  } else if (score >= 42) {
    return "F";
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log("Sinä sait " + assignGrade(95)); // Sinä sait A
console.log("Sinä sait " + assignGrade(81)); // Sinä sait B
console.log("Sinä sait " + assignGrade(72)); // Sinä sait C
console.log("Sinä sait " + assignGrade(64)); // Sinä sait D
console.log("Sinä sait " + assignGrade(42)); // Sinä sait F

// Treenaa: Keksi itse samanlainen funktio eri nimellä. Pisterajoja voi olla vähemmän kuin yllä.
function alykkyysOsamaara(ao) {
  if (ao >= 130) {
    return " Erittäin korkea";
  } else if (ao >= 115) {
    return " Korkea";
  } else if (ao >= 100) {
    return " Normaali";
  } else if (ao >= 85) {
    return " Matala";
  } else if (ao >= 70) {
    return " Erittäin matala";
  }
}

// Kutsu tekemääsi funktiota
console.log("Sinun ÄÖ on" + alykkyysOsamaara(130)); // Erittäin korkea
console.log("Sinun ÄÖ on" + alykkyysOsamaara(115)); // korkea
console.log("Sinun ÄÖ on" + alykkyysOsamaara(100)); // Normaali
console.log("Sinun ÄÖ on" + alykkyysOsamaara(85)); // Matala
console.log("Sinun ÄÖ on" + alykkyysOsamaara(70)); // Erittäin matala
