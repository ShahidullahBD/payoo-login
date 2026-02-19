document.getElementById('send-now-btn').addEventListener('click', function(){
    console.log('send now');
    //1 Get the number and validate
    const userNumber = getValueFromInput('user-number');
    if(userNumber.length !== 11){
        alert('Invalid Number');
    }

    //2- Get the amount, validate, convert to number
    const transferAmount = getValueFromInput('amount-input');

    // 3- Get the current balance, validate, convert to number
    const currentBalance = getBalance();

    //4- Calculate new balance
    const newBalance = currentBalance - Number(transferAmount);
    if(newBalance <0){
        alert('Invalid amount');
        return;
    }

    //5- Get the pin number, varify
    const pinInput = document.getElementById('pin-input');
    const pinNumber = pinInput.value;
    if(pinNumber==='1234'){
        //5-1- true:: show an alert > set balance
        alert('Transfer succesfull');
        setBalance(newBalance);
    }else{
        //5-2- false:: show an error > return
        alert('Invalid pin');
        return;
    }
});