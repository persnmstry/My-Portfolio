
const display = document.getElementById("Display");

function appendtoDisplay(input){
    display.value += input;
}

function calculate(){
    display.value = eval(display.value);
}

function clearDisplay(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
    display.value = "";
}