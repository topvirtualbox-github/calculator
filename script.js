const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const previous = document.querySelector("#previous");
const current = document.querySelector("#current");

let n1 = "";
let n2 = "";
let operator = "";

numbers.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "." && current.textContent.indexOf(".") === -1) {
            current.textContent += button.textContent;
        } else if (button.textContent !== ".") {
            current.textContent += button.textContent;
        }
    });
});

operations.forEach(button => {
    button.addEventListener("click", () => {
        if (current.textContent === "" || current.textContent === ".") return;
        if (n1 === "") {
            n1 = Number(current.textContent);
            if (previous.textContent.indexOf("=") === -1) {
                previous.textContent += " " + current.textContent + " " + button.textContent;
            } else {
                previous.textContent = " " + current.textContent + " " + button.textContent;
            }
        } else if (n1 !== "") {
            n2 = Number(current.textContent);
            n1 = operate(n1, n2);
            previous.textContent = " " + n1 + " " + button.textContent;
            n2 = "";
        }
        operator = button.textContent;
        current.textContent = "";
    });
});

equals.addEventListener("click", () => {
    if (n1 === "" || current.textContent === "" || current.textContent === ".") return;
    n2 = Number(current.textContent);
    previous.textContent += " " + current.textContent + " =";
    current.textContent = operate(n1, n2);
    n1 = "";
    n2 = "";
    operator = "";
});

clear.addEventListener("click", () => {
    current.textContent = "";
    previous.textContent = "";
    n1 = "";
    n2 = "";
    operator = "";
});

backspace.addEventListener("click", () => {
    current.textContent = current.textContent.slice(0, -1);
});

function operate(a, b) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    } else if (operator === "%") {
        return b / 100 * a;
    }
}