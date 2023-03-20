const ref = {
    textInput: document.getElementById("name-input"),
    
    output: document.getElementById("name-output"),

} 


ref.textInput.addEventListener("input", (event) => {
    ref.output.textContent = event.currentTarget.value;
    if (event.target.value.trim() === "") {
ref.output.textContent = "Anonymous";
    }
});
