document.addEventListener("DOMContentLoaded", function () {
  // määritellään muuttujat
  const typeSelect = document.getElementById("type");
  const toppingCheckboxes = document.querySelectorAll(
    ".customization-section input[type='checkbox']"
  );
  const totalPriceDisplay = document.querySelector(
    ".price-display #totalPrice"
  );
  const basePriceDisplay = document.querySelector("#basePrice");

  // Funktio päivittämään total pricen
  function updateTotalPrice() {
    let basePrice = parseInt(typeSelect.value); // hakee base pricen valitusta vaihtoehdosta
    let totalPrice = basePrice; // aloittaa total pricen base pricen valinnalla

    // Lisää hinnat checkboxeista
    toppingCheckboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        totalPrice += parseInt(checkbox.value);
      }
    });

    // päivittää näkymän total pricelle ja base pricelle
    totalPriceDisplay.textContent = totalPrice + "€";
    basePriceDisplay.textContent = basePrice + "€";
  }

  typeSelect.addEventListener("change", updateTotalPrice);
  toppingCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateTotalPrice);
  });
});
