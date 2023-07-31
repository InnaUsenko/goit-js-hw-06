let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const result = document.querySelector("#value");
decrementBtn.addEventListener("click", () => {
  result.textContent = --counterValue;
});
increment.addEventListener("click", () => {
  result.textContent = ++counterValue;
});

