
const ref = {
textInput: document.getElementById("font-size-control"),

textSpan: document.getElementById("text"),

} 

ref.textInput.addEventListener("input", (sizeText) => {text.style.fontSize = sizeText.target.value + "px";});

