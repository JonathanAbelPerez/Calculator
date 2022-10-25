const showDisplay = document.querySelector('#display')
const numbers = document.getElementsByClassName('nums')
const operators = document.getElementsByClassName('operators')
const equalsButton = document.getElementById('equalsBtn')
const deleteButton = document.getElementById('deleteBtn')
const clearButton = document.getElementById('clearBtn')

let shouldResetScreen = false
let currentOperator = null
let num1 = 0
let num2 = 0
let sub = 0

// Add click event listener to all button elements and insert their inner text as value to the text field
Array.prototype.forEach.call(numbers, (button) => {
    button.addEventListener("click", () => {
        if (shouldResetScreen) { resetScreen() }
        showDisplay.textContent += button.innerText
        sub = parseInt(showDisplay.textContent, 10)
        console.log(sub)
    })
})

Array.prototype.forEach.call(operators, (button) => {
    button.addEventListener('click', () => {
        currentOperator = button.innerText
        showDisplay.textContent = currentOperator
        num1 = sub
        shouldResetScreen = true
    })
})

deleteButton.addEventListener('click', deleteNumber)
clearButton.addEventListener('click', clear)

if (equalsButton) {
    equalsButton.addEventListener('click', evaluate)
}

function deleteNumber() {
    showDisplay.textContent = showDisplay.textContent
        .toString()
        .slice(0, -1)
    sub = parseInt(showDisplay.textContent, 10)
}

function clear() {
    showDisplay.textContent = ''
    num1 = 0
    num2 = 0
    currentOperator = null
    sub = 0
}

function evaluate() {
    if (currentOperator === null || shouldResetScreen) return
    if (currentOperator === '/' && num2 === '0') {
        alert("You can't divide by 0!")
        return
    }
    num2 = sub
    result = roundResult(
        operate(currentOperator, num1, num2)
    )

    showDisplay.textContent = result
    sub = result
    //    lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperator = null
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function resetScreen() {
    showDisplay.textContent = ''
    shouldResetScreen = false
}

function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return substract(a, b)
        case '×':
            return multiply(a, b)
        case '/':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}