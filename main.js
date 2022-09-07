let value = ' ';
let value2 = ' ';
let operation = ' ';
let outputText = document.createElement('div');
outputText.innerHTML = value+operation+value2;
document.body.appendChild(outputText);

document.getElementById('zero').addEventListener('click', function inputZero(){
    if(typeof value == 'string') {
        value = value + '0';
    } else { value2 = value2 + '0'}
    outputText.innerHTML = value+operation+value2;
});
document.getElementById('one').addEventListener('click', function inputOne(){
    if(typeof value == 'string') {
        value = value + '1';
    } else {value2 = value2 + '1'}
    outputText.innerHTML = value+operation+value2;
});
document.getElementById('two').addEventListener('click', function inputTwo(){
    if(typeof value == 'string') {
        value = value + '2';
    } else {value2 = value2 + '2'}
    outputText.innerHTML = value+operation+value2;
});
document.getElementById('three').addEventListener('click', function inputThree(){
    if(typeof value == 'string') {
        value = value + '3';
    } else {value2 = value2 + '3'}
    outputText.innerHTML = value+operation+value2;
});
document.getElementById('four').addEventListener('click', function inputFour(){
    if(typeof value == 'string') {
        value = value + '4';
    } else {value2 = value2 + '4'}
    outputText.innerHTML = value+operation+value2;
});
document.getElementById('five').addEventListener('click', function inputFive(){
    if(typeof value == 'string') {
        value = value + '5';
    } else {value2 = value2 + '5'}
    outputText.innerHTML = value+operation+value2;
});
document.getElementById('six').addEventListener('click', function inputSix(){
    if(typeof value == 'string') {
        value = value + '6';
    } else {value2 = value2 + '6'}
    outputText.innerHTML = value+operation+value2;
});
document.getElementById('seven').addEventListener('click', function inputSeven(){
    if(typeof value == 'string') {
        value = value + '7';
    } else {value2 = value2 + '7'}
    outputText.innerHTML = value+operation+value2;
});
document.getElementById('eight').addEventListener('click', function inputEight(){
    if(typeof value == 'string') {
        value = value + '8';
    } else {value2 = value2 + '8'}
    outputText.innerHTML = value+operation+value2;
});
document.getElementById('nine').addEventListener('click', function inputNine(){
    if(typeof value == 'string') {
        value = value + '9';
    } else {value2 = value2 + '9'}
    outputText.innerHTML = value+operation+value2;
});

document.getElementById('addition').addEventListener('click', function addValues(){
    value = Number(value);
    operation = '+';
    outputText.innerHTML = value+operation+value2;
});
document.getElementById('subtract').addEventListener('click', function subtractValues(){
    value = Number(value);
    operation = '-';
    outputText.innerHTML = value+operation+value2;
});
document.getElementById('multiply').addEventListener('click', function multiplyValues(){
    value = Number(value);
    operation = '*';
    outputText.innerHTML = value+operation+value2;
});
document.getElementById('divide').addEventListener('click', function divideValues(){
    value = Number(value);
    operation = '/';
    outputText.innerHTML = value+operation+value2;
});

document.getElementById('clear').addEventListener('click', function clear(){
    value = ' ';
    value2 = ' ';
    operation = ' ';
    outputText.innerHTML = value+operation+value2;
});

document.getElementById('enter').addEventListener('click', function equals() {
    if(operation === '+') {
        return outputText.innerHTML = Number(value) + Number(value2); 
    } else if(operation === '-'){
        outputText.innerHTML = Number(value) - Number(value2); 
    } else if(operation === '*'){
        outputText.innerHTML = Number(value) * Number(value2);
    } else { 
        outputText.innerHTML = Number(value) / Number(value2);
    }
});

// need to add in the decimal
