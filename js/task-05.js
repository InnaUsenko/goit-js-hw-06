const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
    let outputText = event.currentTarget.value;
    if (outputText.length < 1) {
        outputText = "Anonymous";
    }
    outputEl.textContent = outputText;
});