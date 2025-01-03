function takeValue(value) {
    const inputWindow = document.getElementById('inputwindow');
    inputWindow.value += value;
}

function clearInput() {
    document.getElementById('inputwindow').value = '';
}

function calculateResult() {
    const inputWindow = document.getElementById('inputwindow');
    const expression = inputWindow.value.replace(/×/g, '*').replace(/÷/g, '/');
    const result = eval(expression);
    inputWindow.value = result.toString().replace(/\*/g, '×').replace(/\//g, '÷');
}
