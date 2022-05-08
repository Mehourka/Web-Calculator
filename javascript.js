function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operation(a,b,operator){
    // In : a, b - numbers
    //      operator - a string of on of these symbols (+ , - , / , *)
    // Out : returns a Number
    switch(operator){
        case "+":
            return add(a,b);
            break;
            
        case "-":
            return subtract(a,b);
                break;

        case "/":
            return divide(a,b);
            break;

        case "*":
            return multiply(a,b);
            break;
    }
}