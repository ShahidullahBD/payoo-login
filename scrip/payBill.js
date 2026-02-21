document.getElementById('pay-bill-btn').addEventListener('click', function () {
    //1- Select Bank Validation
    const selectBank = getValueFromInput('pay-bill-bank');
    if (selectBank == 'Select A Bank') {
        alert('Please Select A Bank');
    }

    //2- Get Billar Account and Validation
    const payBillBankAcc = getValueFromInput('biller-account-number');
    if (payBillBankAcc.length !== 11) {
        alert('Invalid Account Number')
        return;
    }

    //3- get bill amount, validate, calculate and set balance
    const currentBal = getBalance();
    const billAmount = getValueFromInput('bill-input');
    const newBalance = currentBal - Number(billAmount);
    if(newBalance<0){
        alert('Insuficient Balance');
        return;
    }

    //4- pin number varify
    const pin = getValueFromInput('pin-inputed');
    if (pin == '1234') {
        alert('Pay Bill Success');
        setBalance(newBalance);


        const history = document.getElementById('history');

        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="bg-slate-100 p-2">
        ${billAmount} Taka Pay Bill Success to ${payBillBankAcc}
        new balance is ${newBalance} at ${new Date ()}
        </div>
        `
        history.append(newHistory);

    } else {
        alert('Invalid Pin');
        return;

    }});







