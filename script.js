const numbers = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const previous = document.querySelector("#previous");
const current = document.querySelector("#current");

numbers.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "." && current.textContent.indexOf(".") === -1) {
            current.textContent += button.textContent;
        } else if (button.textContent !== ".") {
            current.textContent += button.textContent;
        }
    });
});

clear.addEventListener("click", () => {
    current.textContent = "";
});