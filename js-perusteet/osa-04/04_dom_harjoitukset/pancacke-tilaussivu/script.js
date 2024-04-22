document.addEventListener("DOMContentLoaded", function () {
  // Define variables
  const typeSelect = document.getElementById("type");
  const toppingCheckboxes = document.querySelectorAll(
    ".customization-section input[type='checkbox']"
  );
  const totalPriceDisplay = document.querySelector(
    ".price-display #totalPrice"
  );
  const basePriceDisplay = document.querySelector("#basePrice");

  // Function to update the total price
  function updateTotalPrice() {
    let basePrice = parseInt(typeSelect.value); // Get the base price from the select option
    let totalPrice = basePrice; // Start the total price with the base price

    // Add the prices of checked toppings
    toppingCheckboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        totalPrice += parseInt(checkbox.value);
      }
    });

    // Update the display for total price and base price
    totalPriceDisplay.textContent = totalPrice + "€";
    basePriceDisplay.textContent = basePrice + "€";
  }

  // Event listeners for select dropdown and checkboxes
  typeSelect.addEventListener("change", updateTotalPrice);
  toppingCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateTotalPrice);
  });
});
