document.getElementById('generatePin-btn').addEventListener('click', function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinStr = pin + '';
    if (pinStr.length == 4) {
        document.getElementById('input-pin').value = pin;
    } else {
        console.log('pin', pin);
        getPin();
    }
})
document.getElementById('number').addEventListener('click', function (event) {
    const newNum = event.target.innerText;
    const inputNum = document.getElementById('input-number');
    if(isNaN(newNum)){
        if(newNum == 'C'){
            inputNum.value = '';
        }
    }else{
        const numValue = inputNum.value;
        const calc = numValue + newNum;
        inputNum.value = calc;
    }
})
document.getElementById('submit-btn').addEventListener('click', function(){
    
})