function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const myBody = document.querySelector("body");
const myButton = document.querySelector("button.change-color");
const mySpan = document.querySelector("span.color");

myButton.addEventListener("click", (event) => {
  let bgColor = getRandomHexColor();
  myBody.style.backgroundColor = bgColor;
  mySpan.textContent = bgColor;
});
