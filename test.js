let res1 = document.getElementById("result");

function backspace(){
    res1.value = res1.value.slice(0,-1);
}

function calculate(){
    let expression = res1.value;
    let result;
    try {
        expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
        expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
        expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
 
        result = math.evaluate(expression);
        res1.value = result;
    } catch (error) {
        res1.value = "Error";
    }
}

function squareRoot(){
    res1.value += "sqrt(";
}

function base10log(){
    res1.value += "log( ";
}

function pi(){
    res1.value += "pi";
}

function e(){
    res1.value += "e";
}

function power(){
    res1.value += "^(";
}