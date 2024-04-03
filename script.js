// Declare a variable 'd' to store the reference to the HTML element with the id 'display1'
let d = document.getElementById('display1');

// Define a function 'display' which takes a parameter 'value' and appends it to the value of the element referenced by 'd'
function display(value) {
    d.value += value;
}

// Defining a function 'clearDisplay' which sets the value of the element referenced by 'd' to an empty string
function clearDisplay() {
    d.value = '';
}

// Defining a function 'calculate' to evaluate the expression entered in the display and update the value of the display with the result
function calculate() {
    let result;
    try {
        result = eval(d.value); // Evaluate the expression entered in the display
        // If the result is undefined or NaN, update the display with 'Error', otherwise update it with the result
        if (result === undefined || isNaN(result)) {
            d.value = 'Error';
        } else {
            d.value = result;
        }
    } catch (error) {
        d.value = 'Error'; // If an error occurs during evaluation, update the display with 'Error'
    }
}

// Defining a function 'square' to calculate the square of the value entered in the display and update the display with the result
function square() {
    let currentValue = parseFloat(d.value); // Parse the current value in the display to a floating-point number
    // If the current value is a valid number, calculate its square and update the display with the result
    if (!isNaN(currentValue)) {
        d.value = currentValue * currentValue;
    }
}

// Defining a function 'backspace' to remove the last character from the value in the display
function backspace() {
    d.value = d.value.slice(0, -1); // Removing the last character from the value in the display
}
