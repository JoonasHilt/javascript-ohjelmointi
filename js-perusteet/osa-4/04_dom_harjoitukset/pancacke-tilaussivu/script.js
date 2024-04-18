//---//
document.addEventListener("DOMContentLoaded", function () {
  // määritellään muuttujat
  const typeSelect = document.getElementById("type");
  const toppingCheckboxes = document.querySelectorAll(
    ".customization-section input[type='checkbox']"
  );
  //päivitettävä hinta
  const totalPriceDisplay = document.querySelector(
    ".price-display #totalPrice"
  );

  //funktio kokonaishinnan päivittämiseen
  function updateTotalPrice() {
    let totalPrice = parseInt(typeSelect.value);

    //lisää lisukkeiden hinnat
    toppingCheckboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        totalPrice += parseInt(checkbox.value);
      }
    });

    //päivitä kokonaishinta näytölle
    totalPriceDisplay.textContent = totalPrice + "€";
  }

  //valinnoille evenlistenerit
  typeSelect.addEventListener("change", updateTotalPrice);
  toppingCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateTotalPrice);
  });
});
