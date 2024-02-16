function add(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1,num2,operator){
    return operator(num1,num2);
}

function createButton(childClass, parentClass = 'buttonContainer'){
    const parentDiv = document.querySelector(`.${parentClass}`);
    const newButton = document.createElement('button');
    newButton.setAttribute('class',childClass);
    parentDiv.appendChild(newButton);
}

function createGrid (numberOfButtons){
    for( let i = numberOfButtons; i >= 0; i-- ){
        createButton('calcButton');
    }    
}

let firstNumber;

let lastNumber;

let operator;


