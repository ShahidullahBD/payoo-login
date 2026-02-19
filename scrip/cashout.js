
document.getElementById('cashout-btn').addEventListener('click', function(){
    //1- Get the agent number & validation
    const agentNumber = getValueFromInput('agent-number');
    console.log(agentNumber);
    if(agentNumber.length !== 11){
        alert('Invalid agent number')
        return;
    }
    // console.log(agentNumber);
    
    //2- Get the amount, validate, convert to number
    const withdrawAmount = getValueFromInput('amount');

    // 3- Get the current balance, validate, convert to number
    const currentBalance = getBalance();

    //4- Calculate new balance
    const newBalance = currentBalance - Number(withdrawAmount);
    if(newBalance <0){
        alert('Invalid amount');
        return;
    }

    //5- Get the pin number, varify
    const pinInput = document.getElementById('input-pin');
    const pinNumber = pinInput.value;
    if(pinNumber==='1234'){
        //5-1- true:: show an alert > set balance
        alert('Withdraw succesfull');
        setBalance(newBalance);
    }else{
        //5-2- false:: show an error > return
        alert('Invalid pin');
        return;
    }

});

// document.getElementById('cashout-btn').addEventListener('click', function(){
//     //1- Get the agent number & validation
//     const agentNumberInput = document.getElementById('agent-number');
//     const agentNumber = agentNumberInput.value;
//     if(agentNumber.length !== 11){
//         alert('Invalid agent number')
//         return;
//     }
//     // console.log(agentNumber);
    
//     //2- Get the amount, validate, convert to number
//     const amountInpur = document.getElementById('amount');
//     const withdrawAmount = amountInpur.value;

//     //3- Get the current balance, validate, convert to number
//     const balanceElement = document.getElementById('balance');
//     const currentBalance = balanceElement.innerText;

//     //4- Calculate new balance
//     const newBalance = Number(currentBalance) - Number(withdrawAmount);
//     if(newBalance <0){
//         alert('Invalid amount');
//         return;
//     }

//     //5- Get the pin number, varify
//     const pinInput = document.getElementById('input-pin');
//     const pinNumber = pinInput.value;
//     if(pinNumber==='1234'){
//         //5-1- true:: show an alert > set balance
//         alert('Withdraw succesfull');
//         balanceElement.innerText=newBalance;        
//     }else{
//         //5-2- false:: show an error > return
//         alert('Invalid pin');
//         return;
//     }

// });