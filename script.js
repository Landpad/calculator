function add(num1, num2){
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if( num2 == 0){
        return 'What are you doing maquina?';
    }else {
    return num1 / num2;
    }
    
}

function operate(num1,num2,operator){
    switch(operator){
        case `+`:
            lastNumber = add(num1,num2);
            displayValue(lastNumber);
            break;
        case `-`:
            lastNumber = subtract(num1,num2);
            displayValue(lastNumber);
            break;
        case `*`:
            lastNumber = multiply(num1,num2);
            displayValue(lastNumber);
            break;
        case `/`:
            lastNumber = divide(num1,num2);
            displayValue(lastNumber);
            break;
            
    }
    operator = '';
    return lastNumber;
}

function createButton(childClass, parentClass = 'buttonContainer'){
    const parentDiv = document.querySelector(`.${parentClass}`);
    const newButton = document.createElement('button');
    newButton.setAttribute('class',childClass);
    parentDiv.appendChild(newButton);
}

function updateButton(btnId){
    const button = document.querySelector(`#${btnId}`);
    let buttonValue = button.textContent;
    firstNumber += buttonValue;
    return firstNumber;
}

function storeOperator(btnId){
    const button = document.querySelector(`#${btnId}`);
    let buttonValue = button.textContent;
    return buttonValue;
}

function reasignValues(value){
    lastNumber = value;
    firstNumber = '';
}

function displayContent(btnId){
    const button = document.querySelector(`#${btnId}`);
    let buttonValue = button.textContent;
    display.textContent += buttonValue;
}

function displayValue(value){
    display.textContent = value;
}

function checkOperation(){
    if(operated === false){
        reasignValues(firstNumber);
    }else {
        operate(lastNumber, firstNumber, operator);
        firstNumber = '';
    }
}

function clearVariables(){
    firstNumber = '';
    lastNumber = '';
    operator = '';
    operated = false;
    answered = false;
    display.textContent = '';
}

function checkNextOperation(){
    if ( answered == true ){
        display.textContent = '';
        clearVariables();
    }

    if( operationPerformed === true ){
        display.textContent = '';
        operationPerformed = false;
    }
}

function processOperation(targetId){
    operator = storeOperator(targetId);
    display.textContent = '';
    checkOperation();
    operated = true;
    operationPerformed = true;
}

function getButtonClicked(event){

    switch(event.target.id){
        case `btn16`:
            clearVariables();
            break;
        case `btn11`:
            processOperation(event.target.id);
            break;
        case `btn12`:
            processOperation(event.target.id);
            break;
        case `btn13`:
            processOperation(event.target.id);
            break;
        case `btn14`:
            processOperation(event.target.id);
            break;
        case `btn10`:
            operate(lastNumber, firstNumber, operator);
            answered = true;
            break;
        default:
            checkNextOperation();
            updateButton(event.target.id);
            displayContent(event.target.id);
        }

}

let firstNumber = '';
let lastNumber = '';
let operator;
let answered = false;
let operated = false;
let operationPerformed = false;

const buttonContainer = document.querySelector('.buttonContainer');
const display = document.querySelector('#display');

buttonContainer.addEventListener('click', (event) => {
    getButtonClicked(event, 18);
});
//Cuando vuelvo a tocar un boton de operacion al poner 2 valores ya me tiene que dar un resultado.


