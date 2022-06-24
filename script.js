alert("Welcome... Please enter the appropriate parameters");

function add(a, b) {
    alert("Answer: "+ (a) + " + " + (b) + " = " + (a + b));
}
function subtract(a, b) {
    alert("Answer: "+ (a) + " - " + (b) + " = " + (a - b));
}
function divide(a, b) {
    alert("Answer: " + (a) + " / " + (b) + " = " + (a / b));
}
function multiply(a, b) {
    alert("Answer: "+ (a) + " * " + (b) + " = " + (a * b));
}


function calculate(a, b, operation) {
    if (operation == "+") {
        add(a, b);
    } else if (operation == "-") {
        subtract(a, b);
    } else if (operation == "/") {
        divide(a, b);
    } else if (operation == "*") {
        multiply(a, b);
    } else {
        alert("Wrong Input.");
    }
}

let a = parseFloat(prompt("Please enter the first number: "));
let b = parseFloat(prompt("Please enter the second number: "));
let operation = prompt("Please enter the operation you would like to perform: add +, subtract -, divide /, multiply * ");

calculate(a, b, operation);