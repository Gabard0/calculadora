let display = document.getElementById('display');
let currentNumber = '';
let currentOperator = '';
let result = 0;

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber + ' ' + (currentOperator !== '' ? currentOperator : '');
}

function appendOperator(operator) {
    if (currentOperator === '') {
        result = parseFloat(currentNumber);
    } else {
        result = evaluateExpression();
    }

    currentNumber = '';
    currentOperator = operator;
    display.value = currentNumber + ' ' + currentOperator;
}

function evaluateExpression() {
    switch (currentOperator) {
        case '+':
            return result + parseFloat(currentNumber);
        case '-':
            return result - parseFloat(currentNumber);
        case '*':
            return result * parseFloat(currentNumber);
        case '/':
            return result / parseFloat(currentNumber);
        default:
            return 0;
    }
}

function calculate() {
    result = evaluateExpression();
    display.value = result;
    currentNumber = '';
    currentOperator = '';
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    currentOperator = '';
}

// Event listener para o botão de modo escuro
let darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.setAttribute('aria-checked', 'true');
        localStorage.setItem('darkMode', 'true');
    } else {
        darkModeToggle.setAttribute('aria-checked', 'false');
        localStorage.setItem('darkMode', 'false');
    }
});

// Verificar o estado do modo escuro ao carregar a página
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.setAttribute('aria-checked', 'true');
} else {
    document.body.classList.remove('dark-mode');
    darkModeToggle.setAttribute('aria-checked', 'false');
}
