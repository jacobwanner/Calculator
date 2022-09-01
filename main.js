let value = 'null';

document.getElementById('zero').addEventListener('click', function inputZero(){
    return value = 0;
});
document.getElementById('one').addEventListener('click', function inputOne(){
    return value = 1;
});
document.getElementById('two').addEventListener('click', function inputTwo(){
    return value = 2;
});
document.getElementById('three').addEventListener('click', function inputThree(){
    return value = 3;
});
document.getElementById('four').addEventListener('click', function inputFour(){
    return value = 4;
});
document.getElementById('five').addEventListener('click', function inputFive(){
    return value = 5;
});
document.getElementById('six').addEventListener('click', function inputSix(){
    return value = 6;
});
document.getElementById('seven').addEventListener('click', function inputSeven(){
    return value = 7;
});
document.getElementById('eight').addEventListener('click', function inputEight(){
    return value = 8;
});
document.getElementById('nine').addEventListener('click', function inputNine(){
    return value = 9;
});
document.getElementById('enter').addEventListener('click', function equals() {
    console.log(value);
});
document.getElementById('clear').addEventListener('click', function clear(){
    return value = 'null';
});
