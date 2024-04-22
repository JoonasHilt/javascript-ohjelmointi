/* 
Kirjoita JavaScript-koodi, joka lisää tapahtumankäsittelijän napille.

Kun nappia klikataan, funktion tulisi:
- Hakea arvo syötekentästä.
- Luoda uusi <li> elementti ja asettaa sen tekstisisältö syötekentän arvoksi.
- Lisätä uusi <li> elementti hedelmälistan <ul>-elementtiin.

Varmista, että syötekenttä tyhjennetään hedelmän lisäämisen jälkeen.
*/

function addFruitBtn() {
  // hakee inputin ja sen arvon
  const input = document.getElementById("fruitInput");
  const inputValue = input.value;

  // tarkistaa jos syöttökenttä on tyhjä promptaa alertin ja lopettaa funktion toteutumisen jotta ei tule tyhjää lsita elementtiä
  if (inputValue === "") {
    alert("LISÄÄ HEDELMÄ LISTAAN!");
    return;
  }

  // tee uusi li element
  const newListItem = document.createElement("li");
  newListItem.textContent = inputValue;

  // hakee ul elementin ja lisää li elementin sinne
  const list = document.getElementById("fruitList");
  list.appendChild(newListItem);

  // tyhjentään input kentän edellisen syötön jälkeen
  input.value = "";
}
