
let operator;
let x=0;
let y=0;

let number = document.querySelectorAll('.number');
let display = document.querySelector('.display');
let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let clear = document.querySelector('#clear');
let equal = document.querySelector('#equal')

number.forEach((num) => {
    num.addEventListener('click', function() {
        if (num == NaN)
            return;
        let digit = parseInt(num.textContent);
        if (!operator)
        {
            x=x*10+digit;
            display.textContent = x;
            return;
        }
         y=y*10+digit;
         display.textContent = x  +  operator  + y;
        
    })
});

const operators = document.querySelectorAll('.operator-btn')

operators.forEach((button => {
    button.addEventListener('click',function(e){
        operator=e.target.textContent;

        display.textContent += operator;
    })
}))


clear.addEventListener('click',function(){
    resetAll();
})

const operatorAdd = '+';
const operatorSub = '-';
const operatorDiv = '/';
const operatorMul = '*';

equal.addEventListener('click',function() {
    let result;
    if (operator === operatorAdd)
        result = x+y;
    else if(operator === operatorSub)
        result = x-y;
    else if (operator === operatorDiv)
        result = x/y;
    else if (operator === operatorMul)
        result = x*y;
    display.textContent=result;
    resetAll();
})

function resetAll() {
    x=0;
    y=0;
    operator=undefined;
    display.textContent = '';
}