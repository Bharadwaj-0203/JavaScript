let item1;
let item2;
let item3;

function calculateTotal(){
    item1=parseInt(document.getElementById('num1').value);
    item2=parseInt(document.getElementById('num2').value);
    item3=parseInt(document.getElementById('num3').value);
    let result = item1+item2+item3;
    document.getElementById('result').innerText=`The total amount is: ${result}`;
}


