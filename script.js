let display = "0"
const showDisplay = document.querySelector('#display')

const one = document.querySelector('#btnone')
one.addEventListener('click', () => {
    showDisplay.textContent = "display"
})

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divie(a, b) {
    return a / b
}



function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b)
        case '−':
            return substract(a, b)
        case '×':
            return multiply(a, b)
        case '÷':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}