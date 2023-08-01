function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector("#controls > button[data-create]");
const destroyBtn = document.querySelector("#controls > button[data-destroy]");
const numberInput = document.querySelector('#controls > input[type="number"]');
const outDiv = document.querySelector("#boxes");

const divArra = [];

createBtn.addEventListener("click", (event) => {
  for (let index = 1; index <= numberInput.value; index++) {
    const newDiv = document.createElement("div");
    const width = 20 + 10 * index;
    const height = 20 + 10 * index;
    newDiv.classList.add("div-" + index);
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;

    divArra.push(newDiv);
  }

  outDiv.append(...divArra);
});

destroyBtn.addEventListener("click", (event) => {
  divArra.length = 0;
  outDiv.replaceChildren();
});
