document.getElementById('add-money-btn').addEventListener('click', function(){
    const selectBank = getValueFromInput('add-money-bank');
    if(selectBank== 'Select A Bank'){
        alert('Please Select A Bank');
    }
    
    const bankAcc = getValueFromInput('bank-account-number');
    if(bankAcc.length !==11){
        alert('Invalid Account Number')
        return;
    }

    const currentBal = getBalance();
    const addMoney = getValueFromInput('add-money-amount');
    const addedMoney = Number(addMoney);
    const newBalance = currentBal + addedMoney;

    const pin = getValueFromInput('add-money-pin');
    if(pin == '1234'){
        alert('Add Money Success');
        setBalance(newBalance);        
    }else{
        alert('Invalid Pin');
        return;
    }

});