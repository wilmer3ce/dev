let value1 = 0;
let value2 = 0;
let operation = 'sum'; // por defectola operracion se suma

function setValue(variable, value){
    if(variable === 1){
        value1 = value;
        document.getElementById('selectedValue1').textContent = value1;
    } else if (variable === 2){
        value2 = value;
        document.getElementById('selectedValue2').textContent = value2;
    }
}
function setOperation(op) {
    operation = op;
    document.getElementById('selectedOperation').textContent = (operation === 'sum') ? 'sum': 'resta';
}
function calculateresult() {
    let result;
    if(operation === 'sum') {
        result = value1 + value2;
    } else if (operation === 'subtract') {
        result = value1 - value2 ;
    }
    document.getElementById('result').textContent = result;
}
