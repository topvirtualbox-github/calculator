const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const negative = document.querySelector("#negative");
const previous = document.querySelector("#previous");
const current = document.querySelector("#current");

let n1 = "";
let n2 = "";
let operator = "";

numbers.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "." && current.textContent.includes(".")) return;
        current.textContent += button.textContent;
    });
});

operations.forEach(button => {
    button.addEventListener("click", () => {
        if (current.textContent === "" && n1 === "" || current.textContent === "." || current.textContent === "-" || current.textContent === "-.") return;
        if (current.textContent === "") {
            operator = button.textContent;
            previous.textContent = previous.textContent.slice(0, -1) + operator;
            return;
        }
        if (n1 === "") {
            n1 = Number(current.textContent);
        } else {
            n2 = Number(current.textContent);
            n1 = operate(n1, n2);
            n2 = "";
        }
        operator = button.textContent;
        previous.textContent = n1 + " " + operator;
        current.textContent = "";
    });
});

equals.addEventListener("click", () => {
    if (n1 === "" || current.textContent === "" || current.textContent === "." || current.textContent === "-" || current.textContent === "-.") return;
    n2 = Number(current.textContent);
    previous.textContent += " " + n2 + " =";
    current.textContent = operate(n1, n2);
    n1 = "";
    n2 = "";
    operator = "";
});

clear.addEventListener("click", () => {
    previous.textContent = "";
    current.textContent = "";
    n1 = "";
    n2 = "";
    operator = "";
});

backspace.addEventListener("click", () => {
    current.textContent = current.textContent.slice(0, -1);
});

negative.addEventListener("click", () => {
    if (current.textContent.includes("-")) {
        current.textContent = current.textContent.slice(1);
    } else {
        current.textContent = "-" + current.textContent;
    }
});

function operate(a, b) {
    if (operator === "+") return a + b;
    else if (operator === "-") return a - b;
    else if (operator === "*") return a * b;
    else if (operator === "/") return a / b;
    else if (operator === "%") return b / 100 * a;
}