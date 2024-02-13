



// Load 2 numbers when site loads
window.onload = function RandomNumbers()
{
    number1 = Math.floor(Math.random() * 10) + 1    
    number2 = Math.floor(Math.random() * 10) + 1
    document.getElementById("numberone").innerHTML = number1;
    document.getElementById("numbertwo").innerHTML = number2;
    
}

//function to decrease first number and set it to div
function DecreaseFirstNumber()
{
    number1--
    document.getElementById("numberone").innerHTML = number1;
}
//function to increase first number and set it to div
function IncreaseFirstNumber()
{
    number1++
    document.getElementById("numberone").innerHTML = number1;    
}
function DecreaseSecondNumber()
{
    number2--
    document.getElementById("numbertwo").innerHTML = number2;
}
function IncreaseSecondNumber()
{
    number2++
    document.getElementById("numbertwo").innerHTML = number2;
}

function CalculateStuff()
{
    const select = document.getElementById("mathSelect");
    mathstuff = select.options[select.selectedIndex].value;
    if (mathstuff == "+") {answer = parseInt(number1) + parseInt(number2)}
    if (mathstuff == "-") {answer = parseInt(number1) - parseInt(number2)}
    if (mathstuff == "/") {answer = parseInt(number1) / parseInt(number2)}
    if (mathstuff == "*") {answer = parseInt(number1) * parseInt(number2)}
    answer = answer.toFixed(2);
    document.getElementById("result").innerHTML = answer;
    document.getElementById("SuperButton").innerHTML = number1 + mathstuff + number2;
    let calculation = "<p>" + number1 + mathstuff + number2 + "=" + answer + "</p>"
    document.getElementById("Past_calculations").insertAdjacentHTML("afterend", calculation);
}

