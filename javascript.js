//Declaring constants
const mainScreen = document.querySelector(".displayed");
const secondScreen = document.querySelector(".equation")
let nextOperator = "";
// first and second number are used to save values in memory
let firstNumber = ""; 
let secondNumber = ""; 
// displayNumber is used to display typed values and results
let displayNumber = 0;
let clearFlag = true;

function operation(a,b,operator){
    // In : a, b - numbers
    //      operator - a string of on of these symbols (+ , - , / , *)
    // Out : returns a Number
    console.log(`Calculating `,a,operator,b)
    b = parseFloat(b);
    a = parseFloat(a);
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
        case "=":
            return b;
            break;
    }
}

//Event listener for buttons:
const buttons = document.querySelectorAll(".button");
buttons.forEach((button)=> {
button.addEventListener("click",(e)=>{
    inputButton(e.target);
})
})

//create a function that directs inputs to the screen:
function inputButton(element){
    const newStr = element.textContent

    // Digit class elements gets printed on screen
    if(element.classList.contains("digit")){
        if (clearFlag){
            displayNumber = "";
            clearFlag = false;
        }
        if (displayNumber == 0 ){
            displayNumber = newStr;
        }else if (newStr == "." && displayNumber.includes(".")){
            //do nothing
        }else{
            displayNumber+= newStr    
        }
        display(displayNumber)
    }

    //clear
    if(element.classList.contains("clear")){
        clearDisplay();
    }

    if(element.classList.contains("del")){
        // edited = mainScreen.textContent.slice(0,-1);
        // mainScreen.textContent = edited;
        displayNumber = displayNumber.slice(0,-1)
        display(displayNumber)
    }

    if(element.classList.contains("equals")){
        secondNumber = displayNumber;
        displayNumber = operation(firstNumber, secondNumber, nextOperator);
        display(displayNumber, equals = true)
        clearFlag = true;
        secondNumber="";
        firstNumber= displayNumber;

    }



    // operators elements get assigned to nextOperator
    if(element.classList.contains("operator")){
        
        if(firstNumber===""){
            firstNumber = displayNumber;
        }else if(!clearFlag){
            console.log("writing second ")
            secondNumber= displayNumber;
            // nextOperator = element.textContent;
        }
        clearFlag=true;
        // displayNumber="";
        
        if(firstNumber !== "" && secondNumber !== ""&& nextOperator!== ""){
            displayNumber = operation(firstNumber, secondNumber, nextOperator);            
            firstNumber=displayNumber;
            secondNumber="";
            display(displayNumber);
        }
        nextOperator = element.textContent;
        display(displayNumber);
        }


}


function display(strNumber, equals=false){
    //displays strNumber on .screen element
    mainScreen.textContent = strNumber;
    secondScreen.textContent= `${firstNumber} ${nextOperator} ${secondNumber}`;
    if(equals) {secondScreen.textContent += " = "}
}

function clearDisplay(){
    // Clears the whole screen an reset the numbers.
    mainScreen.textContent = "0";
    secondScreen.innerHTML = "<wbr>";
    firstNumber = secondNumber = nextOperator=  "";

    displayNumber=0;
}

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