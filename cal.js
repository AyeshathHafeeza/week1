function c(){
    let num1=document.querySelector("#n1").value;
    let oper=document.getElementById("opr").value;
    let num2=document.querySelector("#n2").value;
    let res;
    if(oper == "+"){
        res = parseFloat(num1) + parseFloat(num2);
        document.getElementById("output").innerHTML = "your answer is"+" "+ res;  
    }
//     if(oper =="-"){
//         res =parseFloat(num1) - parseFloat(num2);
//         document.getElementById("res").innerHTML = "your ansr is"+""+ result;

//         alert(res)
//     }
//     if(oper =="/"){
//         res =parseFloat(num1) /parseFloat(num2);
//         document.getElementById("res").innerHTML = "your ansr is"+""+ result+"#";

//         alert(result)
//     }
//     if(oper =="*"){
//         result =parseFloat(number1) *parseFloat(number2);
//         document.getElementById("res").innerHTML = "your ansr is"+""+ result+"#";

//         alert(res)
//     }
 }
