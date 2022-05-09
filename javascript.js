//Declaring constants
const mainScreen = document.querySelector(".displayed");
const secondScreen = document.querySelector(".equation")
let nextOperator = "";
let memNumber = "";
let newNumber = 0;
let clearFlag = false;

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
            newNumber = "";
            clearFlag = false;
        }
        if (newNumber == 0 ){
            newNumber = newStr;
        }else{
            // mainScreen.textContent += newStr;    
            newNumber+= newStr    
        }
        display(newNumber)
    }

    //clear
    if(element.classList.contains("clear")){
        clearDisplay();
    }

    if(element.classList.contains("del")){
        edited = mainScreen.textContent.slice(0,-1);
        mainScreen.textContent = edited;
    }



    // operators elements get assigned to nextOperator
    if(element.classList.contains("operator")){
        // if clearFlag
        nextOperator = element.textContent;


        clearFlag=true;
        if(!memNumber) {
            memNumber = 0;
        } 
        memNumber = operation(memNumber, newNumber, nextOperator);
        newNumber="";
        display(memNumber);
        }


}


function display(strNumber){
    //displays strNumber on .screen element
    mainScreen.textContent = strNumber;
    secondScreen.textContent= memNumber+ nextOperator+newNumber;
}

function clearDisplay(){
    // Clears the whole screen an reset the numbers.
    mainScreen.textContent = "0";
    secondScreen.innerHTML = "<wbr>";
    memNumber = newNumber = "";
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