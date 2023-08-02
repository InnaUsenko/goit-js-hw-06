const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  let outputText = event.currentTarget.value;
  inputEl.classList.remove("invalid");
  inputEl.classList.remove("valid");
  if (outputText.length != inputEl.dataset.length) {
    inputEl.classList.toggle("invalid");
  } else {
    inputEl.classList.toggle("valid");
  }
});
