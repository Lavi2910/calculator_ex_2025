let x=0
let y=0;
let result;
let operator;

let allNumbers = document.querySelectorAll(".number") //[{}]
let num1 = document.querySelector('#number-1');
let num2 = document.querySelector('#number-2');
let num3 = document.querySelector('#number-3');
let num4 = document.querySelector('#number-4');
let num5 = document.querySelector('#number-5');
let num6 = document.querySelector('#number-6');
let num7 = document.querySelector('#number-7');
let num8 = document.querySelector('#number-8');
let num9 = document.querySelector('#number-9');
let num0 = document.querySelector('#number-0');
let plus = document.querySelector('#add');
let equal = document.querySelector('#equal');
let display = document.querySelector('.display');
let clear = document.querySelector('#clear');
let subtract = document.querySelector('#subtract');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');

allNumbers.forEach(e => e.addEventListener('click', () => console.log()))

num1.addEventListener('click', function() {
    if (operator === undefined)
    {
        x=x*10+1;
        display.textContent = x;
    }
    else {
        y=y*10+1;
        display.textContent =x + operator + y;
    }
});

num2.addEventListener('click', function() {
    if (operator === undefined)
    {
        x=x*10+2;
        display.textContent = x;
    }
    else
        {
        y=y*10+2;
        display.textContent =x + operator + y;
    }
        }  );

num3.addEventListener('click', function() {
    if (operator === undefined)
    {
        x=x*10+3;
        display.textContent = x;
    }
    else {
        y=y*10+3;
        display.textContent = x + operator + y;
    }
});
num4.addEventListener('click', function() {
    if (operator=== undefined)
    {
        x=(x*10)+4;
        display.textContent = x;
    }
    else {
        y=(y*10)+4;
        display.textContent = x + operator + y;
    }
});
num5.addEventListener('click', function() {
    if (operator === undefined)
    {
        x=x*10+5;
        display.textContent = x;
    }
    else {
        y=y*10+5;
        display.textContent = x + operator + y;
    }
}); 
num6.addEventListener('click', function() {
    if (operator === undefined)
    {
        x=x*10+6;
        display.textContent = x;
    }
    else {
        y=y*10+6;
        display.textContent = x + operator + y;
    }
});
num7.addEventListener('click', function() {
    if (operator === undefined)
    {
        x=x*10+7;
        display.textContent = x;
    }
    else {
        y=y*10+7;
        display.textContent = x + operator + y;
    }
});
num8.addEventListener('click', function() {
    if (operator === undefined)
    {
        x=x*10+8;
        display.textContent = x;
    }
    else {
        y=y*10+8;
        display.textContent = x + operator + y;
    }
});
num9.addEventListener('click', function() {
    if (operator === undefined)
    {
        x=x*10+9;
        display.textContent += x;
    }
    else {
        y=y*10+9;
        display.textContent += y;
    }
});
num0.addEventListener('click', function() {
    if (operator === undefined)
    {
        x=x*10+0;
        display.textContent = x;
    }
    else {
        y=y*10+0;
        display.textContent = x + operator + y;
    }  
});

plus.addEventListener('click', function() {
    operator = '+';
    display.textContent += operator;
});

equal.addEventListener('click', function() {
    if (operator === '+') {
        result = x + y;
       
    }
    else if (operator === '-') {
        result = x - y;
       
    }
    else if (operator === '*') {
        result = x * y;
       
    }
    else if (operator === '/') {
        result = x / y;
       
    }

     display.textContent = result;
    operator = undefined;
    x=0;
    y=0;
    result=undefined;
});

clear.addEventListener('click', function() {
    x = 0;
    y = 0;
    result = undefined;
    operator = undefined;
    display.textContent = '';
});

subtract.addEventListener('click', function() {
    operator = '-';
    display.textContent += operator;
});

multiply.addEventListener('click', function() {
    operator = '*';
    display.textContent += operator;
});

divide.addEventListener('click', function() {
    operator = '/';
    display.textContent += operator;
});

