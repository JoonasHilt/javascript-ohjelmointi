//Tee ohjelma, joka tulostaa kaikki parittomat numerot 1 ja 100 välillä. Eli 1, 3, 5, 7, 9, 11 jne.

for (let number = 1; number <= 100; number++) {
  if (number % 2 !== 0) {
    console.log(number);
  }
}
