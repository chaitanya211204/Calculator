let res = document.getElementById("res");

function dis(val){
    res.value += val;
}

function perform(e){
    if(e.key == '0' || e.key == '1' || e.key == '2' || e.key == '3'|| e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9' || e.key == '+' || e.key == '00' || e.key == '*' || e.key == '/' || e.key == '-' || e.key == '!' || e.key == '^' || e.key == '%'){
        res.value += e.key;
    }
}

let cal = document.getElementById("maths1");
cal.onkeyup = function(e){
    if(e.keyCode === 13){
        console.log("Enter");
        let n = res.value;
        console.log(n);
        solve();
    }
}

function solve(){
    let x = res.value;
    let y = math.evaluate(x);
    res.value = y;
}

function clr(){
    res.value = "";
}