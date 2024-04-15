let outputScreen = document.getElementById('ouput-screen');

// Function to display the numbers in output screen
function display(num) {
    outputScreen.value += num;
}

// Function to calculate the values
function calculate() {
    try {
        let expression = outputScreen.value;
        let result = evaluateExpression(expression);
        outputScreen.value = result;
    } catch (err) {
        alert("Invalid Expression");
    }
}

// Function to evaluate the expression
function evaluateExpression(expression) {
    let parts = expression.split(/(\+|-|\*|\/)/);
    let result = parseFloat(parts[0]);

    for (let i = 1; i < parts.length; i += 2) {
        let operator = parts[i];
        let operand = parseFloat(parts[i + 1]);

        switch (operator) {
            case '+':
                result += operand;
                break;
            case '-':
                result -= operand;
                break;
            case '*':
                result *= operand;
                break;
            case '/':
                if (operand === 0) {
                    throw new Error("Division by zero");
                }
                result /= operand;
                break;
            default:
                throw new Error("Invalid operator");
        }
    }
    return result;
}

// Function to clear the output values
function Clear() {
    outputScreen.value = "";
}

// Function to delete the last character
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}