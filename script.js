function roundNumber(num1){
    return Math.round(num1 * 100) / 100;
}

function add(num1, num2){
    if( num2 === '' ){
        return parseFloat(num1) + parseFloat(num1);
    } else{
        return parseFloat(num1) + parseFloat(num2);
    }
}

function subtract(num1, num2){
    if ( num2 === ''){
        return num1 - num1;
    } else{
        return num1 - num2;
    }
}

function multiply(num1, num2){
    if ( num2 === '' ){
        return num1 * num1;
    } else{
        return num1 * num2;
    }
}

function divide(num1, num2){
    if( num2 === '0'){
        clearVariables();
        display.textContent = 'Nope';
    }else if (num2 === '') {
        return num1 / num1;
    } else {
        return num1 / num2;
    }
    
}

function percentage(num1){
    lastNumber = Math.round((parseFloat(num1) / 100) * 100) / 100;
    displayValue(lastNumber);
    operated = true;
    operationPerformed = true;
}

function reverseSign(num1){
    if ( num1 === 0 ){
        firstNumber = 0;
    } else {
        firstNumber = Math.round((num1 * -1) * 100) / 100;
    }
    displayValue(firstNumber);
}

function decimal(targetId,num1,flag){
    if ( flag === false ){
        updateButton(targetId);
        displayContent(targetId);
    }
    if ( num1 === '' || num1 === '0' ){
        displayValue('0.');
    }
    
}

function operate(num1,num2,operator){
    switch(operator){
        case `+`:
            lastNumber = add(num1,num2);
            break;
        case `-`:
            lastNumber = subtract(num1,num2);
            break;
        case `*`:
            lastNumber = multiply(num1,num2);
            break;
        case `/`:
            lastNumber = divide(num1,num2);   
            break;
        case `%`:
            lastNumber = percentage(num1);
            break;
            
    }
    operator = '';
    if ( lastNumber !== undefined ){
        lastNumber = roundNumber(lastNumber);
        displayValue(lastNumber);
    }
    
}

function updateButton(btnId){
    const button = document.querySelector(`#${btnId}`);
    if(button.tagName != 'DIV'){
        let buttonValue = button.textContent;
        firstNumber += buttonValue;
        inputCounter++;
        return firstNumber;
    }
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
    if (button.tagName != 'DIV'){
        let buttonValue = button.textContent;
        display.textContent += buttonValue;
    }
}

function displayValue(value){
    display.textContent = value;
}

function checkOperation(){
    display.textContent = '';
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
    floatingPoint = false;
    inputCounter = 0;
    display.textContent = '0';
}

function checkNextOperation(){
    if ( answered == true && operated == false ){
        display.textContent = '';
        clearVariables();
    }
    if( operationPerformed === true ){
        display.textContent = '';
        operationPerformed = false;
    } else if ( operationPerformed === false && display.textContent === '0'){
        display.textContent = '';
    }
}

function processOperation(targetId){
    checkOperation();
    operator = storeOperator(targetId);
    operated = true;
    operationPerformed = true;
    floatingPoint = false;
    inputCounter = 0;
}

function processAnswerVariables(){
    firstNumber = lastNumber;
    lastNumber = '';
    operated = false;
    answered = true;
    inputCounter = 0;
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
        case `btn15`:
            percentage(firstNumber);
            break;
        case `btn17`:
            checkNextOperation();
            decimal(event.target.id, firstNumber, floatingPoint);
            floatingPoint = true;
            break;
        case `btn18`:
            reverseSign(firstNumber);
            break;
        case `btn10`:
            operate(lastNumber, firstNumber, operator);
            processAnswerVariables();
            break;
        default:
            if(inputCounter <= MAX_INPUT_NUMBER){
                checkNextOperation();
                updateButton(event.target.id);
                displayContent(event.target.id);
            }
    }

}

const NUMBER_OF_BUTTONS = 18;
const MAX_INPUT_NUMBER = 10;

let firstNumber = '';
let lastNumber = '';
let operator;
let lastOperator = '';
let answered = false;
let operated = false;
let operationPerformed = false;
let floatingPoint = false;
let inputCounter = 0;

const buttonContainer = document.querySelector('.buttonContainer');
const display = document.querySelector('#display');

displayValue(0);

buttonContainer.addEventListener('click', (event) => {
    getButtonClicked(event, NUMBER_OF_BUTTONS);
});


