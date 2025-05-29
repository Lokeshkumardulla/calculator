let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('result').value = '';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput;
}

function calculate() {
    try {
        const result = eval(currentInput);
        document.getElementById('result').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9+\-*/.=]/.test(key)) {
        if (key === '=' || key === 'Enter') {
            calculate();
        } else {
            appendToDisplay(key);
        }
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});