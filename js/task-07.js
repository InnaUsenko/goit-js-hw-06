const fontSizeControl = document.querySelector("#font-size-control");
const outputTextSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  outputTextSpan.style.fontSize = fontSizeControl.value + "px";
});
