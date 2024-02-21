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
    return num1 / num2;
}

function operate(num1,num2,operator){
    switch(operator){
        case `+`:
            lastNumber = add(num1,num2);
            displayValue(lastNumber);
            break;
            
    }
    answered = true;
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
    if( answered == true ){
        display.textContent = '';
        display.textContent = buttonValue;
    }
}

function displayValue(value){
    display.textContent = value;
}

function checkStatus(status){
    if( answered == true ){
        firstNumber = '';
        lastNumber = '';
        displayValue('');
        answered = false;
    }
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

function getButtonClicked(event){

    switch(event.target.id){
        case `btn16`:
            clearVariables();
            break;
        case `btn11`:
            operator = storeOperator(event.target.id);
            display.textContent = '';
            checkOperation();
            
            operated = true;
            break;
        case `btn10`:
            operate(lastNumber, firstNumber, operator);
            break;
        default:
          //  checkStatus(answered);
            updateButton(event.target.id);
            displayContent(event.target.id);
        }

}

let firstNumber = '';
let lastNumber = '';
let operator;
let answered = false;
let operated = false;

const buttonContainer = document.querySelector('.buttonContainer');
const display = document.querySelector('#display');

buttonContainer.addEventListener('click', (event) => {
    getButtonClicked(event, 18);
});

//Cuando vuelvo a tocar un boton de operacion al poner 2 valores ya me tiene que dar un resultado.


