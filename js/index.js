import { calculate_expression } from "./parser.js"

const bClear = document.getElementById('b-clear');
const bResult = document.getElementById('b-result')

const b1 = document.getElementById('b-1');
const b2 = document.getElementById('b-2');
const b3 = document.getElementById('b-3');
const b4 = document.getElementById('b-4');
const b5 = document.getElementById('b-5');
const b6 = document.getElementById('b-6');
const b7 = document.getElementById('b-7');
const b8 = document.getElementById('b-8');
const b9 = document.getElementById('b-9');
const b0 = document.getElementById('b-0');

const bMod = document.getElementById('b-mod');
const bErase = document.getElementById('b-erase');
const bDiv = document.getElementById('b-div');
const bAdd = document.getElementById('b-add');
const bMul = document.getElementById('b-mul');
const bExp = document.getElementById('b-exp');
const bSub = document.getElementById('b-sub');
const bLbrac = document.getElementById('b-lbrac');
const bRbrac = document.getElementById('b-rbrac');
const bDot = document.getElementById('b-dot');

const inputField = document.getElementById('input');
const resultField = document.getElementById('result');

/*-------------------------------------------
    CLEAR AND RESULT EVENT LISTENERS
-------------------------------------------*/

bResult.addEventListener('click', () =>{
    const text = inputField.value;
    const r = calculate_expression(text);
    resultField.textContent = r.toFixed(2);
});

bClear.addEventListener('click', ()=>{
    inputField.value = '';
    resultField.textContent = '';
});

/*-------------------------------------------
    OPEARTIONS BUTTONS EVENT LISTENERS
-------------------------------------------*/

bMod.addEventListener('click', () => {
    inputField.value += '%';
});

bDiv.addEventListener('click', () => {
    inputField.value += '/';
});

bAdd.addEventListener('click', () => {
    inputField.value += '+';
});

bMul.addEventListener('click', () => {
    inputField.value += '*';
});

bErase.addEventListener('click', () => {
    inputField.value = inputField.value.slice(0, -1);
});

bExp.addEventListener('click', () => {
    inputField.value += '^';
});

bSub.addEventListener('click', () => {
    inputField.value += '-';
});

/*-------------------------------------------
    NUMERIC BUTTONS EVENT LISTENERS
-------------------------------------------*/

b1.addEventListener('click', () => {
    inputField.value += '1';
});

b2.addEventListener('click', () => {
    inputField.value += '2';
});

b3.addEventListener('click', () => {
    inputField.value += '3';
});

b4.addEventListener('click', () => {
    inputField.value += '4';
});

b5.addEventListener('click', () => {    
    inputField.value += '5';
});

b6.addEventListener('click', () => {
    inputField.value += '6';
});

b7.addEventListener('click', () => {
    inputField.value += '7';
});

b8.addEventListener('click', () => {    
    inputField.value += '8';
});

b9.addEventListener('click', () => {
    inputField.value += '9';
});

b0.addEventListener('click', () => {
    inputField.value += '0';
});

/*-------------------------------------------
    OTHER DIGITS BUTTONS EVENT LISTENERS
-------------------------------------------*/

bDot.addEventListener('click', () => {
    inputField.value += '.';
});

bLbrac.addEventListener('click', () => {
    inputField.value += '(';
}); 

bRbrac.addEventListener('click', () => {
    inputField.value += ')';
}); 