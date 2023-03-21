function funcAdd(){
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("result").innerHTML = "The sum of "+num1+" and "+num2+" is "+(num1+num2)+".";
}

function funcSub(){
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("result").innerHTML = "The difference of "+num1+" and "+num2+" is "+(num1-num2)+".";
}

function funcMul(){
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("result").innerHTML = "The product of "+num1+" and "+num2+" is "+(num1*num2)+".";
}

function funcDiv(){
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("result").innerHTML = "The quotient of "+num1+" and "+num2+" is "+(num1/num2)+".";
}

function funcRem(){
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("result").innerHTML = "The remainder of "+num1+" and "+num2+" is "+(num1%num2)+".";
}