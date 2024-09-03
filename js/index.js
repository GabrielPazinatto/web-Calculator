import { calculate_expression } from "./parser.js"

const bClear = document.getElementById('b-clear');
const bResult = document.getElementById('b-result')

const inputField = document.getElementById('input');
const resultField = document.getElementById('result');

bResult.addEventListener('click', () =>{
    const text = inputField.value;
    const r = calculate_expression(text);
    resultField.textContent = r.toFixed(2);
});

bClear.addEventListener('click', ()=>{
    inputField.value = '';
    resultField.textContent = '';
});

