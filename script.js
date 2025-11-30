
let operator = undefined;
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
        let digit = parseInt(num.textContent);
        if (operator===undefined)
        {
            x=x*10+digit;
            display.textContent = x;
            return;
        }
         y=y*10+digit;
         display.textContent = x  +  operator  + y;
        
    })
});

add.addEventListener('click', function() {
    operator = '+'
    display.textContent += operator;
})

subtract.addEventListener('click', function() {
    operator = '-'
    display.textContent += operator;
})

divide.addEventListener('click', function() {
    operator = '/'
    display.textContent += operator;
})

multiply.addEventListener('click', function() {
    operator = '*'
    display.textContent += operator;
})

clear.addEventListener('click',function(){
    resetAll();
    display.textContent='';
})

equal.addEventListener('click',function() {
    let result;
    if (operator === '+')
        result = x+y;
    else if(operator === '-')
        result = x-y;
    else if (operator === '/')
        result = x/y;
    else if (operator ==='*')
        result = x*y;
    display.textContent=result;
    resetAll();
})

function resetAll() {
    x=0;
    y=0;
    operator=undefined;
}