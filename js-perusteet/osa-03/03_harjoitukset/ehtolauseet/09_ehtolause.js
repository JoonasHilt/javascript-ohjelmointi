/**Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma
 * antaa satunnaisen vastauksen 8-pallosta. Toteuta ohjelma käyttämällä ehtolauseita valitsemaan ja näyttämään yksi useista ennalta määritellyistä vastauksista. */

let magic8Ball = Math.floor(Math.random() * 4);
switch (magic8Ball) {
  case 0:
    console.log("Ei");
    break;
  case 1:
    console.log("Kyllä");
    break;
  case 2:
    console.log("Väärä vastaus");
    break;
  case 3:
    console.log("lähde kotiin");
}
